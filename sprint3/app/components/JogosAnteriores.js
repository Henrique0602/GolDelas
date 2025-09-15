import Link from "next/link";

const Anteriores = () => {
    return (
        <section className="p-4">

            <h2 className="text-yellow-400 text-lg font-bold mb-6 ">JOGOS ANTERIORES</h2>


            <div className="flex flex-wrap justify-around gap-6 text-center items-stretch">

                <div className=" rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Copa do Brasil</p>
                    <div className="flex justify-between items-center w-full">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/SP.png"
                                alt="São Paulo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">São Paulo</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">5</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/Palmeiras.png"
                                alt="Palmeiras"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Palmeiras</p>
                        </div>
                        <p className="text-white font-bold text-2xl  ml-10">0</p>
                    </div>
                    <Link href="/Estatisticas/1">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatísticas →
                        </button>
                    </Link>
                </div>

                <div className=" rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Campeonato Brasileiro</p>
                    <div className="flex justify-between items-center w-full">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/Corinthians.png"
                                alt="Corinthians"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Corinthians</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">2</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/Vitoria.png"
                                alt="Vitória"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Vitória</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">1</p>
                    </div>
                     <Link href="/Estatisticas/2">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatísticas →
                        </button>
                    </Link>
                </div>


                <div className=" rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Campeonato Carioca</p>
                    <div className="flex justify-between items-center w-full">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/Flamengo.png"
                                alt="Flamengo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Flamengo</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">3</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/Bota.png"
                                alt="Botafogo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Botafogo</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">2</p>
                    </div>
                     <Link href="/Estatisticas/3">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatísticas →
                        </button>
                    </Link>
                </div>


                <div className=" rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Campeonato Brasileiro</p>
                    <div className="flex justify-between items-center w-full">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/Bahia.png"
                                alt="Bahia"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Bahia</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">2</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">

                        <div className="flex items-center space-x-4">
                            <img
                                src="/Fortaleza.png"
                                alt="Fortaleza"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Fortaleza</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">2</p>
                    </div>
                       <Link href="/Estatisticas/4">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatísticas →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Anteriores;