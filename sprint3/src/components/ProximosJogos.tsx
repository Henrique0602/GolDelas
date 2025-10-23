type ClubInfo = {
  name: string;
  abbreviation: string;
  logo: string;
};

type UpcomingMatch = {
  id: number;
  date: string;
  time: string;
  competition: string[];
  home: ClubInfo;
  away: ClubInfo;
};

const upcomingMatches: UpcomingMatch[] = [
  {
    id: 1,
    date: "23/10/2025",
    time: "21:30",
    competition: ["Copa do Brasil"],
    home: { name: "São Paulo", abbreviation: "SAO", logo: "/SP.png" },
    away: { name: "Palmeiras", abbreviation: "PAL", logo: "/Palmeiras.png" }
  },
  {
    id: 2,
    date: "01/08/2025",
    time: "16:00",
    competition: ["Campeonato", "Brasileiro"],
    home: { name: "Corinthians", abbreviation: "COR", logo: "/Corinthians.png" },
    away: { name: "Vitória", abbreviation: "VIT", logo: "/Vitoria.png" }
  },
  {
    id: 3,
    date: "19/01/2025",
    time: "18:00",
    competition: ["Campeonato", "Carioca"],
    home: { name: "Flamengo", abbreviation: "FLA", logo: "/Flamengo.png" },
    away: { name: "Botafogo", abbreviation: "BOT", logo: "/Bota.png" }
  },
  {
    id: 4,
    date: "31/02/2025",
    time: "19:45",
    competition: ["Campeonato", "Brasileiro"],
    home: { name: "Bahia", abbreviation: "BAH", logo: "/Bahia.png" },
    away: { name: "Fortaleza", abbreviation: "FOR", logo: "/Fortaleza.png" }
  }
];

const ProximosJogos = () => {
  return (
    <section className="p-4">
      <h2 className="text-yellow-400 text-lg font-bold mb-6">PRÓXIMOS JOGOS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-around gap-6 text-center items-stretch">
        {upcomingMatches.map((match) => (
          <div
            key={match.id}
            className="bg-black rounded-lg p-6 shadow-lg border-b border-yellow-700 lg:w-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 items-center gap-4">
              <div className="text-yellow-400 text-sm text-center sm:text-left">
                <div className="font-semibold">{match.date}</div>
                <div className="font-semibold">{match.time}</div>
              </div>

              <div className="flex items-center justify-center space-x-4 col-span-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={match.home.logo}
                    alt={match.home.name}
                    className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  />
                  <span className="text-white text-base md:text-lg font-bold">
                    {match.home.abbreviation}
                  </span>
                </div>

                <span className="text-white text-lg md:text-xl font-bold mx-2">X</span>

                <div className="flex items-center space-x-2">
                  <span className="text-white text-base md:text-lg font-bold">
                    {match.away.abbreviation}
                  </span>
                  <img
                    src={match.away.logo}
                    alt={match.away.name}
                    className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  />
                </div>
              </div>

              <div className="flex justify-center sm:justify-end">
                <div className="text-yellow-400 text-sm font-semibold text-center sm:text-right">
                  {match.competition.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProximosJogos;

