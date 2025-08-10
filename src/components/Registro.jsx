// src/components/Registro.jsx
import { useState } from "react";

// Botón reutilizable embebido
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

export default function Registro({ onRegistro }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    pais: "",
    edad: "",
    correo: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const puedeContinuar = Object.values(formData).every((val) => val.trim() !== "");

  return (
    <main className="min-h-screen bg-blue-50 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
          Regístrate para comenzar el test
        </h2>

        <form className="space-y-4">
          {["nombre", "apellido", "pais", "edad", "correo"].map((campo) => (
            <input
              key={campo}
              type={campo === "edad" ? "number" : campo === "correo" ? "email" : "text"}
              name={campo}
              placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
              value={formData[campo]}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
          ))}

          <Boton
            onClick={() => onRegistro(formData)}
            disabled={!puedeContinuar}
            color="green"
          >
            Comenzar test
          </Boton>
        </form>
      </div>
    </main>
  );
}
