import React, { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('')

  const fetchAdvice = async () => {

    try {
      const randomNumber = Math.floor(Math.random() * 100);
      const response = await fetch(`https://api.adviceslip.com/advice/${randomNumber}`);
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);

    } catch (error) {

      console.error("Erro ao buscar conselho:", error);

    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80text-center">
        <span className="text-gray-500 text-sm">Conselho #{adviceId}</span>
        <p className="text-lg font-semibold my-4">{advice}</p>
        <button
          onClick={fetchAdvice}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Gerar Novo Conselho
        </button>
      </div>
    </div>
  );
}
export default App;
