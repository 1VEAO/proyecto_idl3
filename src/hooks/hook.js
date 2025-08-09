import { useState } from "react";
import { preguntas, relacionRespuestaLenguaje } from "../data/data.js";

const lenguajePuntosInicial = {
  "JavaScript": 0,
  "Python": 0,
  "Java": 0,
  "C#": 0,
  "PHP": 0,
};

export default function useTest() {
  const [indice, setIndice] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);

  const preguntaActual = preguntas[indice];
  const progreso = (respuestas.filter(Boolean).length / preguntas.length) * 100;
  const completado = respuestas.every((r) => r !== null);

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

  const reiniciarTest = () => {
    setIndice(0);
    setRespuestas(Array(preguntas.length).fill(null));
    setResultado(null);
    setCargando(false);
  };

  const calcularLenguajeRecomendado = () => {
    const lenguajePuntos = { ...lenguajePuntosInicial };

    respuestas.forEach((respuesta) => {
      const puntosRespuesta = relacionRespuestaLenguaje[respuesta];
      if (puntosRespuesta) {
        Object.entries(puntosRespuesta).forEach(([lenguaje, puntos]) => {
          lenguajePuntos[lenguaje] += puntos;
        });
      }
    });

    return Object.keys(lenguajePuntos).reduce((a, b) =>
      lenguajePuntos[a] > lenguajePuntos[b] ? a : b
    );
  };

  const enviarFormulario = async () => {
    setCargando(true);
    try {
      const lenguajeRecomendado = calcularLenguajeRecomendado();
      // Aquí puedes hacer el fetch real al backend si lo deseas
      // Por ahora, usamos un resultado local
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

  return {
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
  };
}