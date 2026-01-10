import { useEffect, useState } from "react";
import { Moon } from "lucide-react";

export function DarkButton({className = ""}) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`h-10 aspect-square bg-contain bg-no-repeat bg-center hover:opacity-70 transition-opacity ${className}`}
      style={{
        backgroundImage: `url(${isDark ? "./dark_on.png" : "./dark_off.png"})`,
      }}
      aria-label="Toggle theme"
    />
  );

  return (
    <button
      className="dark:text-white mt-auto mb-8 hover:opacity-70"
      onClick={() => setIsDark(!isDark)}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );

  return (
    <Moon
      size={32}
      onClick={() => setIsDark(!isDark)}
      className="mt-auto mb-8 hover:opacity-70"
    />
  );

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
    >
      {isDark ? "☀️ Светлая" : "🌙 Темная"}
    </button>
  );
}
