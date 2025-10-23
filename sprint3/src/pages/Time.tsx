import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Time = () => {
  const handleSubmit = () => {
    window.alert("Time cadastrado com sucesso!");
  };

  return (
    <section className="min-h-screen bg-black">
      <Header />

      <main className="max-w-2xl mx-auto p-6">
        <h2 className="text-yellow-400 text-xl font-bold mb-6">Cadastre seu Time</h2>

        <div className="space-y-4">
          <div className="text-yellow-500 text-sm mb-4">Informações Gerais</div>

          <div>
            <div className="text-white text-sm mb-2">Escola do Time</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Nome do Time</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Ano de Fundação</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Cidade / Estado</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div className="text-white text-sm mb-4 mt-6">Categorias</div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Sub - 7 (5 a 7 anos)",
              "Sub - 9 (8 a 9 anos)",
              "Sub - 11 (10 a 11 anos)",
              "Sub - 13 (12 a 13 anos)",
              "Sub - 15 (14 a 15 anos)",
              "Sub - 17 (16 a 17 anos)",
              "Sub - 20 (18 a 20 anos)",
              "Profissional"
            ].map((categoria) => (
              <div
                key={categoria}
                className="p-2 bg-gray-600 rounded text-xs text-center text-white cursor-pointer hover:bg-yellow-500"
              >
                {categoria}
              </div>
            ))}
          </div>

          <div className="text-white text-sm mb-4 mt-6">Informações do Responsável</div>

          <div>
            <div className="text-white text-sm mb-2">Nome Completo</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Telefone de Contato</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">E-mail de Contato</div>
            <input type="email" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">CPF do Responsável</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Histórico do Time</div>
            <textarea
              rows={4}
              className="w-full p-3 bg-gray-600 rounded text-white resize-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-white text-black py-3 rounded font-medium mt-6 hover:bg-gray-200"
          >
            Cadastrar Time
          </button>
        </div>
      </main>

      <Footer />
    </section>
  );
};

export default Time;

