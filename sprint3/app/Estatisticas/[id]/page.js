"use client";
import { useParams, useRouter } from "next/navigation";
import Header from "@/app/components/Header";

const Estatisticas = () => {
    const { id } = useParams();
    const router = useRouter();

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
            imagens: {
                time1: "/SP.png",
                time2: "/Palmeiras.png",
            },
            gols: [
                { jogador: "Athenea del Castillo", minutos: "52, 64", time: "São Paulo" },
                { jogador: "Lena Oberdorf", minutos: "15 (P)", time: "Palmeiras" },
            ],
        },

        "2": {
            time1: "Corinthians",
            time2: "Vitória",
            placar: "2 x 1",
            detalhes: {
                chutes: [12, 7],
                chutesAoGol: [5, 3],
                posseDeBola: ["53%", "47%"],
                passes: [500, 200],
                precisaoDePasses: ["71%", "75%"],
                faltas: [5, 10],
                cartoesAmarelos: [1, 2],
                cartoesVermelhos: [0, 1],
                impedimentos: [2, 4],
                escanteios: [7, 7],
            },
            imagens: {
                time1: "/Corinthians.png",
                time2: "/Vitoria.png",
            },
            gols: [
                { jogador: "Joana", minutos: "52, 64", time: "Corinthians" },
                { jogador: "Adriana", minutos: "15 (P)", time: "Vitória" },
            ],
        },

        "3": {
            time1: "Flamengo",
            time2: "Botafogo",
            placar: "3 x 2",
            detalhes: {
                chutes: [10, 8],
                chutesAoGol: [5, 5],
                posseDeBola: ["53%", "47%"],
                passes: [300, 200],
                precisaoDePasses: ["70%", "75%"],
                faltas: [5, 2],
                cartoesAmarelos: [1, 2],
                cartoesVermelhos: [1, 0],
                impedimentos: [2, 4],
                escanteios: [7, 7],
            },
            imagens: {
                time1: "/Flamengo.png",
                time2: "/Bota.png",
            },
            gols: [
                { jogador: "Debora", minutos: "52, 64, 90", time: "Flamengo" },
                { jogador: "Adriana", minutos: "15 (P), 95", time: "Botafogo" },
            ],
        },


        "4": {
            time1: "Bahia",
            time2: "Fortaleza",
            placar: "2 x 2",
            detalhes: {
                chutes: [10, 8],
                chutesAoGol: [5, 5],
                posseDeBola: ["53%", "47%"],
                passes: [300, 200],
                precisaoDePasses: ["70%", "75%"],
                faltas: [5, 2],
                cartoesAmarelos: [1, 2],
                cartoesVermelhos: [1, 0],
                impedimentos: [2, 4],
                escanteios: [7, 7],
            },
            imagens: {
                time1: "/Bahia.png",
                time2: "/Fortaleza.png",
            },
            gols: [
                { jogador: "Lucy", minutos: "52, 64", time: "Bahia" },
                { jogador: "Julia", minutos: "5, 95", time: "Fortaleza" },
            ],
        }



    };

    const jogo = jogos[id];

    if (!jogo) {
        return <p className="text-white">Carregando...</p>;
    }

    return (
        <div className="bg-black text-white min-h-screen p-6">
            <Header></Header>
            <div className="text-center mb-6">
                <div className="flex justify-center items-center space-x-4">
                    <img src={jogo.imagens.time1} alt={jogo.time1} className="h-12 w-12" />
                    <p className="text-4xl font-bold">{jogo.placar}</p>
                    <img src={jogo.imagens.time2} alt={jogo.time2} className="h-12 w-12" />
                </div>
                <p className="text-gray-400 mt-2">
                    {jogo.gols
                        .map((gol) => `${gol.jogador} ${gol.minutos}`)
                        .join(" | ")}
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
