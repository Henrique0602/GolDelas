import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Jogadora = () => {
  const handleSubmit = () => {
    window.alert("Jogadora cadastrada com sucesso!");
  };

  return (
    <section className="min-h-screen bg-black">
      <Header />

      <main className="max-w-2xl mx-auto p-6">
        <h2 className="text-yellow-400 text-xl font-bold mb-6">Cadastro da Jogadora</h2>

        <div className="space-y-4">
          <div className="text-yellow-500 text-sm mb-4">Informações Gerais</div>

          <div>
            <div className="text-white text-sm mb-2">Foto da jogadora</div>
            <input
              type="file"
              accept="image/*"
              className="w-full p-3 bg-gray-600 rounded text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-yellow-400 file:text-black"
            />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Nome Completo</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Data de Nascimento</div>
            <input type="date" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Idade</div>
            <input type="number" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">RG ou CPF</div>
            <input type="number" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div className="text-yellow-500 text-sm mb-4 mt-6">Informações Técnicas</div>

          <div>
            <div className="text-white text-sm mb-2">Posição Principal</div>
            <input type="text" className="w-full p-3 bg-gray-600 rounded text-white" />
          </div>

          <div>
            <div className="text-white text-sm mb-2">Pé dominante</div>
            <div className="flex gap-4">
              <label className="flex items-center text-white">
                <input type="radio" name="pe-dominante" value="direito" className="mr-2" />
                Direito
              </label>
              <label className="flex items-center text-white">
                <input type="radio" name="pe-dominante" value="esquerdo" className="mr-2" />
                Esquerdo
              </label>
              <label className="flex items-center text-white">
                <input type="radio" name="pe-dominante" value="ambos" className="mr-2" />
                Ambos
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-white text-sm mb-2">Altura (cm)</div>
              <input
                type="number"
                placeholder="Ex: 170"
                className="w-full p-3 bg-gray-600 rounded text-white"
              />
            </div>
            <div>
              <div className="text-white text-sm mb-2">Peso (kg)</div>
              <input
                type="number"
                placeholder="Ex: 65"
                className="w-full p-3 bg-gray-600 rounded text-white"
              />
            </div>
          </div>

          <div className="text-yellow-500 text-sm mb-4 mt-6">Informações de Contato</div>

          <div>
            <div className="text-white text-sm mb-2">Telefone de Contato</div>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              className="w-full p-3 bg-gray-600 rounded text-white"
            />
          </div>

          <div>
            <div className="text-white text-sm mb-2">E-mail de Contato</div>
            <input
              type="email"
              placeholder="email@exemplo.com"
              className="w-full p-3 bg-gray-600 rounded text-white"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-white text-black py-3 rounded font-medium mt-6 hover:bg-gray-200"
          >
            Cadastrar Jogadora
          </button>
        </div>
      </main>

      <Footer />
    </section>
  );
};

export default Jogadora;

