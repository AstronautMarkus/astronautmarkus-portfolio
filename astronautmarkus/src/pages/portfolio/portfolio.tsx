import { Link } from "react-router-dom";
import TuxPenguin from "../../assets/img/tux-linux-penguin.gif";

function Portfolio() {
  const proyectosFake = [
    { id: 1, nombre: "Proyecto 1", descripcion: "Descripción corta del proyecto 1" },
    { id: 2, nombre: "Proyecto 2", descripcion: "Descripción corta del proyecto 2" },
    { id: 3, nombre: "Proyecto 3", descripcion: "Descripción corta del proyecto 3" },
    { id: 4, nombre: "Proyecto 4", descripcion: "Descripción corta del proyecto 4" },
    { id: 5, nombre: "Proyecto 5", descripcion: "Descripción corta del proyecto 5" },
    { id: 6, nombre: "Proyecto 6", descripcion: "Descripción corta del proyecto 6" },
  ];

  return (
    <div className="min-h-screen min-h-screen relative overflow-hidden rounded-lg p-8">
      <div className="max-w-5xl mx-auto text-white">

        <div className="flex items-center gap-12 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Mi Portafolio (Proyectos)</h1>
            <p className="text-white max-w-2xl drop-shadow-lg mb-2">
              Revisa a detalle la lista de proyectos en los que he trabajado. Cada proyecto está clasificado por su tipo y contiene una breve descripción. Puedes hacer clic en cada proyecto para ver más detalles.
            </p>
          </div>
          <img
            src={TuxPenguin}
            alt="Tux Linux Penguin"
            className="w-32 h-32 object-contain drop-shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {proyectosFake.map(proyecto => (
            <div key={proyecto.id} className="bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{proyecto.nombre}</h2>
              <p className="text-gray-300 text-sm">{proyecto.descripcion}</p>
              <Link
                to={`/projects/${proyecto.id}`}
                className="mt-4 inline-block text-rose-600 hover:text-rose-700"
              >
                Ver detalles &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
