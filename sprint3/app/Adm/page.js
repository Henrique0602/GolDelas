import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const ADM = () => {
    return (
        <div className="bg-black text-white min-h-screen ">
            <Header></Header>

            <main className="p-4 space-y-6  ">
                <h1 className="text-yellow-400 text-2xl font-bold text-center">
                    Área Administrativa
                </h1>
                <p className="text-gray-400 text-lg text-center">
                    Que tipo de perfil se encaixa melhor com você?
                </p>
                <p className="text-gray-400 text-center mb-6">
                    Escolha uma das opções abaixo:
                </p>


                <div className="space-y-6 max-w-md mx-auto">


                    <Link href="/Interesse">
                        <div className="border border-yellow-400 rounded-lg p-6 text-center mb-10">
                            <h2 className="text-yellow-400 text-lg font-bold mb-2">USUÁRIO</h2>
                            <p className="text-gray-400 text-sm">
                                Sou um usúario e desejo descobrir mais sobre meu time.
                            </p>
                        </div>
                    </Link>



                    <div className="border border-yellow-400 rounded-lg p-6 text-center mb-10">
                        <h2 className="text-yellow-400 text-lg font-bold mb-2">TIME</h2>
                        <p className="text-gray-400 text-sm">
                            Represento um clube e desejo encontrar jovens talentos, além de
                            adentrar competições.
                        </p>
                    </div>


                    <div className="border border-yellow-400 rounded-lg p-6 text-center">
                        <h2 className="text-yellow-400 text-lg font-bold mb-2">JOGADORA</h2>
                        <p className="text-gray-400 text-sm">
                            Sou uma jogadora e desejo procurar oportunidades de jogar em times
                            de várzea.
                        </p>
                    </div>



                </div>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default ADM;