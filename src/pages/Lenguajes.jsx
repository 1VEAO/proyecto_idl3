import { useEffect, useState } from "react";
import { Link } from "react-router";

const Lenguajes = () => {
  const [lenguajes, setLenguajes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/") // el archivo en la carpeta public
      .then((res) => res.json())
      .then((data) => setLenguajes(data))
      .catch((error) => console.error("Error cargando lenguajes:", error));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Lenguajes de programación recomendados
        </h1>

        <p className="text-lg text-gray-700 mb-4 text-center">
          Según tus respuestas, podrías comenzar a estudiar alguno de estos lenguajes:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {lenguajes.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl p-5 hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold text-blue-600 mb-2">
                {item.nombre}
              </h2>
              <p className="text-gray-700 text-sm">{item.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/test"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl inline-block"
          >
            Hacer el test
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Lenguajes;
