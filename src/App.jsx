import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const fetchAdvice = useCallback(async () => {
    try {
      setLoading(true);
      const randomNumber = Math.floor(Math.random() * 100);
      const response = await fetch(
        `https://api.adviceslip.com/advice/${randomNumber}`
      );
      
      if (!response.ok) throw new Error("Erro ao buscar conselho");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } 
    catch (error) {
      setAdvice("Erro ao buscar conselho. Tente novamente mais tarde.");
    } 
    finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  return (
    <div
      className={`flex justify-center items-center h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-700"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-2xl w-64 sm:w-80 md:w-96 text-center transition-opacity duration-500 ${
          loading ? "opacity-50" : "opacity-100"
        }`}
      >
        {loading ? (
          <p className="text-xl font-semibold my-4 text-gray-500">
            Carregando...
          </p>
        ) : (
          <>
            <span
              className={`text-xl ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Conselho #{adviceId}
            </span>

            <p
              className={`text-xl font-semibold my-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {advice}
            </p>
          </>
        )}

        <button
          onClick={fetchAdvice}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          aria-label="Gerar novo conselho"
          disabled={loading}
        >
          {loading ? "Carregando..." : "Gerar Novo Conselho"}
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300 mt-4"
          aria-label="Alternar modo escuro"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>
    </div>
  );
}

export default App;
