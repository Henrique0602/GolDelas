import { FormEvent, useState } from "react";
import { FaApple, FaEnvelope, FaGoogle } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "PassaBola@gmail.com" && password === "123456") {
      window.alert("Login realizado com sucesso!");
      navigate("/Home");
    } else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex w-full max-w-6xl bg-black rounded-lg shadow-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-cover bg-center items-center justify-center p-8 relative">
          <img src="/Logo.png" alt="GolDelas Logo" className="w-4/5 max-w-md" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 bg-black relative">
          <img
            src="/Logo.png"
            alt="GolDelas Logo"
            className="w-2/3 max-w-xs mb-8 md:hidden"
          />

          <h1 className="text-white text-4xl font-bold mb-8 text-left w-full max-w-sm">
            Login
          </h1>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="w-full max-w-sm">
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
              <FaEnvelope className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
              <TbLockPassword className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 mb-6"
            >
              Entrar
            </button>
          </form>

          <div className="flex items-center w-full max-w-sm mb-6">
            <div className="flex-grow border-t border-gray-700" />
            <span className="flex-shrink mx-4 text-gray-500">ou</span>
            <div className="flex-grow border-t border-gray-700" />
          </div>

          <button
            type="button"
            className="w-full max-w-sm bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-3 transition duration-300 mb-4"
          >
            <FaGoogle />
            <span>Continuar com Google</span>
          </button>

          <button
            type="button"
            className="w-full max-w-sm bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-3 transition duration-300"
          >
            <FaApple />
            <span>Continuar com Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

