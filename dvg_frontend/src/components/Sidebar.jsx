import { DarkButton } from "./CoolVenomEffect";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-72px border-r border-zinc-200 dark:border-zinc-500 sticky top-0 h-screen hidden md:flex flex-col items-center items-center">
      <a href="https://t.me/drawwithgood">
        <img
          src="./logo.png"
          className="m-4 w-12 h-auto rounded-full hover:opacity-90 hover:bg-gray-200"
        />
      </a>

      <Link className="dark:text-white hover:opacity-70">
        <svg
          aria-hidden="true"
          aria-label=""
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            fill="currentColor"
            d="M9.59.92a3.63 3.63 0 0 1 4.82 0l7.25 6.44A4 4 0 0 1 23 10.35v8.46a3.9 3.9 0 0 1-3.6 3.92 106 106 0 0 1-14.8 0A3.9 3.9 0 0 1 1 18.8v-8.46a4 4 0 0 1 1.34-3zM12 16a5 5 0 0 1-3.05-1.04l-1.23 1.58a7 7 0 0 0 8.56 0l-1.23-1.58A5 5 0 0 1 12 16"
          ></path>
        </svg>
      </Link>
      <DarkButton />
    </aside>
  );
};

export default Sidebar;
