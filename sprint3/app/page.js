import Header from "./components/Header";
import Proximo from "./components/ProximosJogos";
import Anteriores from "./components/JogosAnteriores";

const Home = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header></Header>

            <main className="p-4 space-y-6">
                <section className="flex flex-wrap justify-around gap-6 text-center items-stretch">
                 
                    <div className="border border-yellow-400 rounded-lg p-4 w-2xl">
                        <h2 className="text-yellow-400 text-lg font-bold mb-2">NOTÍCIAS</h2>
                        <img
                            src="/Noticia.jpg"
                            alt="Notícia"
                            className="rounded-lg mb-2 w-2xs mx-auto"
                        />
                        <p>
                            Hat-trick aos 16! Mariana Souza brilha no Sub-17 e já atrai
                            olheiros da Europa!
                        </p>
                    </div>

                   
                    <div className="border border-yellow-400 rounded-lg p-4 w-2xl">
                        <h2 className="text-yellow-400 text-lg font-bold mb-2">DESTAQUES</h2>
                        <img
                            src="/Destaque.png"
                            alt="Destaque"
                            className="rounded-lg mb-2 w-2xs mx-auto"
                        />
                        <p>
                            Corinthians domina e vence por 3x0 com gols de Gabi Portilho e
                            defesa impenetrável!
                        </p>
                    </div>
                </section>

               
                <Proximo></Proximo>
               
                <Anteriores></Anteriores>
            </main>

            <footer className="bottom-0 left-0 right-0 bg-black border-t border-gray-700 p-4 flex justify-around"></footer>
        </div>
    );
};

export default Home;