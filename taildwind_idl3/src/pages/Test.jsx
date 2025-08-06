import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Qué tipo de cosas te gustaría crear?",
    name: "crear",
    opciones: [
      "Aplicaciones para el celular",
      "Páginas web interactivas",
      "Videojuegos",
      "Programas que automaticen tareas o analicen información"
    ]
  },
  {
    pregunta: "¿Qué estilo de trabajo prefieres?",
    name: "estilo",
    opciones: [
      "Creativo y visual",
      "Resolver problemas paso a paso",
      "Diseñar cómo deberían funcionar las cosas",
      "Trabajar con datos y ordenarlos"
    ]
  },
  {
    pregunta: "¿Qué te llama más la atención?",
    name: "interes",
    opciones: [
      "Diseñar una app como Instagram o TikTok",
      "Hacer una página como YouTube o Mercado Libre",
      "Crear un videojuego simple",
      "Hacer que una computadora tome decisiones por sí sola"
    ]
  },
  {
    pregunta: "Si te dieran un proyecto, ¿cuál elegirías?",
    name: "proyecto",
    opciones: [
      "Una app para registrar hábitos saludables",
      "Una página web para vender productos",
      "Un minijuego para pasar el rato",
      "Un programa que analice encuestas escolares"
    ]
  },
  {
    pregunta: "¿Qué frase va más contigo?",
    name: "frase",
    opciones: [
      "Me gusta ver el resultado final rápidamente",
      "Prefiero pensar cómo hacer que algo funcione bien",
      "Quiero crear algo divertido y desafiante",
      "Me gusta entender patrones y datos"
    ]
  }
];

export default function Test() {
  const [indice, setIndice] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));

  const manejarSeleccion = (valor) => {
    const nuevas = [...respuestas];
    nuevas[indice] = valor;
    setRespuestas(nuevas);
  };

  const siguiente = () => {
    if (indice < preguntas.length - 1) setIndice(indice + 1);
  };

  const anterior = () => {
    if (indice > 0) setIndice(indice - 1);
  };

  const enviarFormulario = () => {
    console.log("Respuestas:", respuestas);
    alert("¡Gracias por completar el test! Revisa la consola para ver tus respuestas.");
  };

  const progreso = (respuestas.filter(Boolean).length / preguntas.length) * 100;
  const completado = respuestas.every((r) => r !== null);

  const preguntaActual = preguntas[indice];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Test vocacional de programación
        </h1>

        {/* Barra de progreso */}
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progreso}%` }}
          ></div>
        </div>

        {/* Pregunta */}
        <div>
          <h2 className="text-lg font-semibold mb-4">{preguntaActual.pregunta}</h2>
          <form className="flex flex-col gap-4">
            {preguntaActual.opciones.map((opcion, i) => {
              const id = `${preguntaActual.name}-${i}`;
              return (
                <label
                  htmlFor={id}
                  key={i}
                  className={`w-full flex items-center gap-2 border-2 ${
                    respuestas[indice] === opcion
                      ? "border-green-500"
                      : "border-gray-300"
                  } bg-white h-15 pl-3 py-2 capitalize rounded-2xl cursor-pointer transition-colors`}
                >
                  <input
                    type="radio"
                    name={preguntaActual.name}
                    id={id}
                    value={opcion}
                    checked={respuestas[indice] === opcion}
                    onChange={() => manejarSeleccion(opcion)}
                    className="accent-green-500"
                  />
                  {opcion}
                </label>
              );
            })}
          </form>
        </div>

        {/* Botones */}
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
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Siguiente
            </button>
          ) : (
            completado && (
              <button
                onClick={enviarFormulario}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Enviar
              </button>
            )
          )}
        </div>
      </div>
    </main>
  );
}
