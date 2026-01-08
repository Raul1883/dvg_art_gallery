import { Home, Moon } from "lucide-react";
import { DarkButton } from "./CoolVenomEffect";


const Sidebar = () => {
  return (
    <aside className="w-72px border-r border-gray-200 sticky top-0 h-screen hidden md:flex flex-col items-center items-center">
      <img src="logo.png" className="m-4 w-12 h-auto rounded-full hover:opacity-90 hover:bg-gray-200" />
      <Home size="32" className="hover:opacity-70"/>
      <DarkButton/>
    </aside>
  );
};

export default Sidebar;
