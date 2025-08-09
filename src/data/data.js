// data.js
export const preguntas = [
  {
    pregunta: "¿Qué tipo de cosas te gustaría crear?",
    name: "crear",
    opciones: [
      "Aplicaciones para el celular",
      "Páginas web interactivas",
      "Videojuegos",
      "Programas que automaticen tareas o analicen información",
    ],
  },
  {
    pregunta: "¿Qué estilo de trabajo prefieres?",
    name: "estilo",
    opciones: [
      "Creativo y visual",
      "Resolver problemas paso a paso",
      "Diseñar cómo deberían funcionar las cosas",
      "Trabajar con datos y ordenarlos",
    ],
  },
  {
    pregunta: "¿Qué te llama más la atención?",
    name: "interes",
    opciones: [
      "Diseñar una app como Instagram o TikTok",
      "Hacer una página como YouTube o Mercado Libre",
      "Crear un videojuego simple",
      "Hacer que una computadora tome decisiones por sí sola",
    ],
  },
  {
    pregunta: "Si te dieran un proyecto, ¿cuál elegirías?",
    name: "proyecto",
    opciones: [
      "Una app para registrar hábitos saludables",
      "Una página web para vender productos",
      "Un minijuego para pasar el rato",
      "Un programa que analice encuestas escolares",
    ],
  },
  {
    pregunta: "¿Qué frase va más contigo?",
    name: "frase",
    opciones: [
      "Me gusta ver el resultado final rápidamente",
      "Prefiero pensar cómo hacer que algo funcione bien",
      "Quiero crear algo divertido y desafiante",
      "Me gusta entender patrones y datos",
    ],
  },
];

export const relacionRespuestaLenguaje = {
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