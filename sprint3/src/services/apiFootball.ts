import apiFootballConfig from "@/config/apiFootballConfig";

const API_BASE_URL = apiFootballConfig.apiBaseUrl;
const API_KEY = apiFootballConfig.apiKey;
const RAPID_HOST = apiFootballConfig.rapidHost;

export type FixtureResponse = {
  fixture: {
    id: number;
    date: string;
    status: {
      short: string;
      elapsed: number | null;
    };
    venue?: {
      name?: string | null;
      city?: string | null;
    };
  };
  league: {
    id: number;
    name: string;
    country?: string | null;
    round?: string | null;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string | null;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string | null;
      winner: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
};

export type FixtureStatisticResponse = {
  team: {
    id: number;
    name: string;
    logo: string | null;
  };
  statistics: Array<{
    type: string;
    value: number | string | null;
  }>;
};

export type FixtureEventResponse = {
  time: {
    elapsed: number | null;
    extra: number | null;
  };
  team: {
    id: number;
    name: string;
    logo: string | null;
  };
  player: {
    id: number | null;
    name: string | null;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  type: string;
  detail: string;
  comments: string | null;
};

type ApiFootballEnvelope<T> = {
  response: T;
  errors?: Record<string, unknown>;
};

class MissingApiKeyError extends Error {
  constructor() {
    super("VITE_API_FOOTBALL_KEY is not defined");
    this.name = "MissingApiKeyError";
  }
}

async function apiFootballFetch<T>(
  endpoint: string,
  params: Record<string, string | number | undefined | null> = {},
) {
  if (!API_KEY) {
    throw new MissingApiKeyError();
  }

  const url = new URL(endpoint, API_BASE_URL.endsWith("/") ? API_BASE_URL : `${API_BASE_URL}/`);

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  if (searchParams.toString()) {
    url.search = searchParams.toString();
  }

  const headers: Record<string, string> = {
    Accept: "application/json",
    "x-apisports-key": API_KEY,
  };

  if (RAPID_HOST) {
    headers["x-rapidapi-host"] = RAPID_HOST;
    headers["x-rapidapi-key"] = API_KEY;
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `API-Football request failed: ${response.status} ${response.statusText}${
        errorBody ? ` - ${errorBody}` : ""
      }`,
    );
  }

  const payload = (await response.json()) as ApiFootballEnvelope<T>;

  if (payload.errors && Object.keys(payload.errors).length > 0) {
    const formatted = Object.entries(payload.errors)
      .map(([key, value]) => `${key}: ${value}`)
      .join(" | ");
    throw new Error(formatted || "API-Football returned an error.");
  }

  return payload.response;
}

export async function fetchFixtures(params: Record<string, string | number>) {
  return apiFootballFetch<FixtureResponse[]>("/fixtures", params);
}

export async function fetchFixtureById(id: string | number) {
  const fixtures = await fetchFixtures({ id });
  return fixtures[0] ?? null;
}

export async function fetchFixtureStatistics(fixtureId: string | number) {
  return apiFootballFetch<FixtureStatisticResponse[]>("/fixtures/statistics", {
    fixture: fixtureId,
  });
}

export async function fetchFixtureEvents(fixtureId: string | number) {
  return apiFootballFetch<FixtureEventResponse[]>("/fixtures/events", {
    fixture: fixtureId,
  });
}
