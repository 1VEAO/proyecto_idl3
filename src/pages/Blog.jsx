import { Link } from "react-router";

const Blog = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <section className="w-full max-w-5xl bg-white shadow-md rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Blog de orientación profesional
        </h1>

        <p className="text-lg text-gray-700 text-center mb-4">
          Aquí encontrarás artículos que te ayudarán a decidir qué lenguaje estudiar, cómo prepararte para el mercado laboral, y más.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Publicación 1 */}
          <article className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:shadow transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              ¿Qué lenguaje aprender primero?
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Elegir el primer lenguaje puede parecer abrumador. Aquí te explicamos cómo tomar la mejor decisión según tu perfil.
            </p>
            <Link
              to="/blog/articulo1"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Leer más →
            </Link>
          </article>

          {/* Publicación 2 */}
          <article className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:shadow transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Las habilidades más valoradas en 2025
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Más allá del lenguaje de programación, hay habilidades que toda persona en tecnología debe dominar.
            </p>
            <Link
              to="/blog/articulo2"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Leer más →
            </Link>
          </article>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl inline-block"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blog;
