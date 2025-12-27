import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { useI18n } from "../../../context/i18n";

import MultiStockSync from "../../../assets/img/projects/multi-stock-sync.png";
import MofuLunchesWeb from "../../../assets/img/projects/mofu-lunches-web.jpg";
import TurnoMaster from "../../../assets/img/projects/turnomaster.png";

type Tag = {
  name: string;
  color: string;
  textColor?: string;
};

type Project = {
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: Tag[];
  slug: string;
};

const projects: Project[] = [
  {
    titleKey: "home.project_multi_stock_sync_title",
    descriptionKey: "home.project_multi_stock_sync_description",
    image: MultiStockSync,
    tags: [
      { name: "React", color: "#61DAFB", textColor: "black" },
      { name: "Bootstrap", color: "#7952B3", textColor: "white" },
      { name: "Laravel", color: "#FF2D20", textColor: "white" },
      { name: "MySQL", color: "#4479A1", textColor: "white" },
      { name: "Chart.js", color: "#FF6384", textColor: "black" },
      { name: "Axios", color: "#5A29E4", textColor: "white" }
    ],
    slug: "multi-stock-sync",
  },
  {
    titleKey: "home.project_mofu_lunches_web_title",
    descriptionKey: "home.project_mofu_lunches_web_description",
    image: MofuLunchesWeb,
    tags: [
      { name: "Flask", color: "#151515ff", textColor: "white" },
      { name: "Bootstrap", color: "#7952B3", textColor: "white" },
      { name: "MongoDB", color: "#47A248", textColor: "white" }
    ],
    slug: "mofu-lunches-web",
  },
  {
    titleKey: "home.project_turnomaster_title",
    descriptionKey: "home.project_turnomaster_description",
    image: TurnoMaster,
    tags: [
      { name: "React", color: "#61DAFB", textColor: "black" },
      { name: "TailwindCSS", color: "#06B6D4", textColor: "white" },
      { name: "Laravel", color: "#FF2D20", textColor: "white" },
      { name: "MySQL", color: "#4479A1", textColor: "white" },
      { name: "Chart.js", color: "#FF6384", textColor: "black" },
      { name: "Axios", color: "#5A29E4", textColor: "white" }
    ],
    slug: "turnomaster",
  },
];

const FeaturedProjects: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-4xl font-bold text-[#a084ee] mb-2">{t('home.featured_projects')}</h2>
          <p className="text-lg text-[#eaddff] max-w-2xl mx-auto">
            {t('home.featured_projects_description')}
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
              className="rounded-xl border-2 border-[#a084ee] bg-gradient-to-br from-[#251a3a]/70 to-[#1e1b3a]/80 shadow-lg p-7
                hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
            >
              <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center border-2 border-[#a084ee] mb-6 rounded-lg overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                ) : null}
              </div>
              <h3 className="text-xl font-bold text-[#a084ee] mb-4">{t(project.titleKey)}</h3>
              <p className="text-[#eaddff] mb-4">{t(project.descriptionKey)}</p>
              <ul className="list-disc ml-6 text-[#eaddff] space-y-2">
                {project.tags.map((tag) => (
                  <li key={tag.name} className="text-base">{tag.name}</li>
                ))}
              </ul>
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-full font-semibold shadow-lg hover:bg-purple-800 transition hover:scale-105 transform duration-300"
          >
            <Code size={20} />
            {t('home.view_all_projects')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
