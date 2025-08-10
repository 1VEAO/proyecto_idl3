import React from "react";
import useTest from "../hooks/hook.js";
import Pregunta from "../components/Pregunta";
import Resultado from "../components/Resultado";
import { preguntas } from "../data/data.js";
import Regedit from "../components/Regedit.jsx";

// Botón reutilizable
const Boton = ({ onClick, disabled, children, color = "gray" }) => {
  const base = `px-4 py-2 rounded-lg text-white disabled:opacity-50 transition-colors`;
  const colores = {
    gray: "bg-gray-400 hover:bg-gray-500",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${colores[color]}`}>
      {children}
    </button>
  );
};

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

  const mostrarBotonSiguiente = indice < preguntas.length - 1;
  const mostrarBotonEnviar = !mostrarBotonSiguiente && completado;

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
          />
        </div>

        <Pregunta
          pregunta={preguntaActual}
          respuestaSeleccionada={respuestas[indice]}
          onSeleccion={manejarSeleccion}
        />

        <div className="flex justify-between mt-6">
          <Boton onClick={anterior} disabled={indice === 0}>
            Anterior
          </Boton>

          {mostrarBotonSiguiente ? (
            <Boton
              onClick={siguiente}
              disabled={!respuestas[indice]}
              color="blue"
            >
              Siguiente
            </Boton>
          ) : (
            mostrarBotonEnviar && (
              <Boton
                onClick={enviarFormulario}
                disabled={cargando}
                color="green"
              >
                {cargando ? "Procesando..." : "Enviar"}
              </Boton>
            )
          )}
        </div>
      </div>
    </main>
  );
}
