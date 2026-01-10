import { createPortal } from "react-dom";
import { DarkButton } from "./CoolVenomEffect";
import React, { useState, useRef } from "react";

export function FindLine({ onSearchChange, searchValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  // Функция для переключения модалки
  const toggleModal = () => setIsOpen(!isOpen);

  const audioLow = useRef(
    new Audio("./normal.mp3")
  );
  const audioHigh = useRef(
    new Audio("https://www.soundjay.com/button/sounds/button-10.mp3")
  );

  const otsalkiPoshalki = () => {
    const nextCount = count + 1;
    setCount(nextCount);

    console.log(nextCount);
    if (nextCount >= 2) {
      audioLow.current.currentTime = 0; // Сброс в начало, если кликают быстро
      audioLow.current.play();
      console.log("audioLow.current.play();");
    }
  };

  return (
    <header className="flex items-center px-4 py-3 gap-3 w-full">
      {/* Контейнер строки поиска */}
      <div className="flex-1 flex items-center bg-zinc-200 dark:bg-zinc-600 dark:hover:bg-zinc-500 hover:bg-zinc-300 transition-colors duration-200 px-4 py-2.5 rounded-xl group">
        {/* Иконка лупы (SVG) */}
        <svg
          className="text-zinc-500 dark:text-zinc-400 mr-2"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0020 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.97 0 3.8-.59 5.33-1.59l4.26 4.26c.18.18.43.29.71.29.28 0 .53-.11.71-.29.39-.39.39-1.03 0-1.42z" />
        </svg>

        {/* Инпут */}
        <input
          type="text"
          value={searchValue} // Чтобы значение в строке менялось синхронно
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Поиск"
          className="bg-transparent border-none outline-none w-full text-base placeholder-zinc-600 dark:placeholder-zinc-400 text-black dark:text-zinc-300"
        />
      </div>

      <div className="relative">
        {/* Кнопка открытия */}

        <button
          onClick={otsalkiPoshalki}
          className="active:bg-zinc-800 p-2 hidden md:block rounded-full transition hover:bg-zinc-200"
        >
          <img
            src="./user.png"
            className="w-10 rounded-full dark:opacity-70"
            alt="User"
          />
        </button>

        <button
          onClick={toggleModal}
          className="p-2 md:hidden rounded-full transition"
        >
          <img
            src="./user.png"
            className="w-10 rounded-full dark:opacity-70"
            alt="User"
          />
        </button>

        {isOpen &&
          createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={toggleModal}
            >
              <div
                className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-xl sm:w-[90%] md:w-[80%] max-w-2xl mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-xl font-bold mb-4 dark:text-white">
                  Об авторах
                </h2>
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
                      поместили нашего стримера в разные эстетики, изобразив
                      свое виденье в множестве работ, которые вы можете
                      посмотреть не просто на пинтересте, ведь зачем он нам,
                      если у нас уже есть свой <b>ПИНТЕРЕСТ ДОМА</b>.
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
                    onClick={toggleModal}
                    className="flex-1 py-2 bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white rounded-lg hover:opacity-90 transition"
                  >
                    Пинтерест дома
                  </button>
                  <DarkButton />
                </div>
              </div>
            </div>,
            document.body // Рендерим напрямую в body
          )}
      </div>
    </header>
  );
}
