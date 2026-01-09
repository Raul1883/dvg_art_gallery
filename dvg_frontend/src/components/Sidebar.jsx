import { Home} from "lucide-react";
import { DarkButton } from "./CoolVenomEffect";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-72px border-r border-gray-200 sticky top-0 h-screen hidden md:flex flex-col items-center items-center">
      <a href="https://t.me/drawwithgood">
        <img
          src="./logo.png"
          className="m-4 w-12 h-auto rounded-full hover:opacity-90 hover:bg-gray-200"
        />
      </a>

      <Link to={`/`}>
        <Home size="32" className="hover:opacity-70" />
      </Link>
      <DarkButton />
    </aside>
  );
};

export default Sidebar;
