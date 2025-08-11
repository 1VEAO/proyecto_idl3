import { useState, useEffect } from "react";

export default function Resultado({ resultado, reiniciarTest }) {
 const [promedioGlobal, setPromedioGlobal] = useState(0);
 const [promedioPeru, setPromedioPeru] = useState(0);
 const [demandaGlobal, setDemandaGlobal] = useState(0);
 const [demandaPeru, setDemandaPeru] = useState(0);
 const [cursos, setCursos] = useState([]);

 const calcularPromedio = (data, language) => {
  const filtrados = data.filter((item) => item.Language === language);
  const salarios = filtrados.map((item) => Number(item.Salary_USD));
  const suma = salarios.reduce((acc, val) => acc + val, 0);
  return salarios.length ? suma / salarios.length : 0;
 };

 const calcularDemanda = (data, language) => {
  return data.filter((item) => item.Language === language).length;
 };

 const filtrarCursos = (data, language) => {
  return data.filter((item) => item.Language === language);
 };

 useEffect(() => {
  const fetchData = async () => {
   try {
    const [resGlobal, resPeru, resCursos] = await Promise.all([
     fetch("https://server-k8rp.onrender.com/demandaLenguajesExtranjero"),
     fetch("https://server-k8rp.onrender.com/demandaLenguajes"),
     fetch("https://server-k8rp.onrender.com/cursos"),
    ]);

    const [dataGlobal, dataPeru, dataCursos] = await Promise.all([
     resGlobal.json(),
     resPeru.json(),
     resCursos.json(),
    ]);

    const lenguaje = resultado.language;

    setPromedioGlobal(calcularPromedio(dataGlobal, lenguaje));
    setPromedioPeru(calcularPromedio(dataPeru, lenguaje));
    setDemandaGlobal(calcularDemanda(dataGlobal, lenguaje));
    setDemandaPeru(calcularDemanda(dataPeru, lenguaje));
    setCursos(filtrarCursos(dataCursos, lenguaje));
   } catch (error) {
    console.error("Error al obtener datos:", error);
    setPromedioGlobal(0);
    setPromedioPeru(0);
    setDemandaGlobal(0);
    setDemandaPeru(0);
    setCursos([]);
   }
  };

  if (resultado.language) fetchData();
 }, [resultado.language]);

 return (
  <main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
   <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-6">
    <h1 className="text-2xl font-bold mb-6 text-center">
     ¡Tu resultado está listo!
    </h1>

    <div className="mb-6">
     <h2 className="text-xl font-semibold text-center mb-4">
      El lenguaje ideal para ti es:{" "}
      <span className="text-blue-600">{resultado.language}</span>
     </h2>

     <div className="grid gap-4">
      <div className="bg-gray-50 p-4 rounded-lg">
       <h3 className="font-medium">📊 Demanda laboral</h3>
       <p>Perú: {demandaPeru} ofertas registradas</p>
       <p>Global: {demandaGlobal} ofertas registradas</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
       <h3 className="font-medium">💰 Sueldo promedio</h3>
       <p>Perú: ${promedioPeru.toFixed(2)} USD</p>
       <p>Global: ${promedioGlobal.toFixed(2)} USD</p>
      </div>

      {cursos.length > 0 && (
       <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium">🎓 Cursos recomendados</h3>
        <ul className="list-disc pl-5 space-y-2">
         {cursos.map((curso, i) => (
          <li key={i}>
           <strong>{curso.Institution}</strong> - {curso.Level},{" "}
           {curso.Modality}, {curso.Duration_weeks} semanas ({curso.Region})
          </li>
         ))}
        </ul>
       </div>
      )}
     </div>
    </div>

    <button
     onClick={reiniciarTest}
     className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
     Volver a hacer el test
    </button>
   </div>
  </main>
 );
}
