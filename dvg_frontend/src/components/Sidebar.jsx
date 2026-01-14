import { DarkButton } from "./CoolVenomEffect";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ModalButton } from "./ModalButton";

export default function Sidebar({}) {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения модалки
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <aside className="w-72px border-r border-zinc-200 dark:border-zinc-500 sticky top-0 h-screen hidden md:flex flex-col items-center items-center">
      <a href="https://t.me/drawwithgood" target="_blank">
        <img
          src="./logo.webp"
          className="m-4 w-12 h-auto rounded-full hover:opacity-90 hover:bg-gray-200"
        />
      </a>

      <Link to="/" className="dark:text-white hover:opacity-70">
        <svg
          aria-hidden="true"
          aria-label=""
          height="30"
          width="30"
          role="img"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.59.92a3.63 3.63 0 0 1 4.82 0l7.25 6.44A4 4 0 0 1 23 10.35v8.46a3.9 3.9 0 0 1-3.6 3.92 106 106 0 0 1-14.8 0A3.9 3.9 0 0 1 1 18.8v-8.46a4 4 0 0 1 1.34-3zM12 16a5 5 0 0 1-3.05-1.04l-1.23 1.58a7 7 0 0 0 8.56 0l-1.23-1.58A5 5 0 0 1 12 16"
          ></path>
        </svg>
      </Link>

      <ModalButton
        mobile={false}
        src={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z"
              fill="currentColor"
            />
            <path
              d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
              fill="currentColor"
            />
            <path
              clip-rule="evenodd"
              d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
              fill="currentColor"
            />
          </svg>
        }
      />

      <DarkButton className="mt-auto mb-8" />
    </aside>
  );
}
