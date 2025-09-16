import { IoPersonCircleOutline } from "react-icons/io5";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { MdAdminPanelSettings, MdArticle } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-yellow-900 to-yellow-600 p-4">
      <div className="flex flex-wrap justify-around items-center gap-4">
        
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo GolDelas" className="h-8" />
        </div>

       
        <nav className="flex flex-wrap justify-center gap-6 text-white text-sm w-full md:w-auto">
          <Link href="/Home" className="flex flex-col items-center">
            <AiFillHome className="text-2xl" />
            <span>Início</span>
          </Link>

          <Link href="/Campeonato" className="flex flex-col items-center">
            <AiFillTrophy className="text-2xl" />
            <span>Campeonatos</span>
          </Link>

          <Link href="/Adm" className="flex flex-col items-center">
            <MdAdminPanelSettings className="text-2xl" />
            <span>Área Admin.</span>
          </Link>

          <Link href="/Noticias" className="flex flex-col items-center">
            <MdArticle className="text-2xl" />
            <span>Notícias</span>
          </Link>

        </nav>
        
          <Link href="/Perfil/1" className="flex flex-col items-center">
            <IoPersonCircleOutline className="text-2xl" />
            <span>Perfil</span>
          </Link>
      </div>
    </header>
  );
};

export default Header;
