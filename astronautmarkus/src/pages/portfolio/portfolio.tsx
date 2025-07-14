import { useGetPortfolioProjects } from "./hooks/useGetPortfolioProjects";
import { Github, Lock, Cat } from "lucide-react";
import TuxPenguin from "../../assets/img/tux-linux-penguin.gif";
import { Link } from "react-router-dom";

function Portfolio() {
  const { projects, categories } = useGetPortfolioProjects();
  return (
    <div className="min-h-screen min-h-screen relative overflow-hidden rounded-lg p-8">
      <div className="max-w-5xl mx-auto text-whirte">

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-center md:text-left text-white">Mi Portafolio (Proyectos)</h1>
            <p className="text-white max-w-2xl drop-shadow-lg mb-2 text-center md:text-left">
              Revisa a detalle la lista de proyectos en los que he trabajado. Cada proyecto está clasificado por su tipo y contiene una breve descripción.
            </p>
          </div>
          <img
            src={TuxPenguin}
            alt="Tux Linux Penguin"
            className="w-32 h-32 object-contain drop-shadow-lg mt-4 md:mt-0"
          />
        </div>

        {categories.map(category => (
          <div key={category.slug} className="mb-10">
            <h2 className="text-2xl font-bold mb-2 text-white">{category.title}</h2>
            <p className="text-white mb-4">{category.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.filter(p => p.categorySlug === category.slug).map(proyecto => (
                <div key={proyecto.slug} className="bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 hover:shadow-2xl transition-shadow relative flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2 text-center text-white">{proyecto.title}</h3>
                  {proyecto.imageUrl ? (
                    <img
                      src={proyecto.imageUrl}
                      alt={proyecto.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-rose-700 flex items-center justify-center rounded-lg mb-4">
                      <Github className="text-white" size={40} />
                    </div>
                  )}
                  <p className="text-gray-300 text-sm mb-2 text-center">{proyecto.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    {proyecto.technologies.map(tech => (
                      <span key={tech} className="bg-rose-700/80 text-white text-xs px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    {proyecto.privateRepo ? (
                      <span title="Repositorio privado" className="flex items-center gap-1 text-gray-400 text-sm">
                        <Lock size={20} />
                        Este repositorio es privado 
                        <Cat size={16} />
                      </span>
                    ) : (
                      proyecto.githubUrl && (
                        <Link
                          to={proyecto.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-rose-700 hover:bg-rose-800 rounded-md transition-all"
                        >
                          <Github size={16} />
                          Ver repositorio
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio