'use client'
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";

const Perfil = () => {
  const { id } = useParams();

  return (
    <section className="p-4 bg-black text-white min-h-screen">
      <Header />

      <main className="flex flex-wrap justify-around gap-6 text-center items-stretch mt-10">
        <div className="flex flex-col items-center text-center">
          <img
            src="/Perfil.png"
            alt="Foto de perfil"
            className="h-32 w-32 rounded-full border-4 border-yellow-400 mb-4"
          />
           <p>ID do perfil: {id}</p>
          <h1 className="text-yellow-400 text-2xl font-bold">Lucas Almeida</h1>
          <p className="text-gray-400 text-sm">Lucas Almeida Vaillancourt Palomo</p>
          <p className="text-gray-400 text-sm">lucas_almeida_07@gmail.com</p>
          <p className="text-gray-400 text-sm">Porto Alegre-RS</p>
          <p className="text-yellow-400 text-lg mt-4">Muito daora o futebol feminino.</p>
        </div>

        <div className="mt-8 w-full px-4">
          <h2 className="text-yellow-400 text-lg font-bold mb-4">Interesses</h2>
          <div className="flex items-center space-x-4">
            <img
              src="/SP.png"
              alt="São Paulo"
              className="h-12 w-12 object-contain"
            />
            <p className="text-white text-lg font-medium">São Paulo</p>
          </div>
        </div>

        <button className="mt-8 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500">
          Editar perfil
        </button>
      </main>

     
    </section>
  );
};

export default Perfil;