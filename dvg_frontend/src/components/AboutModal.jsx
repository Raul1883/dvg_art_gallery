import { createPortal } from "react-dom";
import { DarkButton } from "./CoolVenomEffect";

export function AboutModal({ onClose, darkButtonVisibility }) {
    console.log(darkButtonVisibility);
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-xl sm:w-[90%] md:w-[80%] max-w-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 dark:text-white">Об авторах</h2>
        <div className="relative flex flex-col md:flex-row">
          {/* Левый блок: Текст (теперь он главный и диктует высоту) */}
          <div className="flex-1">
            <h3 className="text-zinc-600 dark:text-zinc-300">
              Арты созданы в рамках флешмоба сообщества{" "}
              <a href="https://t.me/drawwithgood">
                <b>Draw With Good</b>
              </a>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 pt-4">
              <b>Представляем вам новый флешмоб!</b> <br />В этот раз мы
              поместили нашего стримера в разные эстетики, изобразив свое
              виденье в множестве работ, которые вы можете посмотреть не просто
              на пинтересте, ведь зачем он нам, если у нас уже есть свой{" "}
              <b>ПИНТЕРЕСТ ДОМА</b>.
            </p>
          </div>

          {/* Правый блок: QR-код (подстраивается под высоту соседа) */}
          <div className="hidden md:block w-[40%] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="./qr.png"
                className="max-h-full max-w-full object-contain"
                alt="QR Code"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white rounded-lg hover:opacity-90 transition"
          >
            Пинтерест дома
          </button>
          <DarkButton className={darkButtonVisibility}/>
        </div>
      </div>
    </div>,
    document.body
  );
}
