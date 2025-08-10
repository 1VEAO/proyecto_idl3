import { Link } from "react-router";

const campos = [
  {
    id: "nombre",
    label: "Nombre:",
    type: "text",
    placeholder: "Tu nombre",
  },
  {
    id: "email",
    label: "Correo electrónico:",
    type: "email",
    placeholder: "tucorreo@ejemplo.com",
  },
];

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
          {campos.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-gray-600 font-medium">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          ))}

          <div>
            <label htmlFor="mensaje" className="block text-gray-600 font-medium">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
