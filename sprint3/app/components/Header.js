import { IoPersonCircleOutline } from "react-icons/io5";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { MdAdminPanelSettings, MdArticle } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-around gap-6 text-center items-stretch">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo GolDelas" className="h-8" />
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-6 text-white text-sm">
        <div className="flex flex-col items-center">
          <Link href="/">
            <AiFillHome className="text-2xl" />

            <button>Início</button>
          </Link>

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
        <Link href="/Perfil/1">
          <IoPersonCircleOutline className="text-2xl" />
          <p>Perfil</p>
        </Link>

      </div>
    </header>
  );
};

export default Header;