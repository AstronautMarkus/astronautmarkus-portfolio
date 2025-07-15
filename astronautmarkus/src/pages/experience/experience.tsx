import { Briefcase, Calendar, Code, Database, Globe, Server, Palette } from "lucide-react";
import { useGetExperienceProjects } from "./hooks/useGetExperienceProjects";

function Experience() {
  const { projects } = useGetExperienceProjects();

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Experiencia</h1>
          <p className="text-lg text-gray-300">Aquí puedes ver mi experiencia laboral con proyectos reales.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Experiencia Laboral</h2>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Briefcase className="text-rose-700 w-6 h-6 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-white font-medium text-lg">{project.title}</h3>
                        <p className="text-gray-300 text-base mb-2">{project.company}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="text-rose-700 w-4 h-4" />
                          <span className="text-gray-400 text-sm">{project.startDate} - {project.endDate}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-48 h-28 bg-gray-600/50 rounded-lg flex items-center justify-center border-1 border-gray-500 mt-4 md:mt-0">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <span className="text-gray-400 text-xs text-center">Sin Imagen</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Tech Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Code className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">React</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Code className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">TypeScript</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Server className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">Node.js</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Database className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">PostgreSQL</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Palette className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">Tailwind</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Globe className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">Next.js</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Database className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">MongoDB</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Code className="text-rose-700 w-6 h-6" />
              <span className="text-white font-medium">Python</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;