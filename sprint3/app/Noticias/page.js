"use client";
import Header from "@/app/components/Header";

const noticias = [
    {
        id: 1,
        titulo:
            "Com apenas 16 anos, atacante do Sub-17 do São José marca hat-trick e impressiona olheiros europeus",
        imagem: "/Noticia.jpg",
        descricao:
            "Na tarde do último sábado, o Campeonato Paulista Sub-17 Feminino testemunhou um espetáculo raro...",
    },
    {
        id: 2,
        titulo: "Final da Copa do Brasil Feminina tem recorde de público e audiência: O Brasil está assistindo",
        imagem: "/Noticia2.png",
        descricao:
            "A final da Copa do Brasil Feminina, disputada entre Fortaleza e Grêmio na Arena Castelão, foi um marco para o futebol feminino brasileiro",
    },
    {
        id: 3,
        titulo: "Ex-volante da Seleção se junta a projeto social para formar futuras craques na periferia de Recife",
        imagem: "/Noticia3.png",
        descricao:
            "Após uma carreira marcada por passagens pela Seleção Brasileira e clubes internacionais, a ex-volante Juliana Ribeiro anunciou um novo capítulo de sua vida",
    },
    {
        id: 4,
        titulo: "Gol de bicicleta aos 92 minutos garante título inédito para o Bahia no Nordestão Feminino",
        imagem: "/noticia4.png",
        descricao:
            "O Nordestão Feminino teve um desfecho de cinema neste domingo",
    },
    {
        id: 5,
        titulo: "Técnica do Avaí/Kindermann inova com linha de 3 zagueiras e garante classificação inédita à Libertadores",
        imagem: "/noticia5.png",
        descricao:
            "Em uma das partidas mais tensas da temporada, o Avaí/Kindermann garantiu sua vaga inédita na Copa Libertadores Feminina com uma vitória suada sobre o Internacional.",
    },
];

const Noticias = () => {
    return (
        <section className="bg-black text-white min-h-screen">
            <Header />

            <main className="p-4 space-y-6">
                <h2 className="text-yellow-400 text-lg font-bold mb-6">
                    NOTÍCIAS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {noticias.map((noticia) => (
                        <div
                            key={noticia.id}
                            className="border border-yellow-400 rounded-lg overflow-hidden shadow-lg bg-black flex flex-col"
                        >
                            <img
                                src={noticia.imagem}
                                alt={noticia.titulo}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-base font-semibold mb-2 text-yellow-300">
                                    {noticia.titulo}
                                </h3>
                                <p className="text-sm text-gray-300 flex-grow">
                                    {noticia.descricao}
                                </p>
                                <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg self-start hover:bg-yellow-500">
                                    Ler mais
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Noticias;
