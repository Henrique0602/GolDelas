import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  fetchFixtureById,
  fetchFixtureEvents,
  fetchFixtureStatistics,
  FixtureEventResponse,
  FixtureResponse,
} from "@/services/apiFootball";

type StatisticRow = {
  type: string;
  home: string | number | null;
  away: string | number | null;
};

const formatStatValue = (value: string | number | null) => {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  return value;
};

const Estatisticas = () => {
  const { id } = useParams<{ id: string }>();
  const [fixture, setFixture] = useState<FixtureResponse | null>(null);
  const [statistics, setStatistics] = useState<StatisticRow[]>([]);
  const [goalEvents, setGoalEvents] = useState<FixtureEventResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Jogo nao encontrado.");
      setLoading(false);
      return;
    }

    let isMounted = true;

    const loadFixtureData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [fixtureData, statsData, eventsData] = await Promise.all([
          fetchFixtureById(id),
          fetchFixtureStatistics(id),
          fetchFixtureEvents(id),
        ]);

        if (!isMounted) {
          return;
        }

        if (!fixtureData) {
          setError("Nao encontramos informacoes desse jogo.");
          setLoading(false);
          return;
        }

        setFixture(fixtureData);

        const statsOrder: string[] = [];
        const statsMap = new Map<string, { home: string | number | null; away: string | number | null }>();

        for (const entry of statsData) {
          const side = entry.team.id === fixtureData.teams.home.id ? "home" : "away";

          for (const stat of entry.statistics) {
            if (!stat.type) continue;

            if (!statsMap.has(stat.type)) {
              statsMap.set(stat.type, { home: null, away: null });
              statsOrder.push(stat.type);
            }

            const current = statsMap.get(stat.type);
            if (current) {
              current[side] = stat.value;
            }
          }
        }

        const statsRows = statsOrder.map((key) => {
          const values = statsMap.get(key);
          return {
            type: key,
            home: values ? formatStatValue(values.home) : "—",
            away: values ? formatStatValue(values.away) : "—",
          };
        });

        setStatistics(statsRows);

        const goals = eventsData.filter((event) => event.type === "Goal");
        setGoalEvents(goals);
      } catch (err) {
        if (!isMounted) {
          return;
        }

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro ao buscar dados da partida.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadFixtureData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const homeScore = useMemo(() => {
    if (!fixture) return "—";
    return fixture.goals.home ?? fixture.score.fulltime.home ?? "—";
  }, [fixture]);

  const awayScore = useMemo(() => {
    if (!fixture) return "—";
    return fixture.goals.away ?? fixture.score.fulltime.away ?? "—";
  }, [fixture]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="p-6">
        {loading && (
          <p className="text-center text-gray-400 mt-10">
            Carregando estatisticas da partida...
          </p>
        )}

        {error && !loading && (
          <p className="text-center text-red-400 mt-10">{error}</p>
        )}

        {!loading && !error && fixture && (
          <>
            <div className="text-center mt-10">
              <div className="text-gray-400 text-sm mb-4">
                <p>{fixture.league.name}</p>
                {fixture.league.round && <p>{fixture.league.round}</p>}
                <p>{new Date(fixture.fixture.date).toLocaleString("pt-BR")}</p>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <img
                  src={fixture.teams.home.logo ?? "/Logo.png"}
                  alt={fixture.teams.home.name}
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                />
                <p className="text-4xl font-bold">
                  {homeScore} x {awayScore}
                </p>
                <img
                  src={fixture.teams.away.logo ?? "/Logo.png"}
                  alt={fixture.teams.away.name}
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-400 mt-2">
                {goalEvents.length > 0
                  ? goalEvents
                      .map((event) => {
                        const minute = event.time.elapsed ?? "--";
                        const extra = event.time.extra ? `+${event.time.extra}` : "";
                        const player = event.player.name ?? "Jogadora";
                        const team = event.team.name;
                        return `${player} ${minute}${extra}' (${team})`;
                      })
                      .join(" | ")
                  : "Nenhum detalhamento de gols encontrado."}
              </p>
            </div>

            <h2 className="text-yellow-400 text-lg font-bold mb-4 text-center mt-10">
              Estatisticas dos Times
            </h2>

            <div className="max-w-3xl mx-auto border border-yellow-700/40 rounded-lg divide-y divide-gray-800">
              {statistics.length === 0 && (
                <p className="text-gray-400 text-sm text-center py-4">
                  Estatisticas detalhadas indisponiveis para esta partida.
                </p>
              )}

              {statistics.map((stat) => (
                <div
                  key={stat.type}
                  className="flex justify-between items-center px-4 py-3"
                >
                  <p className="text-yellow-400 font-bold text-lg">{stat.home}</p>
                  <p className="text-white text-sm text-center uppercase tracking-wide">
                    {stat.type}
                  </p>
                  <p className="text-red-400 font-bold text-lg">{stat.away}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Estatisticas;
