import React from "react";
import useTest from "../hooks/hook.js";
import Pregunta from "../components/Pregunta";
import Resultado from "../components/Resultado";
import { preguntas } from "../data/data.js";

export default function Test() {
  const {
    preguntaActual,
    respuestas,
    indice,
    progreso,
    resultado,
    cargando,
    completado,
    manejarSeleccion,
    siguiente,
    anterior,
    enviarFormulario,
    reiniciarTest,
  } = useTest();

  if (resultado) {
    return <Resultado resultado={resultado} reiniciarTest={reiniciarTest} />;
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Test vocacional de programación
        </h1>

        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progreso}%` }}
          ></div>
        </div>

        <Pregunta
          pregunta={preguntaActual}
          respuestaSeleccionada={respuestas[indice]}
          onSeleccion={manejarSeleccion}
        />

        <div className="flex justify-between mt-6">
          <button
            onClick={anterior}
            disabled={indice === 0}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Anterior
          </button>

          {indice < preguntas.length - 1 ? (
            <button
              onClick={siguiente}
              disabled={!respuestas[indice]}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Siguiente
            </button>
          ) : (
            completado && (
              <button
                onClick={enviarFormulario}
                disabled={cargando}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                {cargando ? "Procesando..." : "Enviar"}
              </button>
            )
          )}
        </div>
      </div>
    </main>
  );
}