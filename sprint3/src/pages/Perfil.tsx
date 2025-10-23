import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type SelectedTeam = {
  nome: string;
  logo: string;
};

const Perfil = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTeam, setSelectedTeam] = useState<SelectedTeam | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("selectedTeam");
    if (saved) {
      try {
        setSelectedTeam(JSON.parse(saved));
      } catch {
        setSelectedTeam(null);
      }
    }
  }, []);

  return (
    <section className="bg-black text-white min-h-screen">
      <Header />
      <main className="flex flex-wrap justify-around gap-6 text-center items-stretch mt-10">
        <div className="flex flex-col items-center text-center">
          <img
            src="/Perfil.png"
            alt="Foto de perfil"
            className="h-40 w-40 rounded-full border-4 border-yellow-400 mb-4"
          />
          <h1 className="text-yellow-400 text-2xl font-bold">Lucas Almeida</h1>
          <p className="text-gray-400 text-sm">Lucas Almeida Vaillancourt Palomo</p>
          <p className="text-gray-400 text-sm">lucas_almeida_07@gmail.com</p>
          <p className="text-gray-400 text-sm">Porto Alegre-RS</p>
          <p className="text-yellow-400 text-lg mt-4">
            Muito daora o futebol feminino.
          </p>
          {id && (
            <p className="text-gray-500 text-xs mt-2">
              ID do perfil: <span className="text-yellow-500">{id}</span>
            </p>
          )}
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-yellow-400 text-lg font-bold mb-4">Interesses</h2>
          {selectedTeam ? (
            <div className="flex justify-center items-center space-x-4">
              <img
                src={selectedTeam.logo}
                alt={selectedTeam.nome}
                className="h-20 w-20 object-contain"
              />
              <p className="text-white text-lg font-medium">{selectedTeam.nome}</p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">Nenhum time selecionado</p>
          )}

          <Link to="/Interesse">
            <button className="mt-8 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500">
              Editar perfil
            </button>
          </Link>

          <Link to="/">
            <button className="mt-8 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500">
              Encerrar Sessão
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Perfil;

