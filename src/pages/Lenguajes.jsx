import { useEffect, useState } from "react";
import { Link } from "react-router";

// Componente para cada tarjeta de lenguaje
const LenguajeCard = ({ nombre, descripcion }) => (
 <div className="border border-blue-200 rounded-xl p-5 hover:shadow-md transition-shadow">
  <h2 className="text-xl font-bold text-blue-600 mb-2">{nombre}</h2>
  <p className="text-gray-700 text-sm">{descripcion}</p>
 </div>
);

const Lenguajes = () => {
 const apiUrl = import.meta.env.VITE_API_URL;
 const [lenguajes, setLenguajes] = useState([]);

 useEffect(() => {
  const cargarLenguajes = async () => {
   try {
    const res = await fetch(`${apiUrl}/`);
    const data = await res.json();
    setLenguajes(data);
   } catch (error) {
    console.error("Error cargando lenguajes:", error);
   }
  };

  cargarLenguajes();
 }, []);

 return (
  <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
   <section className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-8">
    <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
     Lenguajes de programación recomendados
    </h1>

    <p className="text-lg text-gray-700 mb-4 text-center">
     Según tus respuestas, podrías comenzar a estudiar alguno de estos
     lenguajes:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
     {lenguajes.map((item, index) => (
      <LenguajeCard
       key={index}
       nombre={item.nombre}
       descripcion={item.descripcion}
      />
     ))}
    </div>

    <div className="mt-8 text-center">
     <Link
      to="/test"
      className="inline-block px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
     >
      Hacer el test
     </Link>
    </div>
   </section>
  </main>
 );
};

export default Lenguajes;
