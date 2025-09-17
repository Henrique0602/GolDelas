"use client";
import { useParams } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const FIXTURE_PRESETS = {
    "1": {
        fixtureId: "871846",
        description: "Paris Saint-Germain x Clermont Foot - Ligue 1 2022/23",
    },
    "2": {
        fixtureId: "871464",
        description: "1.FC Koln x Bayern Munich - Bundesliga 2022/23",
    },
    "3": {
        fixtureId: "878317",
        description: "Celta Vigo x Barcelona - La Liga 2022/23",
    },
    "4": {
        fixtureId: "882157",
        description: "AC Milan x Verona - Serie A 2022/23",
    },
};

const API_HEADERS = {
    "x-apisports-key": "21ec046021d8390f3aada86d4a25005f",
    "x-rapidapi-host": "v3.football.api-sports.io",
    Accept: "application/json",
};

const api = axios.create({
    baseURL: "https://v3.football.api-sports.io",
    headers: API_HEADERS,
});

const getFirstApiError = errors => {
    if (!errors) {
        return "";
    }

    const messages = Object.values(errors).filter(Boolean);
    return messages.length > 0 ? String(messages[0]) : "";
};

const Estatisticas = () => {
    const { id } = useParams();
    const preset = FIXTURE_PRESETS[id];
    const fixtureId = Number(preset?.fixtureId ?? id);

    const [fixture, setFixture] = useState(null);
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const widgetRef = useRef(null);

    useEffect(() => {
        if (!fixtureId || Number.isNaN(fixtureId)) {
            setError("Jogo nao encontrado.");
            setFixture(null);
            setStats([]);
            setLoading(false);
            return;
        }

        let cancelled = false;

        const fetchData = async () => {
            setLoading(true);
            setError("");

            try {
                const fixtureRes = await api.get("/fixtures", {
                    params: { id: fixtureId },
                });
                if (cancelled) {
                    return;
                }

                const fixtureErrors = getFirstApiError(fixtureRes.data?.errors);
                const fixtureData = fixtureRes.data?.response?.[0] ?? null;

                if (fixtureErrors) {
                    setError(fixtureErrors);
                }

                if (!fixtureData) {
                    setFixture(null);
                    setStats([]);
                    if (!fixtureErrors) {
                        setError("Jogo nao encontrado para esse codigo.");
                    }
                    setLoading(false);
                    return;
                }

                const statsRes = await api.get("/fixtures/statistics", {
                    params: { fixture: fixtureId },
                });
                if (cancelled) {
                    return;
                }

                const statsErrors = getFirstApiError(statsRes.data?.errors);
                const statsData = statsRes.data?.response ?? [];

                if (statsErrors) {
                    setError(statsErrors);
                }

                setFixture(fixtureData);
                setStats(statsData);

                if (!statsData?.length && !statsErrors) {
                    setError("Estatisticas nao disponiveis para esse jogo no plano gratuito.");
                }
            } catch (err) {
                if (!cancelled) {
                    const message =
                        err.response?.data?.errors && Object.keys(err.response.data.errors).length
                            ? getFirstApiError(err.response.data.errors)
                            : "Nao foi possivel carregar os dados desse jogo. O plano gratuito libera partidas das temporadas 2021 a 2023.";
                    setError(message);
                    setFixture(null);
                    setStats([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [fixtureId]);

    useEffect(() => {
        if (!widgetRef.current || !fixtureId || !fixture) {
            return;
        }

        widgetRef.current.innerHTML = "";

        const widgetDiv = document.createElement("div");
        widgetDiv.id = `wg-api-football-game-${fixtureId}`;
        widgetDiv.setAttribute("data-host", "v3.football.api-sports.io");
        widgetDiv.setAttribute("data-key", "21ec046021d8390f3aada86d4a25005f");
        widgetDiv.setAttribute("data-id", String(fixtureId));
        widgetDiv.setAttribute("data-theme", "dark");
        widgetDiv.setAttribute("data-refresh", "60");
        widgetDiv.setAttribute("data-show-errors", "false");
        widgetDiv.setAttribute("data-show-logos", "true");
        widgetRef.current.appendChild(widgetDiv);

        const scriptId = "wg-api-football-script";
        const existingScript = document.getElementById(scriptId);

        const appendScript = () => {
            const script = document.createElement("script");
            script.type = "module";
            script.src = "https://widgets.api-sports.io/2.0.3/widgets.js";
            script.id = scriptId;
            document.body.appendChild(script);
        };

        if (existingScript) {
            existingScript.remove();
            appendScript();
        } else {
            appendScript();
        }
    }, [fixtureId, fixture]);

    const presetInfo = FIXTURE_PRESETS[id];
    const activeFixture = fixture;
    const matchInfo = activeFixture?.fixture;
    const leagueInfo = activeFixture?.league;
    const home = activeFixture?.teams?.home;
    const away = activeFixture?.teams?.away;
    const score =
        activeFixture && activeFixture.goals
            ? `${activeFixture.goals.home} x ${activeFixture.goals.away}`
            : "";
    const goals =
        activeFixture?.events?.filter(event => event.type === "Goal") ?? [];

    const matchDate = matchInfo?.date
        ? new Date(matchInfo.date).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          })
        : "";

    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <main className="p-6">
                {presetInfo?.description && (
                    <p className="text-gray-400 text-center text-sm mb-2">
                        {presetInfo.description}
                    </p>
                )}

                {error && (
                    <p className="text-red-400 text-center text-sm mb-6">{error}</p>
                )}

                {loading && (
                    <p className="text-white text-center">Carregando...</p>
                )}

                {!loading && !activeFixture && (
                    <p className="text-white text-center">Jogo nao encontrado.</p>
                )}

                {!loading && activeFixture && (
                    <>
                        <div className="text-center mt-10">
                            {leagueInfo && (
                                <p className="text-gray-400 text-sm mb-2">
                                    {leagueInfo.name} - {matchDate}
                                </p>
                            )}
                            <div className="flex justify-center items-center space-x-4">
                                {home?.logo && (
                                    <img
                                        src={home.logo}
                                        alt={home?.name ?? "Time da casa"}
                                        className="h-12 w-12"
                                    />
                                )}
                                <p className="text-4xl font-bold">{score}</p>
                                {away?.logo && (
                                    <img
                                        src={away.logo}
                                        alt={away?.name ?? "Time visitante"}
                                        className="h-12 w-12"
                                    />
                                )}
                            </div>
                            <p className="text-gray-400 mt-2">
                                {goals.length > 0
                                    ? goals
                                          .map(
                                              gol =>
                                                  `${gol.player?.name ?? "Gol"} ${gol.time?.elapsed}'`
                                          )
                                          .join(" | ")
                                    : "Sem gols detalhados"}
                            </p>
                        </div>

                        <h2 className="text-yellow-400 text-lg font-bold mb-4 text-center mt-10">
                            Estatisticas dos Times
                        </h2>

                        <div className="gap-4 text-center">
                            {stats.length > 0 && stats[0]?.statistics ? (
                                stats[0].statistics.map((stat, idx) => (
                                    <div
                                        key={`${stat.type}-${idx}`}
                                        className="flex justify-between items-center border-b border-gray-700 py-2"
                                    >
                                        <p className="text-yellow-400 font-bold text-lg">
                                            {stat.value ?? "-"}
                                        </p>
                                        <p className="text-white text-sm">
                                            {stat.type?.replace(/_/g, " ") ?? "-"}
                                        </p>
                                        <p className="text-red-400 font-bold text-lg">
                                            {stats[1]?.statistics?.[idx]?.value ?? "-"}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p>Sem estatisticas disponiveis.</p>
                            )}
                        </div>
                    </>
                )}

                <div ref={widgetRef} className="my-10 flex justify-center" />
            </main>
            <Footer />
        </div>
    );
};

export default Estatisticas;
