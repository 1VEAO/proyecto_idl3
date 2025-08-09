import React from "react";

export default function Pregunta({ pregunta, respuestaSeleccionada, onSeleccion }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{pregunta.pregunta}</h2>
      <form className="flex flex-col gap-4">
        {pregunta.opciones.map((opcion, i) => {
          const id = `${pregunta.name}-${i}`;
          return (
            <label
              htmlFor={id}
              key={i}
              className={`w-full flex items-center gap-2 border-2 ${
                respuestaSeleccionada === opcion
                  ? "border-green-500"
                  : "border-gray-300"
              } bg-white h-15 pl-3 py-2 capitalize rounded-2xl cursor-pointer transition-colors`}
            >
              <input
                type="radio"
                name={pregunta.name}
                id={id}
                value={opcion}
                checked={respuestaSeleccionada === opcion}
                onChange={() => onSeleccion(opcion)}
                className="accent-green-500"
              />
              {opcion}
            </label>
          );
        })}
      </form>
    </div>
  );
}