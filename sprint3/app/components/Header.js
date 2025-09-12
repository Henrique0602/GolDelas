import { IoPersonCircleOutline } from "react-icons/io5";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { MdAdminPanelSettings, MdArticle } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-700 bg-black">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo GolDelas" className="h-8" />
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-6 text-white text-sm">
        <div className="flex flex-col items-center">
          <AiFillHome className="text-2xl" />
          <button>Início</button>
        </div>
        <div className="flex flex-col items-center">
          <AiFillTrophy className="text-2xl" />
          <button>Campeonatos</button>
        </div>
        <div className="flex flex-col items-center">
          <MdAdminPanelSettings className="text-2xl" />
          <button>Área Admin.</button>
        </div>
        <div className="flex flex-col items-center">
          <MdArticle className="text-2xl" />
          <button>Notícias</button>
        </div>
      
      </nav>

        <div className="flex flex-col items-center">
          <IoPersonCircleOutline className="text-2xl" />
          <p>Perfil</p>
        </div>
    </header>
  );
};

export default Header;