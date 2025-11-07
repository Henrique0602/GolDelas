export type DominantFoot = "Direito" | "Esquerdo" | "Ambos" | "Indefinido";

export type JogadoraRecord = {
  id: string;
  nome: string;
  dataNascimento: string;
  idade: number | null;
  documento: string;
  posicao: string;
  peDominante: DominantFoot;
  altura: number | null;
  peso: number | null;
  telefone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type JogadoraPayload = Omit<JogadoraRecord, "id" | "createdAt" | "updatedAt">;

const STORAGE_KEY = "golDelas:jogadoras";

const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

const safeWindow = () => (typeof window === "undefined" ? undefined : window);

const loadJogadoras = (): JogadoraRecord[] => {
  const win = safeWindow();
  if (!win) {
    return [];
  }

  const raw = win.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as JogadoraRecord[];
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
};

const persistJogadoras = (records: JogadoraRecord[]) => {
  const win = safeWindow();
  if (!win) {
    return;
  }

  win.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
};

export async function listJogadoras(): Promise<JogadoraRecord[]> {
  await delay();
  const records = loadJogadoras();
  return records.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createJogadora(payload: JogadoraPayload): Promise<JogadoraRecord> {
  await delay();
  const records = loadJogadoras();
  const now = new Date().toISOString();

  const record: JogadoraRecord = {
    ...payload,
    id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : now,
    createdAt: now,
    updatedAt: now,
  };

  records.push(record);
  persistJogadoras(records);
  return record;
}

export async function updateJogadora(
  id: string,
  payload: Partial<JogadoraPayload>,
): Promise<JogadoraRecord> {
  await delay();
  const records = loadJogadoras();
  const index = records.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error("Jogadora nao encontrada.");
  }

  const updated: JogadoraRecord = {
    ...records[index],
    ...payload,
    updatedAt: new Date().toISOString(),
  };

  records[index] = updated;
  persistJogadoras(records);
  return updated;
}

export async function deleteJogadora(id: string): Promise<void> {
  await delay();
  const records = loadJogadoras();
  const filtered = records.filter((item) => item.id !== id);

  if (filtered.length === records.length) {
    throw new Error("Jogadora nao encontrada.");
  }

  persistJogadoras(filtered);
}
