type ApiFootballConfig = {
  apiBaseUrl: string;
  apiKey: string;
  rapidHost: string;
  leagueId: string;
  season: string;
  timezone: string;
  fallbackLeagueId: string;
  fallbackSeason: string;
  defaultFrom: string;
  defaultTo: string;
  fallbackFrom: string;
  fallbackTo: string;
  minFreeSeason: number;
  maxFreeSeason: number;
};

const fallbackConfig: ApiFootballConfig = {
  apiBaseUrl: "https://v3.football.api-sports.io",
  apiKey: "d9bc987e9b25883fe26a53222de3abdf",
  rapidHost: "",
  leagueId: "71",
  season: "2023",
  timezone: "America/Sao_Paulo",
  fallbackLeagueId: "39",
  fallbackSeason: "2023",
  defaultFrom: "2023-05-06",
  defaultTo: "2023-05-08",
  fallbackFrom: "2023-05-06",
  fallbackTo: "2023-05-08",
  minFreeSeason: 2021,
  maxFreeSeason: 2023,
};

const pickString = (value: string | undefined, fallback: string) => {
  if (!value || !value.trim()) {
    return fallback;
  }
  return value.trim();
};

const pickNumber = (value: string | undefined, fallback: number) => {
  if (!value || !value.trim()) {
    return fallback;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const apiFootballConfig: ApiFootballConfig = {
  apiBaseUrl: pickString(import.meta.env.VITE_API_FOOTBALL_BASE_URL, fallbackConfig.apiBaseUrl),
  apiKey: pickString(import.meta.env.VITE_API_FOOTBALL_KEY, fallbackConfig.apiKey),
  rapidHost: pickString(import.meta.env.VITE_API_FOOTBALL_HOST, fallbackConfig.rapidHost),
  leagueId: pickString(import.meta.env.VITE_API_FOOTBALL_LEAGUE_ID, fallbackConfig.leagueId),
  season: pickString(import.meta.env.VITE_API_FOOTBALL_SEASON, fallbackConfig.season),
  timezone: pickString(import.meta.env.VITE_API_FOOTBALL_TIMEZONE, fallbackConfig.timezone),
  fallbackLeagueId: pickString(
    import.meta.env.VITE_API_FOOTBALL_FALLBACK_LEAGUE_ID,
    fallbackConfig.fallbackLeagueId,
  ),
  fallbackSeason: pickString(
    import.meta.env.VITE_API_FOOTBALL_FALLBACK_SEASON,
    fallbackConfig.fallbackSeason,
  ),
  defaultFrom: pickString(import.meta.env.VITE_API_FOOTBALL_DEFAULT_FROM, fallbackConfig.defaultFrom),
  defaultTo: pickString(import.meta.env.VITE_API_FOOTBALL_DEFAULT_TO, fallbackConfig.defaultTo),
  fallbackFrom: pickString(
    import.meta.env.VITE_API_FOOTBALL_FALLBACK_FROM,
    fallbackConfig.fallbackFrom,
  ),
  fallbackTo: pickString(import.meta.env.VITE_API_FOOTBALL_FALLBACK_TO, fallbackConfig.fallbackTo),
  minFreeSeason: pickNumber(
    import.meta.env.VITE_API_FOOTBALL_FREE_MIN_SEASON,
    fallbackConfig.minFreeSeason,
  ),
  maxFreeSeason: pickNumber(
    import.meta.env.VITE_API_FOOTBALL_FREE_MAX_SEASON,
    fallbackConfig.maxFreeSeason,
  ),
};

export default apiFootballConfig;
