import { Link } from "react-router";

const Contacto = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <section className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-sky-700 mb-6">
          Contáctanos
        </h1>

        <p className="text-gray-700 text-center mb-6">
          ¿Tienes alguna duda, sugerencia o deseas colaborar en el proyecto? Llena el siguiente formulario o escríbenos directamente.
        </p>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="nombre" className="block text-gray-600 font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-gray-600 font-medium">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-sky-600 text-white font-medium py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-sky-600 hover:underline text-sm font-medium"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
