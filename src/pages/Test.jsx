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

// Sistema de puntuación para los lenguajes
const lenguajePuntos = {
  "JavaScript": 0,
  "Python": 0,
  "Java": 0,
  "C#": 0,
  "PHP": 0
};

// Relación completa entre respuestas y lenguajes
const relacionRespuestaLenguaje = {
  /* Pregunta 1 */
  "Aplicaciones para el celular": { "Java": 3, "JavaScript": 2, "Python": 1 },
  "Páginas web interactivas": { "JavaScript": 3, "PHP": 2, "Python": 1 },
  "Videojuegos": { "C#": 3, "Java": 2, "JavaScript": 1 },
  "Programas que automaticen tareas o analicen información": { "Python": 3, "Java": 1, "JavaScript": 1 },

  /* Pregunta 2 */
  "Creativo y visual": { "JavaScript": 2, "Python": 1, "PHP": 1 },
  "Resolver problemas paso a paso": { "Python": 3, "Java": 2, "C#": 1 },
  "Diseñar cómo deberían funcionar las cosas": { "Java": 3, "C#": 2, "Python": 1 },
  "Trabajar con datos y ordenarlos": { "Python": 3, "Java": 1, "JavaScript": 1 },

  /* Pregunta 3 */
  "Diseñar una app como Instagram o TikTok": { "JavaScript": 3, "Java": 2, "Python": 1 },
  "Hacer una página como YouTube o Mercado Libre": { "JavaScript": 3, "PHP": 2, "Python": 1 },
  "Crear un videojuego simple": { "C#": 3, "Java": 2, "JavaScript": 1 },
  "Hacer que una computadora tome decisiones por sí sola": { "Python": 3, "Java": 1, "C#": 1 },

  /* Pregunta 4 */
  "Una app para registrar hábitos saludables": { "JavaScript": 3, "Java": 2, "Python": 1 },
  "Una página web para vender productos": { "JavaScript": 3, "PHP": 2, "Python": 1 },
  "Un minijuego para pasar el rato": { "C#": 3, "JavaScript": 2, "Java": 1 },
  "Un programa que analice encuestas escolares": { "Python": 3, "Java": 1, "JavaScript": 1 },

  /* Pregunta 5 */
  "Me gusta ver el resultado final rápidamente": { "JavaScript": 3, "PHP": 2, "Python": 1 },
  "Prefiero pensar cómo hacer que algo funcione bien": { "Java": 3, "C#": 2, "Python": 1 },
  "Quiero crear algo divertido y desafiante": { "C#": 3, "JavaScript": 2, "Java": 1 },
  "Me gusta entender patrones y datos": { "Python": 3, "Java": 1, "JavaScript": 1 }
};

export default function Test() {
  const [indice, setIndice] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);

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

  const calcularLenguajeRecomendado = () => {
    // Reiniciar puntajes
    Object.keys(lenguajePuntos).forEach(lenguaje => {
      lenguajePuntos[lenguaje] = 0;
    });

    // Calcular puntajes
    respuestas.forEach((respuesta) => {
      const puntosRespuesta = relacionRespuestaLenguaje[respuesta];
      
      if (puntosRespuesta) {
        Object.entries(puntosRespuesta).forEach(([lenguaje, puntos]) => {
          lenguajePuntos[lenguaje] += puntos;
        });
      }
    });

    // Obtener lenguaje con mayor puntaje
    return Object.keys(lenguajePuntos).reduce((a, b) => 
      lenguajePuntos[a] > lenguajePuntos[b] ? a : b
    );
  };

  const enviarFormulario = async () => {
    setCargando(true);
    
    try {
      const lenguajeRecomendado = calcularLenguajeRecomendado();
      
      // Aquí puedes hacer el fetch al backend si lo deseas
      /*
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: respuestas }),
      });
      const data = await response.json();
      setResultado(data);
      */
      
      // Resultado local (eliminar cuando tengas el backend)
      setResultado({
        language: lenguajeRecomendado,
        peru: { demand_level: "Alta", avg_salary: 4000 },
        global: [{ country: "Global", demand_level: "Muy Alta", avg_salary: 7000 }],
        courses: [`Curso de ${lenguajeRecomendado} en Udemy`, `Tutorial de ${lenguajeRecomendado} en YouTube`]
      });
      
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  const progreso = (respuestas.filter(Boolean).length / preguntas.length) * 100;
  const completado = respuestas.every((r) => r !== null);
  const preguntaActual = preguntas[indice];

  if (resultado) {
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
            onClick={() => setResultado(null)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Volver a hacer el test
          </button>
        </div>
      </main>
    );
  }

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