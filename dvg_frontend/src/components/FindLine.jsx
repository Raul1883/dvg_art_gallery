export function FindLine() {
  return (
    <header className="flex items-center px-4 py-3 gap-3 w-full bg-gray-50">
      {/* Контейнер строки поиска */}
      <div className="flex-1 flex items-center bg-[#e9e9e9] hover:bg-[#e1e1e1] transition-colors duration-200 px-4 py-2.5 rounded-xl group">
        {/* Иконка лупы (SVG) */}
        <svg
          className="text-gray-500 mr-2"
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
          placeholder="Поиск"
          className="bg-transparent border-none outline-none w-full text-base placeholder-gray-600 text-black"
        />
      </div>

      {/* Иконка уведомлений (как в Pinterest) */}
      <button className="p-2 hover:bg-gray-100 rounded-full transition">
        <img src="./user.png" className="w-10 rounded-full"/>
      </button>
    </header>
  );
}
