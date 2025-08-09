import React from "react";

export default function Resultado({ resultado, reiniciarTest }) {
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
              <p>Perú: ${resultado.peru?.avg_salary || "4000"} USD</p>
              <p>Global: ${resultado.global?.[0]?.avg_salary || "7000"} USD</p>
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