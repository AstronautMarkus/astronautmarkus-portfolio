import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";


import TurnoMaster from "../../assets/img/projects/turnomaster.png";
import FumoIndex from "../../assets/img/projects/fumoindex.png";
import AbbyBotProject from "../../assets/img/projects/abbybot-project.png";
import AbbyBotProjectWebsite from "../../assets/img/projects/abbybot-project-website.jpg";
import BlogAstronautMarkus from "../../assets/img/projects/blog-astronautmarkus.png";
import MultiStockSync from "../../assets/img/projects/multi-stock-sync.png";
import MultiStockSyncBack from "../../assets/img/projects/multi-stock-sync-back.png";
import MultiStockSyncApiViewer from "../../assets/img/projects/multi-stock-sync-api-viewer.png";
import MofuStore from "../../assets/img/projects/mofustore.jpg";
import CamellosFoodRepartidor from "../../assets/img/projects/camellosfood-repartidor.jpg";
import ConstruMic from "../../assets/img/projects/constru-mic.jpg";
import MofuLunchesWeb from "../../assets/img/projects/mofu-lunches-web.jpg";
import MofuLunchesApi from "../../assets/img/projects/mofulunches-api.jpg";
import MofuLunchesTotem from "../../assets/img/projects/mofulunches-totem.jpg";
import MofuLunchesElDimon from "../../assets/img/projects/mofulunches-eldimon.jpg";
import MofuLunchesElDimonListener from "../../assets/img/projects/mofulunches-eldimon-listener.jpg";

// Tag styles mapping
const tagStyles: Record<string, { color: string; textColor: string }> = {
  "Laravel":      { color: "#FF2D20", textColor: "white" },
  "React":        { color: "#61DAFB", textColor: "black" },
  "Tailwind CSS": { color: "#06B6D4", textColor: "white" },
  "TailwindCSS":  { color: "#06B6D4", textColor: "white" },
  "Flask":        { color: "#000000", textColor: "white" },
  "MariaDB":      { color: "#003545", textColor: "white" },
  "Docker":       { color: "#2496ED", textColor: "white" },
  "Axios":        { color: "#5A29E4", textColor: "white" },
  "Astro":        { color: "#181923", textColor: "white" },
  "SQLAlchemy":   { color: "#E3B23C", textColor: "black" },
  "Python":       { color: "#3776AB", textColor: "white" },
  "PHP":          { color: "#777BB4", textColor: "white" },
  "HTML":         { color: "#E34F26", textColor: "white" },
  "CSS":          { color: "#1572B6", textColor: "white" },
  "TypeScript":   { color: "#3178C6", textColor: "white" },
  "SQL":          { color: "#4479A1", textColor: "white" },
  "Bash":         { color: "#4EAA25", textColor: "white" },
  "Markdown":     { color: "#000000", textColor: "white" },
  "Django":       { color: "#092E20", textColor: "white" },
  "FastAPI":      { color: "#009688", textColor: "white" },
  "Vue":          { color: "#42B883", textColor: "white" },
  "Livewire":     { color: "#4E56A6", textColor: "white" },
  "Bootstrap":    { color: "#7952B3", textColor: "white" },
  "Bulma":        { color: "#00D1B2", textColor: "white" },
  "DevIcons":     { color: "#000000", textColor: "white" },
  "Sanctum":      { color: "#4E56A6", textColor: "white" },
  "Swagger":      { color: "#85EA2D", textColor: "black" },
  "MongoDB":      { color: "#47A248", textColor: "white" },
  "Electron":     { color: "#47848F", textColor: "white" },
  "Arduino":      { color: "#00979D", textColor: "white" },
  "C++":          { color: "#00599C", textColor: "white" },
  "PyQt5":        { color: "#41CD52", textColor: "black" },
  "Json-Server":  { color: "#D7263D", textColor: "white" },
  "Firebase":     { color: "#FFCA28", textColor: "black" },
  "MySQL":        { color: "#4479A1", textColor: "white" },
  "Gunicorn":     { color: "#499848", textColor: "white" },
  "Discord.py":  { color: "#FFD43B", textColor: "black" },
  "Blade":       { color: "#F7523F", textColor: "white" },
  "Node.js":      { color: "#339933", textColor: "white" },
  "Chart.js":     { color: "#FF6384", textColor: "white" },
  "Ionic":        { color: "#3880FF", textColor: "white" },
  "Angular":      { color: "#DD0031", textColor: "white" },
};

type Tag = {
  name: string;
  color?: string;
  textColor?: string;
};

type Project = {
  title: string;
  description: string;
  image: string | null;
  tags: Tag[];
  slug: string;
};

function styleTag(tag: Tag): Tag {
  const style = tagStyles[tag.name];
  return style
    ? { ...tag, color: style.color, textColor: style.textColor }
    : { ...tag, color: "#e5e7eb", textColor: "black" };
}

const projects: Project[] = [
  {
    slug: 'turnomaster',
    title: 'TurnoMaster',
    description: 'Appointment scheduling platform built with Flask, Python, MariaDB, Docker, Axios, Astro, SQLAlchemy, and Tailwind CSS.',
    tags: [
      styleTag({ name: "React" }),
      styleTag({ name: "TailwindCSS" }),
      styleTag({ name: "Laravel" }),
      styleTag({ name: "MySQL" }),
      styleTag({ name: "Chart.js" }),
      styleTag({ name: "Axios" })
    ],
    image: TurnoMaster,
  },
  {
    slug: 'fumo-index',
    title: 'The Fumo Index',
    description: 'Portfolio project for tracking Fumo plushies. Built with React, TypeScript, Laravel, MySQL, and Tailwind CSS.',
    tags: [
      styleTag({ name: "React" }),
      styleTag({ name: "TypeScript" }),
      styleTag({ name: "Laravel" }),
      styleTag({ name: "MySQL" }),
      styleTag({ name: "Tailwind CSS" })
    ],
    image: FumoIndex,
  },
  {
    slug: 'abbybot-project',
    title: 'AbbyBot Project',
    description: 'Discord bot built with Discord.py, Python, and MySQL.',
    tags: [
      styleTag({ name: "Discord.py" }),
      styleTag({ name: "Python" }),
      styleTag({ name: "MySQL" })
    ],
    image: AbbyBotProject,
  },
  {
    slug: 'blog-astronautmarkus',
    title: 'Blog AstronautMarkus',
    description: 'Personal blog built with Laravel, Blade, Tailwind CSS, MySQL, and PHP.',
    tags: [
      styleTag({ name: "Laravel" }),
      styleTag({ name: "Blade" }),
      styleTag({ name: "Tailwind CSS" }),
      styleTag({ name: "MySQL" }),
      styleTag({ name: "PHP" })
    ],
    image: BlogAstronautMarkus,
  },
  {
    slug: 'abbybot-project-website',
    title: 'AbbyBot Project Website',
    description: 'Website for AbbyBot built with Flask, Python, Bootstrap, MySQL, Gunicorn, and Docker.',
    tags: [
      styleTag({ name: "Flask" }),
      styleTag({ name: "Python" }),
      styleTag({ name: "Bootstrap" }),
      styleTag({ name: "MySQL" }),
      styleTag({ name: "Gunicorn" }),
      styleTag({ name: "Docker" })
    ],
    image: AbbyBotProjectWebsite,
  },
  {
    slug: 'multi-stock-sync',
    title: 'Multi Stock Sync',
    description: 'Web platform for business management with React, Node.js, Bootstrap, and Chart.js.',
    tags: [
      styleTag({ name: "React" }),
      styleTag({ name: "Node.js" }),
      styleTag({ name: "Bootstrap" }),
      styleTag({ name: "Chart.js" }),
      styleTag({ name: "Axios" })
    ],
    image: MultiStockSync,
  },
  {
    slug: 'multi-stock-sync-back',
    title: 'Multi Stock Sync Back',
    description: 'Backend for Multi Stock Sync using Laravel, Sanctum, MySQL, and PHP.',
    tags: [
      styleTag({ name: "Laravel" }),
      styleTag({ name: "Sanctum" }),
      styleTag({ name: "MySQL" }),
      styleTag({ name: "PHP" })
    ],
    image: MultiStockSyncBack,
  },
  {
    slug: 'multi-stock-sync-api-viewer',
    title: 'Multi Stock Sync API Viewer',
    description: 'API viewer for Multi Stock Sync using Laravel and Swagger.',
    tags: [
      styleTag({ name: "Laravel" }),
      styleTag({ name: "Swagger" })
    ],
    image: MultiStockSyncApiViewer,
  },
  {
    slug: 'mofustore',
    title: 'MOFUStore',
    description: 'Store management platform built with Python, Django, Bootstrap, and MySQL.',
    tags: [
      styleTag({ name: "Python" }),
      styleTag({ name: "Django" }),
      styleTag({ name: "Bootstrap" }),
      styleTag({ name: "MySQL" })
    ],
    image: MofuStore,
  },
  {
    slug: 'camellosfood-repartidor',
    title: 'CamellosFood Repartidor',
    description: 'Delivery app built with Ionic, Angular, and Django.',
    tags: [
      styleTag({ name: "Ionic" }),
      styleTag({ name: "Angular" }),
      styleTag({ name: "Django" })
    ],
    image: CamellosFoodRepartidor,
  },
  {
    slug: 'constru-mic',
    title: 'CONSTRU_MIC',
    description: 'Construction management platform using Django, Bootstrap, and MySQL.',
    tags: [
      styleTag({ name: "Django" }),
      styleTag({ name: "Bootstrap" }),
      styleTag({ name: "MySQL" })
    ],
    image: ConstruMic,
  },
  {
    slug: 'mofulunches-web',
    title: 'Mofu Lunches Web',
    description: 'Web platform for food requests using Flask and Bootstrap.',
    tags: [
      styleTag({ name: "Flask" }),
      styleTag({ name: "Bootstrap" })
    ],
    image: MofuLunchesWeb,
  },
  {
    slug: 'mofulunches-api',
    title: 'Mofu Lunches API',
    description: 'API for Mofu Lunches built with Python, Flask, and MongoDB.',
    tags: [
      styleTag({ name: "Python" }),
      styleTag({ name: "Flask" }),
      styleTag({ name: "MongoDB" })
    ],
    image: MofuLunchesApi,
  },
  {
    slug: 'mofulunches-totem',
    title: 'Mofu Lunches Totem',
    description: 'Totem system for Mofu Lunches using Electron, Arduino, and React.',
    tags: [
      styleTag({ name: "Electron" }),
      styleTag({ name: "Arduino" }),
      styleTag({ name: "React" })
    ],
    image: MofuLunchesTotem,
  },
  {
    slug: 'mofulunches-eldimon',
    title: 'Mofu Lunches ElDimon',
    description: 'Arduino-based system for Mofu Lunches.',
    tags: [
      styleTag({ name: "Arduino" }),
      styleTag({ name: "C++" })
    ],
    image: MofuLunchesElDimon,
  },
  {
    slug: 'mofulunches-listener',
    title: 'Mofu Lunches ElDimon Listener',
    description: 'Listener for Mofu Lunches built with Python and PyQt5.',
    tags: [
      styleTag({ name: "Python" }),
      styleTag({ name: "PyQt5" })
    ],
    image: MofuLunchesElDimonListener,
  },
  {
    slug: 'mofulunches-app',
    title: 'Mofu Lunches App',
    description: 'Mobile app for Mofu Lunches built with Ionic.',
    tags: [
      styleTag({ name: "Ionic" }),
      styleTag({ name: "Angular" })
    ],
    image: null,
  },
  {
    slug: 'firestore',
    title: 'Firestore',
    description: 'App built with Ionic and Firebase.',
    tags: [
      styleTag({ name: "Ionic" }),
      styleTag({ name: "Firebase" })
    ],
    image: null,
  },
];


function Projects() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold text-rose-700 mb-4 mt-12">Projects & Experiments</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my full-stack portfolio showcasing diverse projects built with modern technologies and best practices since 2022 to present.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.section
              key={project.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
            >
              <div className="h-56 bg-gray-100 flex items-center justify-center border-b border-gray-200">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                ) : (
                  <span className="text-gray-400 text-lg">No image available</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4 text-base flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{
                        backgroundColor: tag.color,
                        color: tag.textColor
                      }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-rose-700 text-white rounded-lg font-semibold shadow hover:bg-rose-800 transition hover:scale-105 transform duration-300 mt-auto w-fit mx-auto"
                >
                  View Details
                  <ChevronRight size={18} />
                </Link>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;