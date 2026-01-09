import subprocess
import uuid
import json
import shutil
from pathlib import Path
from PIL import Image

# --- КОНФИГУРАЦИЯ ---
SOURCE_DIR = Path("./in_data")  # Исходные архивы
OUTPUT_DIR = Path("./out_data")  # Готовые данные для S3
DB_PATH = Path("./db.json")  # Файл базы данных
SEVEN_ZIP_PATH = r"C:\Program Files\7-Zip\7z.exe"

THUMB_WIDTH = 450  # Ширина превью для ленты
IMAGE_QUALITY = 85  # Качество сжатия JPEG

# Разрешенные расширения для референсов
ALLOWED_EXT = ('.png', '.jpg', '.jpeg', '.webp')


def extract_archive(archive_path: Path, extract_to: Path) -> bool:
    """Распаковка архива через 7-Zip."""
    try:
        result = subprocess.run(
            [SEVEN_ZIP_PATH, "x", str(archive_path), f"-o{extract_to}", "-y"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        return result.returncode == 0
    except Exception as e:
        print(f"Ошибка при вызове 7-Zip: {e}")
        return False


def get_actual_data_root(temp_path: Path) -> Path:
    """
    Исправляет проблему вложенных папок.
    Если в архиве была папка, внутри которой лежат файлы, возвращает путь к ней.
    """
    contents = [c for c in temp_path.iterdir() if c.name != "__MACOSX"]
    if len(contents) == 1 and contents[0].is_dir():
        return contents[0]
    return temp_path


def process_image(input_path: Path, output_path: Path, is_thumb: False):
    """Оптимизация изображения и создание превью."""
    with Image.open(input_path) as img:
        # Конвертация в RGB для совместимости с JPEG
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        if is_thumb:
            w_percent = THUMB_WIDTH / float(img.size[0])
            h_size = int(float(img.size[1]) * w_percent)
            img = img.resize((THUMB_WIDTH, h_size), Image.Resampling.LANCZOS)

        img.save(output_path, "JPEG", optimize=True, quality=IMAGE_QUALITY)


def parse_metadata(inf_path: Path) -> dict:
    """Парсинг текстового файла с описанием (3 строки)."""
    if not inf_path.exists():
        return {"title": "Untitled", "desc": "", "nick": "Anonymous"}

    with open(inf_path, 'r', encoding='utf-8') as f:
        lines = [line.strip() for line in f.readlines()]

    return {
        "title": lines[0] if len(lines) > 0 else "Untitled",
        "desc": lines[1] if len(lines) > 1 else "",
        "nick": lines[2] if len(lines) > 2 else "Anonymous",
        "link": lines[3] if len(lines) > 3 else ""
    }


def handle_assets(source_root: Path, dist_root: Path):
    """Копирует и обрабатывает основные файлы: main, avatar, refs."""
    assets_info = {"main": None, "thumb": None, "avatar": None, "refs": []}

    # 1. Main image & Thumbnail
    main_src = source_root / "main.png"
    if main_src.exists():
        # Копируем оригинал
        shutil.copy2(main_src, dist_root / "main.png")
        assets_info["main"] = "main.png"
        # Создаем превью
        process_image(main_src, dist_root / "thumb.jpg", is_thumb=True)
        assets_info["thumb"] = "thumb.jpg"

    # 2. Avatar (поддержка разных форматов)
    for ext in ['png', 'jpg', 'jpeg']:
        avatar_src = source_root / f"avatar.{ext}"
        if avatar_src.exists():
            shutil.copy2(avatar_src, dist_root / f"avatar.{ext}")
            assets_info["avatar"] = f"avatar.{ext}"
            break

    # 3. References
    ref_src_dir = source_root / "refs"
    if ref_src_dir.exists() and ref_src_dir.is_dir():
        ref_dist_dir = dist_root / "refs"
        ref_dist_dir.mkdir(exist_ok=True)

        valid_refs = [f for f in ref_src_dir.iterdir()
                      if f.suffix.lower() in ALLOWED_EXT and not f.name.startswith('.')]

        for i, ref_file in enumerate(valid_refs):
            ref_name = f"ref_{i}.jpg"
            process_image(ref_file, ref_dist_dir / ref_name, is_thumb=False)
            assets_info["refs"].append(ref_name)

    return assets_info


def main():
    """Основная логика сборки."""
    if not OUTPUT_DIR.exists():
        OUTPUT_DIR.mkdir(parents=True)

    db_entries = []

    for arch_path in SOURCE_DIR.glob('*'):
        if arch_path.suffix.lower() not in ('.zip', '.rar'):
            continue

        print(f"Processing: {arch_path.name} in progress", end="")
        item_id = str(uuid.uuid4())
        temp_extract = SOURCE_DIR / item_id
        dist_path = OUTPUT_DIR / item_id

        try:
            # Распаковка
            if not extract_archive(arch_path, temp_extract):
                print(f"err unzip")
                continue

            # Определяем реальный корень данных (фикс вложенных папок)
            data_root = get_actual_data_root(temp_extract)

            # Проверка обязательного файла
            if not (data_root / "main.png").exists():
                print(f"Пропуск: отсутствует main.png в {arch_path.name}")
                continue

            dist_path.mkdir(parents=True, exist_ok=True)

            # Обработка контента
            metadata = parse_metadata(data_root / "inf.txt")
            assets = handle_assets(data_root, dist_path)

            # Сбор данных для БД
            db_entries.append({
                "id": item_id,
                "image_name": metadata["title"],
                "description": metadata["desc"],
                "author": metadata["nick"],
                "author_link": metadata["link"],
                "assets": assets
            })

        except Exception as e:
            print(f"fail {e}")

        finally:
            # Всегда удаляем временные файлы
            if temp_extract.exists():
                shutil.rmtree(temp_extract)

        print(f"\rProcessing: {arch_path.name} done")

    # Сохранение базы данных
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(db_entries, f, ensure_ascii=False, indent=2)

    print(f"\ndone for {len(db_entries)}")
    print(f"output dir: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
