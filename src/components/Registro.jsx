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
  <button
   onClick={onClick}
   disabled={disabled}
   className={`${base} ${colores[color]}`}
  >
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
  email: "", // ✅ corregido
 });

 const [enviando, setEnviando] = useState(false);

 const handleChange = (e) => {
  setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const puedeContinuar =
  Object.values(formData).every((val) => val.trim() !== "") && !enviando;

 const enviarFormulario = async () => {
  setEnviando(true);
  try {
   const respuesta = await fetch("https://backend-15sl.onrender.com/usuario", {
    method: "PUT",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include", // ✅ necesario para CORS con credenciales
   });

   if (!respuesta.ok) {
    throw new Error("Error al enviar el formulario");
   }

   const resultado = await respuesta.json();
   console.log("Registro exitoso:", resultado);

   if (onRegistro) {
    onRegistro(formData); // Callback opcional
   }
  } catch (error) {
   console.error("Error:", error);
   alert("Hubo un problema al enviar el formulario.");
  } finally {
   setEnviando(false);
  }
 };

 return (
  <main className="min-h-screen bg-blue-50 py-10 px-4 flex justify-center items-center">
   <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
    <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
     Regístrate para comenzar el test
    </h2>

    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
     {["nombre", "apellido", "pais", "edad", "email"].map((campo) => (
      <input
       key={campo}
       type={campo === "edad" ? "number" : campo === "email" ? "email" : "text"}
       name={campo}
       placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
       value={formData[campo]}
       onChange={handleChange}
       disabled={enviando}
       className="w-full border rounded-lg px-4 py-2"
      />
     ))}

     <Boton onClick={enviarFormulario} disabled={!puedeContinuar} color="green">
      {enviando ? "Enviando..." : "Comenzar test"}
     </Boton>
    </form>
   </div>
  </main>
 );
}
