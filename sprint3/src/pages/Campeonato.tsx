import Footer from "@/components/Footer";
import Header from "@/components/Header";

type CampeonatoInfo = {
  id: number;
  nome: string;
  org: string;
  local: string;
  logo: string;
};

const campeonatos: CampeonatoInfo[] = [
  {
    id: 1,
    nome: "Campeonato Brasileiro de Futebol Feminino",
    org: "CBF",
    local: "Brasil",
    logo: "/Brasileiro.png"
  },
  {
    id: 2,
    nome: "Copa do Brasil de Futebol Feminino",
    org: "CBF",
    local: "Brasil",
    logo: "/CopaBrasil.png"
  },
  {
    id: 3,
    nome: "Campeonato Carioca de Futebol Feminino",
    org: "FERJ",
    local: "Brasil | Rio de Janeiro",
    logo: "/Carioca.png"
  },
  {
    id: 4,
    nome: "Campeonato Paulista de Futebol Feminino",
    org: "FPF",
    local: "Brasil | São Paulo",
    logo: "/Paulistao.png"
  }
];

const Campeonato = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-6">
        <h1 className="text-yellow-400 text-3xl font-bold text-center mb-8">
          Campeonatos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {campeonatos.map((campeonato) => (
            <div
              key={campeonato.id}
              className="bg-zinc-900 border border-yellow-600 rounded-xl shadow-lg hover:scale-105 transform transition p-6 flex flex-col items-center text-center"
            >
              <img
                src={campeonato.logo}
                alt={campeonato.nome}
                className="h-40 w-40 object-contain mb-4"
              />
              <h2 className="text-lg font-bold text-yellow-400">{campeonato.nome}</h2>
              <p className="text-sm text-gray-400">{campeonato.org}</p>
              <p className="text-sm text-gray-500">{campeonato.local}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Campeonato;

