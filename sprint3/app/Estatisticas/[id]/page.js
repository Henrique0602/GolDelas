"use client";
import { useParams, useRouter } from "next/navigation";

const Estatisticas = () => {
    const { id } = useParams();
    const router = useRouter();

    // Dados de exemplo (substitua por dados reais ou API)
    const jogos = {
        "1": {
            time1: "São Paulo",
            time2: "Palmeiras",
            placar: "5 x 0",
            detalhes: {
                chutes: [12, 7],
                chutesAoGol: [10, 3],
                posseDeBola: ["53%", "47%"],
                passes: [430, 381],
                precisaoDePasses: ["81%", "78%"],
                faltas: [5, 6],
                cartoesAmarelos: [1, 2],
                cartoesVermelhos: [0, 0],
                impedimentos: [2, 2],
                escanteios: [7, 4],
            },
        },
    };

    const jogo = jogos[id];

    if (!jogo) {
        return <p className="text-white">Carregando...</p>;
    }

    return (
        <div className="bg-black text-white min-h-screen p-6">
            <div className="text-center mb-6">
                <div className="flex justify-center items-center space-x-4">
                    <img src="/SP.png" alt="São Paulo" className="h-12 w-12" />
                    <p className="text-4xl font-bold">{jogo.placar}</p>
                    <img src="/Palmeiras.png" alt="Palmeiras" className="h-12 w-12" />
                </div>
                <p className="text-gray-400 mt-2">
                    Athenea del Castillo 52, 64 | Lena Oberdorf 15 (P)
                </p>
            </div>

            <h2 className="text-yellow-400 text-lg font-bold mb-4 text-center">
                Estatísticas dos Times
            </h2>

            <div className=" gap-4 text-center">
                {Object.entries(jogo.detalhes).map(([key, value], index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border-b border-gray-700 py-2"
                    >
                        <p className="text-yellow-400 font-bold text-lg">
                            {value[0]}
                        </p>
                        <p className="text-white text-sm capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                        </p>
                        <p className="text-red-400 font-bold text-lg">
                            {value[1]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Estatisticas;
