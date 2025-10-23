import { Link } from "react-router-dom";

type TeamScore = {
  name: string;
  logo: string;
  score: number;
};

type PreviousMatch = {
  id: string;
  competition: string;
  home: TeamScore;
  away: TeamScore;
};

const previousMatches: PreviousMatch[] = [
  {
    id: "1",
    competition: "Copa do Brasil",
    home: { name: "São Paulo", logo: "/SP.png", score: 5 },
    away: { name: "Palmeiras", logo: "/Palmeiras.png", score: 0 }
  },
  {
    id: "2",
    competition: "Campeonato Brasileiro",
    home: { name: "Corinthians", logo: "/Corinthians.png", score: 2 },
    away: { name: "Vitória", logo: "/Vitoria.png", score: 1 }
  },
  {
    id: "3",
    competition: "Campeonato Carioca",
    home: { name: "Flamengo", logo: "/Flamengo.png", score: 3 },
    away: { name: "Botafogo", logo: "/Bota.png", score: 2 }
  },
  {
    id: "4",
    competition: "Campeonato Brasileiro",
    home: { name: "Bahia", logo: "/Bahia.png", score: 2 },
    away: { name: "Fortaleza", logo: "/Fortaleza.png", score: 2 }
  }
];

const JogosAnteriores = () => {
  return (
    <section className="p-4">
      <h2 className="text-yellow-400 text-lg font-bold mb-6">JOGOS ANTERIORES</h2>

      <div className="flex flex-wrap justify-around gap-6 text-center items-stretch">
        {previousMatches.map((match) => (
          <div
            key={match.id}
            className="rounded-lg p-6 bg-black shadow-lg flex flex-col items-center"
          >
            <p className="text-yellow-400 text-sm mb-2 font-bold">{match.competition}</p>

            {[match.home, match.away].map((team, index) => (
              <div
                key={team.name}
                className={`flex justify-between items-center w-full ${
                  index === 1 ? "mt-4" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="h-12 w-12 object-contain"
                  />
                  <p className="text-white font-medium text-lg">{team.name}</p>
                </div>
                <p className="text-white font-bold text-2xl ml-10">{team.score}</p>
              </div>
            ))}

            <Link to={`/Estatisticas/${match.id}`}>
              <button
                type="button"
                className="text-yellow-400 text-sm mt-4 underline flex items-center"
              >
                Ver estatísticas
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JogosAnteriores;

