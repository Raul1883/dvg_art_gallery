import { DarkButton } from "./CoolVenomEffect";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { AboutModal } from "./AboutModal";

export function ModalButton({ src, mobile, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const darkButtonVisibility = mobile ? "" : "hidden";

  // Функция для переключения модалки
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleModal}
        className="p-2 pt-4 dark:text-white hover:opacity-70 rounded-full transition"
      >
        {src}
      </button>

      {/* Модальное окно (Overlay) */}

      {isOpen && <AboutModal onClose={toggleModal} />}
    </div>
  );
}
