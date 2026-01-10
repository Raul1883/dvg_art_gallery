import React, { useState, useRef } from "react";
import { ModalButton } from "./ModalButton";

export function FindLine({ onSearchChange, searchValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  // Функция для переключения модалки
  const toggleModal = () => setIsOpen(!isOpen);

  const audioLow = useRef(new Audio("./normal.mp3"));
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
      </div>

      <ModalButton
          className="md:hidden"
          mobile={true}
          src={
            <img
              src="./user.png"
              className="w-10 rounded-full dark:opacity-70"
              alt="User"
            />
          }
        />
    </header>
  );
}
