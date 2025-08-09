import { useState, useEffect } from "react";

export default function Resultado({ resultado, reiniciarTest }) {
  const [salariosGlobales, setSalariosGlobales] = useState([]);
  const [salariosPeru, setSalariosPeru] = useState([]);
  const [promedioGlobal, setPromedioGlobal] = useState(0);
  const [promedioPeru, setPromedioPeru] = useState(0);

  useEffect(() => {
    const fetchSalariosGlobales = async () => {
      try {
        const res = await fetch('http://localhost:3000/demandaLenguajesExtranjero');
        const data = await res.json();

        const filtrados = data.filter(item => item.Language === resultado.language);
        const soloSalarios = filtrados.map(item => Number(item.Salary_USD));

        setSalariosGlobales(soloSalarios);

        if (soloSalarios.length > 0) {
          const suma = soloSalarios.reduce((acc, val) => acc + val, 0);
          setPromedioGlobal(suma / soloSalarios.length);
        } else {
          setPromedioGlobal(0);
        }
      } catch (error) {
        console.error("Error fetching salarios globales:", error);
        setPromedioGlobal(0);
      }
    };

    const fetchSalariosPeru = async () => {
      try {
        const res = await fetch('http://localhost:3000/demandaLenguajes');
        const data = await res.json();

        const filtrados = data.filter(item => item.Language === resultado.language);
        const soloSalarios = filtrados.map(item => Number(item.Salary_USD));

        setSalariosPeru(soloSalarios);

        if (soloSalarios.length > 0) {
          const suma = soloSalarios.reduce((acc, val) => acc + val, 0);
          setPromedioPeru(suma / soloSalarios.length);
        } else {
          setPromedioPeru(0);
        }
      } catch (error) {
        console.error("Error fetching salarios Perú:", error);
        setPromedioPeru(0);
      }
    };

    if (resultado.language) {
      fetchSalariosGlobales();
      fetchSalariosPeru();
    }
  }, [resultado.language]);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          ¡Tu resultado está listo!
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-center mb-4">
            El lenguaje ideal para ti es: <span className="text-blue-600">{resultado.language}</span>
          </h2>

          <div className="grid gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">📊 Demanda laboral</h3>
              <p>Perú: {resultado.peru?.demand_level || "Alta"}</p>
              <p>Global: {resultado.global?.[0]?.demand_level || "Muy Alta"}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">💰 Sueldo promedio</h3>
              <p>Perú: ${promedioPeru.toFixed(2)} USD</p>
              <p>Global: ${promedioGlobal.toFixed(2)} USD</p>
            </div>

            {resultado.courses?.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium">🎓 Cursos recomendados</h3>
                <ul className="list-disc pl-5">
                  {resultado.courses.map((curso, i) => (
                    <li key={i}>{curso}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={reiniciarTest}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Volver a hacer el test
        </button>
      </div>
    </main>
  );
}
