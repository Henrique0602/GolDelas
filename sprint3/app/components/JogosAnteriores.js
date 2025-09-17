import Link from "next/link";

const Anteriores = () => {
    return (
        <section className="p-4">
            <h2 className="text-yellow-400 text-lg font-bold mb-6">JOGOS ANTERIORES</h2>

            <div className="flex flex-wrap justify-around gap-6 text-center items-stretch">
                <div className="rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Ligue 1</p>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/85.png"
                                alt="Paris Saint-Germain"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Paris Saint-Germain</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">2</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/99.png"
                                alt="Clermont Foot"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Clermont Foot</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">3</p>
                    </div>
                    <Link href="/Estatisticas/1">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatisticas &gt;
                        </button>
                    </Link>
                </div>

                <div className="rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Bundesliga</p>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/192.png"
                                alt="1.FC Koln"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">1.FC Koln</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">1</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/157.png"
                                alt="Bayern Munich"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Bayern Munich</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">2</p>
                    </div>
                    <Link href="/Estatisticas/2">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatisticas &gt;
                        </button>
                    </Link>
                </div>

                <div className="rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">La Liga</p>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/538.png"
                                alt="Celta Vigo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Celta Vigo</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">2</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/529.png"
                                alt="Barcelona"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Barcelona</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">1</p>
                    </div>
                    <Link href="/Estatisticas/3">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatisticas &gt;
                        </button>
                    </Link>
                </div>

                <div className="rounded-lg p-6 bg-black shadow-lg flex flex-col items-center">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Serie A</p>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/489.png"
                                alt="AC Milan"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">AC Milan</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">3</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.api-sports.io/football/teams/504.png"
                                alt="Verona"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Verona</p>
                        </div>
                        <p className="text-white font-bold text-2xl ml-10">1</p>
                    </div>
                    <Link href="/Estatisticas/4">
                        <button className="text-yellow-400 text-sm mt-4 underline flex items-center">
                            Ver estatisticas &gt;
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Anteriores;
