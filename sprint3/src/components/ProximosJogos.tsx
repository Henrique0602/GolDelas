import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFixtures, FixtureResponse } from "@/services/apiFootball";
import apiFootballConfig from "@/config/apiFootballConfig";

type TeamInfo = {
  id: number;
  name: string;
  logo: string;
  score: number | null;
};

type UpcomingMatch = {
  id: number;
  competition: string;
  dateLabel: string;
  home: TeamInfo;
  away: TeamInfo;
};

const {
  minFreeSeason: MIN_FREE_SEASON,
  maxFreeSeason: MAX_FREE_SEASON,
  leagueId: DEFAULT_LEAGUE_ID,
  season: DEFAULT_SEASON,
  timezone: DEFAULT_TIMEZONE,
  fallbackLeagueId: FALLBACK_LEAGUE_ID,
  fallbackSeason: FALLBACK_SEASON,
  defaultFrom: DEFAULT_FROM,
  defaultTo: DEFAULT_TO,
  fallbackFrom: FALLBACK_FROM,
  fallbackTo: FALLBACK_TO,
} = apiFootballConfig;
const UPCOMING_LIMIT = 2;

const normalizeSeason = (seasonValue: string) => {
  if (!seasonValue) return "";
  const parsed = Number(seasonValue);
  if (!Number.isFinite(parsed)) return FALLBACK_SEASON;
  if (parsed < MIN_FREE_SEASON) return String(MIN_FREE_SEASON);
  if (parsed > MAX_FREE_SEASON) return FALLBACK_SEASON;
  return String(parsed);
};

const formatDateLabel = (isoDate: string) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return "Data indefinida";
  }

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const mapFixtureToUpcomingMatch = (fixture: FixtureResponse): UpcomingMatch => ({
  id: fixture.fixture.id,
  competition: [fixture.league.country, fixture.league.name, fixture.league.round]
    .filter(Boolean)
    .join(" | "),
  dateLabel: formatDateLabel(fixture.fixture.date),
  home: {
    id: fixture.teams.home.id,
    name: fixture.teams.home.name,
    logo: fixture.teams.home.logo ?? "/Logo.png",
    score: fixture.goals.home ?? fixture.score.fulltime.home ?? null,
  },
  away: {
    id: fixture.teams.away.id,
    name: fixture.teams.away.name,
    logo: fixture.teams.away.logo ?? "/Logo.png",
    score: fixture.goals.away ?? fixture.score.fulltime.away ?? null,
  },
});

const ProximosJogos = () => {
  const [matches, setMatches] = useState<UpcomingMatch[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadUpcomingMatches = async () => {
      setLoading(true);
      setError(null);

      let lastErrorMessage: string | null = null;

      try {
        const normalizedSeason = normalizeSeason(DEFAULT_SEASON);
        const requests: Array<Record<string, string | number>> = [];

        const from = DEFAULT_FROM || FALLBACK_FROM;
        const to = DEFAULT_TO || FALLBACK_TO;

        if (DEFAULT_LEAGUE_ID) {
          requests.push({
            league: DEFAULT_LEAGUE_ID,
            ...(normalizedSeason ? { season: normalizedSeason } : {}),
            from,
            to,
            timezone: DEFAULT_TIMEZONE,
          });
        }

        requests.push({
          league: FALLBACK_LEAGUE_ID,
          season: FALLBACK_SEASON,
          from: FALLBACK_FROM,
          to: FALLBACK_TO,
          timezone: DEFAULT_TIMEZONE,
        });

        const aggregated: FixtureResponse[] = [];
        const seenIds = new Set<number>();

        for (const params of requests) {
          try {
            const fixtures = await fetchFixtures(params);
            for (const fixture of fixtures) {
              if (!seenIds.has(fixture.fixture.id)) {
                aggregated.push(fixture);
                seenIds.add(fixture.fixture.id);
              }
            }
          } catch (err) {
            if (err instanceof Error) {
              lastErrorMessage = err.message;
            } else {
              lastErrorMessage = "Erro desconhecido ao buscar dados da API-Football.";
            }
          }
        }

        if (!isMounted) return;

        const allowedStatuses = new Set(["NS", "TBD", "PST"]);
        let mapped = aggregated
          .filter((fixture) => allowedStatuses.has(fixture.fixture.status.short))
          .slice(0, UPCOMING_LIMIT)
          .map(mapFixtureToUpcomingMatch);

        if (mapped.length === 0) {
          const finishedStatuses = new Set(["FT", "AET", "PEN"]);
          mapped = aggregated
            .filter((fixture) => finishedStatuses.has(fixture.fixture.status.short))
            .slice(0, UPCOMING_LIMIT)
            .map(mapFixtureToUpcomingMatch);
        }

        setMatches(mapped);

        if (mapped.length === 0 && lastErrorMessage) {
          setError(lastErrorMessage);
        }
      } catch (err) {
        if (!isMounted) return;

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido ao buscar proximos jogos.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadUpcomingMatches();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="p-4">
      <h2 className="text-yellow-400 text-lg font-bold mb-6">PROXIMOS JOGOS</h2>

      {loading && <p className="text-gray-400 text-sm">Carregando proximos jogos...</p>}

      {error && (
        <p className="text-red-400 text-sm">
          Nao foi possivel carregar os proximos jogos. {error}
        </p>
      )}

      {!loading && !error && matches.length === 0 && (
        <p className="text-gray-400 text-sm">
          Nenhum jogo futuro encontrado para os filtros configurados.
        </p>
      )}

      <div className="flex flex-wrap justify-around gap-6 text-center items-stretch">
        {matches.map((match) => (
          <div
            key={match.id}
            className="rounded-lg p-6 bg-black shadow-lg flex flex-col items-center border border-yellow-700/40"
          >
            <p className="text-yellow-400 text-sm mb-2 font-bold">{match.competition}</p>
            <p className="text-gray-400 text-xs mb-4">{match.dateLabel}</p>

            {[match.home, match.away].map((team, index) => (
              <div
                key={team.id}
                className={`flex justify-between items-center w-full ${index === 1 ? "mt-4" : ""}`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                  />
                  <p className="text-white font-medium text-lg text-left">{team.name}</p>
                </div>
                <p className="text-white font-bold text-2xl ml-10">{team.score ?? "-"}</p>
              </div>
            ))}

            <Link to={`/Estatisticas/${match.id}`}>
              <button
                type="button"
                className="text-yellow-400 text-sm mt-4 underline flex items-center"
              >
                Ver estatisticas
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProximosJogos;
