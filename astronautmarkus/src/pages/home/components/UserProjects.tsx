import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, ChevronRight } from "lucide-react";

// Importing images

import MultiStockSync from "../../../assets/img/projects/multi-stock-sync.png";
import MofuLunchesWeb from "../../../assets/img/projects/mofu-lunches-web.jpg";
import MofuLunchesTotem from "../../../assets/img/projects/mofu-lunches-totem.jpg";

type Tag = {
  name: string;
  color: string;
  textColor?: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  slug: string;
};

const projects: Project[] = [
  {
    title: "Multi Stock Sync",
    description: "Web platform to manage businesses in POS format with direct implementation to MercadoLibre, inventory functions, business, receipts, etc.",
    image: MultiStockSync,
    tags: [
      { name: "React", color: "#61DBFB", textColor: "black" },
      { name: "Bootstrap", color: "#553c7b", textColor: "white" },
      { name: "Laravel", color: "#F05340", textColor: "white" },
      { name: "MySQL", color: "#00758f", textColor: "white" },
    ],
    slug: "multi-stock-sync",
  },
  {
    title: "Mofu Lunches Web",
    description: "Administrative web platform for managing food requests in companies, with multiple services and API Gateway for links with digital totems.",
    image: MofuLunchesWeb,
    tags: [
      { name: "Flask", color: "#151515ff", textColor: "white" },
      { name: "Bootstrap", color: "#553c7b", textColor: "white" },
      { name: "MongoDB", color: "#3FA037", textColor: "white" }
    ],
    slug: "mofu-lunches-web",
  },
  {
    title: "Mofu Lunches Totem",
    description: "Digital totem for ordering food in companies, with touch screen interface and connection to the Mofu Lunches web platform.",
    image: MofuLunchesTotem,
    tags: [
      { name: "Electron", color: "#9FEAF9", textColor: "black" },
      { name: "React", color: "#61DBFB", textColor: "black" },
      { name: "Bootstrap", color: "#553c7b", textColor: "white" }
    ],
    slug: "mofu-lunches-totem",
  },
];

const UserProjects: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-rose-700 mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development and systems administration.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
              ) : null}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1 text-xs font-semibold rounded-full"
                    style={{
                      backgroundColor: tag.color,
                      color: tag.textColor || "white"
                    }}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="text-rose-600 font-semibold hover:text-rose-800 transition flex items-center gap-1"
              >
                View Details
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-8 py-3 bg-rose-700 text-white rounded-lg font-semibold shadow-lg hover:bg-rose-800 transition hover:scale-105 transform duration-300"
        >
          <Rocket size={20} />
          View All Projects
        </Link>
      </motion.div>
    </div>
  </section>
);

export default UserProjects;
