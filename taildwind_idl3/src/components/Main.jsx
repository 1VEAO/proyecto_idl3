import { FcBullish, FcIdea, FcSalesPerformance } from "react-icons/fc";
import { Link } from "react-router";

const Main = () => {
  return (
    <main>
      {/* Versión Web */}
      <div className="cont_main_web hidden md:block">
        <section className="main_web-1 w-full h-80 bg-gray-100 flex items-center justify-between p-10">
          <div className="main_web flex flex-col gap-5 w-1/2">
            <h1 className="text-3xl font-bold capitalize text-gray-600">
              descubre tu lenguaje de programacion ideal
            </h1>
            <p className="text-lg">test personalizado basado en demanda laboral y salarios</p>
            
<Link to="/test">
  <button className="bg-orange-400 text-white p-3 rounded-2xl hover:bg-orange-300 transition-all font-bold w-50 cursor-pointer capitalize">
    hacer test ahora
  </button>
</Link>
          </div>
          <div className="w-1/2 flex justify-end">
            {/* <div className="w-72 h-60 bg-sky-600 rounded-3xl" /> */}
            <img src="/imagen_programacion.jpg" alt="programacion" className="object-cover w-72 h-60 rounded-3xl" />
          </div>
        </section>

        <section className="main_web-2 w-full h-80 bg-white p-10 grid grid-cols-3 gap-5">
          {[["demanda laboral", "datos actualizados del mercado", <FcBullish />],
            ["salarios competitivos", "comparativa peru vs extranjero", <FcIdea />],
            ["recomendaciones personalizadas", "basado en tus preferencias", <FcSalesPerformance />]
          ].map(([title, desc, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <div className="bg-sky-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl text-white">
                {Icon}
              </div>
              <h2 className="text-xl font-bold capitalize">{title}</h2>
              <p className="text-base capitalize">{desc}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Versión Mobile */}
      <div className="cont_main_mobile md:hidden">
        <section className="p-6 bg-gray-100 flex flex-col gap-5 text-center items-center">
          <h1 className="text-2xl font-bold text-gray-700 capitalize">descubre tu lenguaje de programacion ideal</h1>
          <p className="text-base capitalize">test personalizado basado en demanda laboral y salarios</p>
          <Link to="/test">
            <button className="bg-orange-400 text-white p-3 rounded-2xl hover:bg-orange-300 transition-all font-bold w-50 cursor-pointer capitalize">
              hacer test ahora
            </button>
          </Link>
          <div className="w-full h-52  rounded-3xl mt-4">
            <img src="/imagen_programacion.jpg" alt="programacion" className="object-cover w-full h-full rounded-3xl" />
          </div>
        </section>

        <section className="p-6 bg-white grid gap-6">
          {[["Demanda laboral", "datos actualizados del mercado", <FcBullish />],
            ["Salarios competitivos", "comparativa peru vs extranjero", <FcIdea />],
            ["Recomendaciones", "basado en tus preferencias", <FcSalesPerformance />]
          ].map(([title, desc, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <div className="bg-sky-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white">
                {Icon}
              </div>
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="text-sm capitalize">{desc}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Main;
