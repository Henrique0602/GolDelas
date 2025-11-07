import { FormEvent, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  createJogadora,
  deleteJogadora,
  DominantFoot,
  JogadoraPayload,
  JogadoraRecord,
  listJogadoras,
  updateJogadora,
} from "@/services/jogadorasStorage";

type FormState = {
  nome: string;
  dataNascimento: string;
  idade: string;
  documento: string;
  posicao: string;
  peDominante: DominantFoot | "";
  altura: string;
  peso: string;
  telefone: string;
  email: string;
};

const initialFormState: FormState = {
  nome: "",
  dataNascimento: "",
  idade: "",
  documento: "",
  posicao: "",
  peDominante: "",
  altura: "",
  peso: "",
  telefone: "",
  email: "",
};

const formatDateTime = (isoDate: string) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Jogadora = () => {
  const [jogadoras, setJogadoras] = useState<JogadoraRecord[]>([]);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchJogadoras = async () => {
      setIsLoadingList(true);
      try {
        const records = await listJogadoras();
        setJogadoras(records);
      } catch (error) {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Nao foi possivel carregar as jogadoras cadastradas.",
        );
      } finally {
        setIsLoadingList(false);
      }
    };

    void fetchJogadoras();
  }, []);

  const handleChange = (
    field: keyof FormState,
    value: string,
  ) => {
    setFormState((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormState(initialFormState);
    setEditingId(null);
  };

  const toPayload = (): JogadoraPayload => {
    const normalizeText = (text: string) => text.trim();
    const parseNumber = (value: string) => {
      if (!value.trim()) return null;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    };

    return {
      nome: normalizeText(formState.nome),
      dataNascimento: formState.dataNascimento,
      idade: parseNumber(formState.idade),
      documento: normalizeText(formState.documento),
      posicao: normalizeText(formState.posicao),
      peDominante:
        formState.peDominante && formState.peDominante !== ""
          ? formState.peDominante
          : "Indefinido",
      altura: parseNumber(formState.altura),
      peso: parseNumber(formState.peso),
      telefone: normalizeText(formState.telefone),
      email: normalizeText(formState.email),
    };
  };

  const validateForm = () => {
    if (!formState.nome.trim()) {
      return "Informe o nome da jogadora.";
    }

    if (!formState.posicao.trim()) {
      return "Informe a posicao em que a jogadora atua.";
    }

    if (!formState.telefone.trim()) {
      return "Informe um telefone de contato.";
    }

    if (!formState.email.trim()) {
      return "Informe um e-mail de contato.";
    }

    return null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActionMessage(null);
    const validationError = validateForm();

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setErrorMessage(null);
    setIsProcessing(true);

    try {
      const payload = toPayload();

      if (editingId) {
        const updated = await updateJogadora(editingId, payload);
        setJogadoras((previous) =>
          previous.map((item) => (item.id === editingId ? updated : item)),
        );
        setActionMessage("Jogadora atualizada com sucesso!");
      } else {
        const created = await createJogadora(payload);
        setJogadoras((previous) => [created, ...previous]);
        setActionMessage("Jogadora cadastrada com sucesso!");
      }

      resetForm();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Nao foi possivel salvar as informacoes.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleEdit = (record: JogadoraRecord) => {
    setActionMessage(null);
    setErrorMessage(null);
    setEditingId(record.id);
    setFormState({
      nome: record.nome,
      dataNascimento: record.dataNascimento,
      idade: record.idade ? String(record.idade) : "",
      documento: record.documento,
      posicao: record.posicao,
      peDominante: record.peDominante === "Indefinido" ? "" : record.peDominante,
      altura: record.altura ? String(record.altura) : "",
      peso: record.peso ? String(record.peso) : "",
      telefone: record.telefone,
      email: record.email,
    });
  };

  const handleDelete = async (id: string) => {
    const confirmation = window.confirm("Deseja realmente remover este cadastro?");
    if (!confirmation) {
      return;
    }

    setActionMessage(null);
    setErrorMessage(null);
    setIsProcessing(true);

    try {
      await deleteJogadora(id);
      setJogadoras((previous) => previous.filter((item) => item.id !== id));

      if (editingId === id) {
        resetForm();
      }

      setActionMessage("Jogadora removida com sucesso!");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Nao foi possivel remover o cadastro.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancelEdit = () => {
    resetForm();
    setActionMessage("Edicao cancelada.");
  };

  const isEditing = Boolean(editingId);

  return (
    <section className="min-h-screen bg-black text-white">
      <Header />

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        <div>
          <h2 className="text-yellow-400 text-3xl font-bold">Gerenciar Jogadoras</h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Cadastre, atualize ou remova jogadoras interessadas em participar do projeto. Os dados
            ficam salvos no dispositivo, simulando uma integraçao com API.
          </p>
        </div>

        {actionMessage && (
          <div className="border border-green-500 bg-green-900/40 text-green-300 px-4 py-3 rounded">
            {actionMessage}
          </div>
        )}

        {errorMessage && (
          <div className="border border-red-500 bg-red-900/40 text-red-300 px-4 py-3 rounded">
            {errorMessage}
          </div>
        )}

        <section className="border border-yellow-700/40 rounded-lg p-6 bg-black shadow-lg">
          <h3 className="text-yellow-400 text-xl font-bold mb-4">
            {isEditing ? "Editar Jogadora" : "Nova Jogadora"}
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col text-sm">
                Nome completo
                <input
                  type="text"
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.nome}
                  onChange={(event) => handleChange("nome", event.target.value)}
                  disabled={isProcessing}
                  required
                />
              </label>

              <label className="flex flex-col text-sm">
                Documento (RG ou CPF)
                <input
                  type="text"
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.documento}
                  onChange={(event) => handleChange("documento", event.target.value)}
                  disabled={isProcessing}
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="flex flex-col text-sm">
                Data de nascimento
                <input
                  type="date"
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.dataNascimento}
                  onChange={(event) => handleChange("dataNascimento", event.target.value)}
                  disabled={isProcessing}
                />
              </label>

              <label className="flex flex-col text-sm">
                Idade
                <input
                  type="number"
                  min={0}
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.idade}
                  onChange={(event) => handleChange("idade", event.target.value)}
                  disabled={isProcessing}
                />
              </label>

              <label className="flex flex-col text-sm">
                Posição principal
                <input
                  type="text"
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.posicao}
                  onChange={(event) => handleChange("posicao", event.target.value)}
                  disabled={isProcessing}
                  required
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="flex flex-col text-sm">
                Pé dominante
                <select
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.peDominante}
                  onChange={(event) => handleChange("peDominante", event.target.value)}
                  disabled={isProcessing}
                >
                  <option value="">Selecione</option>
                  <option value="Direito">Direito</option>
                  <option value="Esquerdo">Esquerdo</option>
                  <option value="Ambos">Ambos</option>
                </select>
              </label>

              <label className="flex flex-col text-sm">
                Altura (cm)
                <input
                  type="number"
                  min={0}
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.altura}
                  onChange={(event) => handleChange("altura", event.target.value)}
                  disabled={isProcessing}
                />
              </label>

              <label className="flex flex-col text-sm">
                Peso (kg)
                <input
                  type="number"
                  min={0}
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.peso}
                  onChange={(event) => handleChange("peso", event.target.value)}
                  disabled={isProcessing}
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col text-sm">
                Telefone
                <input
                  type="tel"
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.telefone}
                  onChange={(event) => handleChange("telefone", event.target.value)}
                  disabled={isProcessing}
                  required
                />
              </label>

              <label className="flex flex-col text-sm">
                E-mail
                <input
                  type="email"
                  className="mt-1 p-3 rounded bg-gray-700 text-white"
                  value={formState.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  disabled={isProcessing}
                  required
                />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition disabled:opacity-60"
                disabled={isProcessing}
              >
                {isProcessing
                  ? "Salvando..."
                  : isEditing
                    ? "Salvar alterações"
                    : "Cadastrar jogadora"}
              </button>

              {isEditing && (
                <button
                  type="button"
                  className="text-yellow-400 underline hover:text-yellow-300"
                  onClick={handleCancelEdit}
                  disabled={isProcessing}
                >
                  Cancelar edição
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="border border-yellow-700/40 rounded-lg p-6 bg-black shadow-lg">
          <h3 className="text-yellow-400 text-xl font-bold mb-4">Jogadoras cadastradas</h3>

          {isLoadingList ? (
            <p className="text-gray-400 text-sm">Carregando registros...</p>
          ) : jogadoras.length === 0 ? (
            <p className="text-gray-400 text-sm">
              Nenhuma jogadora cadastrada ainda. Utilize o formulário acima para criar um novo
              cadastro.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-yellow-700/40">
                <thead>
                  <tr className="text-left text-sm uppercase tracking-wide text-gray-400">
                    <th className="px-4 py-2">Nome</th>
                    <th className="px-4 py-2">Posição</th>
                    <th className="px-4 py-2">Contato</th>
                    <th className="px-4 py-2">Atualizado em</th>
                    <th className="px-4 py-2 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-700/20">
                  {jogadoras.map((record) => (
                    <tr key={record.id} className="text-sm">
                      <td className="px-4 py-3">
                        <div className="font-semibold text-white">{record.nome}</div>
                        <div className="text-gray-400 text-xs">
                          {record.idade ? `${record.idade} anos • ` : ""}
                          {record.peDominante !== "Indefinido"
                            ? `Pé ${record.peDominante.toLowerCase()}`
                            : "Pé não informado"}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        <div>{record.posicao || "—"}</div>
                        <div className="text-gray-500 text-xs">
                          {record.altura ? `${record.altura} cm` : "Altura —"} •{" "}
                          {record.peso ? `${record.peso} kg` : "Peso —"}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        <div>{record.telefone || "—"}</div>
                        <div className="text-gray-500 text-xs">{record.email || "—"}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-400">{formatDateTime(record.updatedAt)}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-3">
                          <button
                            type="button"
                            className="text-yellow-400 underline hover:text-yellow-300 disabled:opacity-50"
                            onClick={() => handleEdit(record)}
                            disabled={isProcessing}
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="text-red-400 underline hover:text-red-300 disabled:opacity-50"
                            onClick={() => handleDelete(record.id)}
                            disabled={isProcessing}
                          >
                            Remover
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Jogadora;
