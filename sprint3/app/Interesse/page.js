"use client";
import Header from "../components/Header";

const Interesse = () => {
  const times = [
    { nome: "Fluminense", logo: "/Fluminense.png" },
    { nome: "Corinthians", logo: "/Corinthians.png" },
    { nome: "Atlético-MG", logo: "/AtleticoMG.png" },
    { nome: "Bahia", logo: "/Bahia.png" },
    { nome: "Botafogo", logo: "/Botafogo.png" },
    { nome: "Bragantino", logo: "/Bragantino.png" },
    { nome: "Ceará SC", logo: "/Ceara.png" },
    { nome: "Cruzeiro", logo: "/Cruzeiro.png" },
    { nome: "EC Vitória", logo: "/Vitoria.png" },
    { nome: "São Paulo", logo: "/SP.png" },
    { nome: "Palmeiras", logo: "/Palmeiras.png" },
    { nome: "Flamengo", logo: "/Flamengo.png" },
    { nome: "Fortaleza", logo: "/Fortaleza.png" },
    { nome: "Ferroviaria", logo: "/Ferroviaria.png" },
    { nome: "America Mineiro", logo: "/AmericaMineiro.png" },
    { nome: "Gremio", logo: "/Gremio.png" },
    { nome: "Internacional", logo: "/Internacional.png" },
    { nome: "Real Brasília", logo: "/Real.png" },
    { nome: "Juventude", logo: "/Juventude.png" },
    { nome: "3B da Amazônia", logo: "/3B.png" },
    { nome: "Sport Recife", logo: "/Sport.png" },
  ];

  const handleSelectTeam = (time) => {
    // salva no navegador
    localStorage.setItem("selectedTeam", JSON.stringify(time));
    alert(`${time.nome} foi selecionado! Vá para Perfil.`);
  };

  return (
    <section>
      <Header />
      <div className="bg-black text-white min-h-screen p-8">
        <h1 className="text-yellow-400 text-3xl font-bold text-center mb-6">
          Brasileirão Feminino
        </h1>
        <p className="text-gray-400 text-lg text-center mb-4">
          Escolha clubes para receber lembretes de partidas e atualizações de resultados
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {times.map((time, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={time.logo}
                alt={time.nome}
                className="h-16 w-16 object-contain mb-4"
              />
              <p className="text-white text-lg font-medium mb-4">{time.nome}</p>
              <button
                className="bg-yellow-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                onClick={() => handleSelectTeam(time)}
              >
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interesse;
