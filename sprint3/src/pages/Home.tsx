import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JogosAnteriores from "@/components/JogosAnteriores";
import ProximosJogos from "@/components/ProximosJogos";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main className="p-4 space-y-6">
        <section className="border border-yellow-400 rounded-lg overflow-hidden">
          <h2 className="text-yellow-400 text-lg font-bold p-2">NOTÍCIAS</h2>

          <div className="relative w-full max-h-[400px] rounded-lg overflow-hidden">
            <img
              src="/Noticia.jpg"
              alt="Notícia"
              className="w-screen object-contain bg-black"
            />

            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4">
              <h3 className="text-white font-bold text-lg text-center">
                Hat-trick aos 16! Mariana Souza brilha no Sub-17 e já atrai
                olheiros da Europa!
              </h3>
            </div>
          </div>
        </section>

        <section className="border border-yellow-400 rounded-lg overflow-hidden">
          <h2 className="text-yellow-400 text-lg font-bold p-2">DESTAQUES</h2>

          <div className="relative w-full max-h-[400px] rounded-lg overflow-hidden">
            <img
              src="/Destaque.png"
              alt="Destaque"
              className="w-full object-cover"
            />

            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4">
              <h3 className="text-white font-bold text-lg text-center">
                Corinthians domina e vence por 3x0 com golaço de Gabi Portilho e
                defesa impenetrável!
              </h3>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-6">
          <div className="border border-yellow-400 rounded-lg p-4 flex-1">
            <JogosAnteriores />
          </div>

          <div className="border border-yellow-400 rounded-lg p-4 flex-1">
            <ProximosJogos />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

