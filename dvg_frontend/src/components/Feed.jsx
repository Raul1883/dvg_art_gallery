import { ArtCard } from "./ArtCard";
import { FindLine } from "./FindLine";
import { useState, useEffect } from "react";
import { Developer } from "./Developer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function useScrollMemory() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. При загрузке страницы/смене пути проверяем сохраненный скролл
    const savedScroll = sessionStorage.getItem(`scroll_${pathname}`);
    if (savedScroll) {
      // Небольшая задержка, чтобы контент успел отрендериться
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScroll, 10));
      }, 0);
    }

    // 2. Функция для сохранения текущей позиции
    const handleScroll = () => {
      sessionStorage.setItem(`scroll_${pathname}`, window.scrollY.toString());
    };

    // Слушаем скролл и сохраняем его
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Срабатывает каждый раз при переходе на новую страницу
}

export function Feed({ items, searchQuery, setSearchQuery }) {
  const filteredItems = items.filter((item) => {
    const content =
      `${item.image_name} ${item.description} ${item.author}`.toLowerCase();
    return content.includes(searchQuery.toLowerCase());
  });

  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const toggleDevModal = () => {
    setIsDevModalOpen(!isDevModalOpen);
  };

  useScrollMemory();

  return (
    <div className="p-4 mt-0 pt-0">
      <FindLine onSearchChange={setSearchQuery} searchValue={searchQuery} />
      {filteredItems.length > 0 ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <ArtCard data={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            По запросу <span className="font-bold">"{searchQuery}"</span> ничего
            не найдено
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 text-red-500 font-medium hover:underline"
          >
            Сбросить поиск
          </button>
        </div>
      )}

      <div className="flex justify-center pb-4">
        <button
          onClick={toggleDevModal}
          className="text-zinc-400 dark:text-zinc-300"
        >
          dev by raul
        </button>
      </div>

      {isDevModalOpen && (
        <div
          className="fixed inset-0 z-50  bg-black/50 backdrop-blur-sm"
          onClick={toggleDevModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleDevModal}>
              ×
            </button>
            <Developer CloseFunc={toggleDevModal} />
          </div>
        </div>
      )}
    </div>
  );
}
