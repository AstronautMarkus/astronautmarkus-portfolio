import { motion } from "framer-motion";
import { ChevronRight, LockIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n } from "../../context/i18n";
import SeoHelmet from "../../utils/SeoHelmet";
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
import ESP8266Labs from "../../assets/img/projects/esp8266-labs.png";
import ReyesAndFriendsApp from "../../assets/img/projects/reyesandfriends-app.jpg";

import Background from "../../assets/img/background.jpg";
import AstronautMarkus from "../../assets/img/astronautmarkus/AstronautMarkus-03.png";

type Tag = {
  name: string;
};

type Project = {
  title: string;
  description: string;
  image: string | null;
  tags: Tag[];
  slug: string;
  year: string | number;
  githubUrl?: string | null;
};

const projectsMeta: Omit<Project, "title" | "description" | "year">[] = [
  {
    slug: 'esp8266-labs',
    image: ESP8266Labs,
    tags: [{ name: "Arduino" }, { name: "C++" }],
    githubUrl: 'https://github.com/AstronautMarkus/ESP8266-Labs',
  },
  {
    slug: 'turnomaster',
    image: TurnoMaster,
    tags: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Laravel" },
      { name: "MySQL" },
      { name: "Chart.js" },
      { name: "Axios" }
    ],
  },
  {
    slug: 'fumoindex',
    image: FumoIndex,
    tags: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Laravel" },
      { name: "MySQL" },
      { name: "Tailwind CSS" }
    ],
    githubUrl: 'https://github.com/astronautmarkus/fumoindex',
  },
  {
    slug: 'abbybot-project',
    image: AbbyBotProject,
    tags: [
      { name: "Discord.py" },
      { name: "Python" },
      { name: "MySQL" }
    ],
    githubUrl: 'https://github.com/AbbyBot/Discord-AbbyBot',
  },
  {
    slug: 'blog-astronautmarkus',
    image: BlogAstronautMarkus,
    tags: [
      { name: "Laravel" },
      { name: "Blade" },
      { name: "Tailwind CSS" },
      { name: "MySQL" },
      { name: "PHP" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/blog.astronautmarkus.dev',
  },
  {
    slug: 'abbybot-project-website',
    image: AbbyBotProjectWebsite,
    tags: [
      { name: "Flask" },
      { name: "Python" },
      { name: "Bootstrap" },
      { name: "MySQL" },
      { name: "Gunicorn" },
      { name: "Docker" }
    ],
    githubUrl: 'https://github.com/AbbyBot/AbbyBot-Website',
  },
  {
    slug: 'multi-stock-sync',
    image: MultiStockSync,
    tags: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Bootstrap" },
      { name: "Chart.js" },
      { name: "Axios" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/Multi-Stock-Sync',
  },
  {
    slug: 'multi-stock-sync-back',
    image: MultiStockSyncBack,
    tags: [
      { name: "Laravel" },
      { name: "Sanctum" },
      { name: "MySQL" },
      { name: "PHP" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/Multi-Stock-Sync-Back',
  },
  {
    slug: 'multi-stock-sync-api-viewer',
    image: MultiStockSyncApiViewer,
    tags: [
      { name: "Laravel" },
      { name: "Swagger" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/Multi-Stock-API-Viewer',
  },
  {
    slug: 'mofustore',
    image: MofuStore,
    tags: [
      { name: "Python" },
      { name: "Django" },
      { name: "Bootstrap" },
      { name: "MySQL" }
    ],
  },
  {
    slug: 'camellosfood-repartidor',
    image: CamellosFoodRepartidor,
    tags: [
      { name: "Ionic" },
      { name: "Angular" },
      { name: "Django" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/CamellosFood-Repartidor-3.0',
  },
  {
    slug: 'constru-mic',
    image: ConstruMic,
    tags: [
      { name: "Django" },
      { name: "Bootstrap" },
      { name: "MySQL" }
    ],
    githubUrl: 'https://github.com/MarcosKingsDuoc/CONSTRU_MIC',
  },
  {
    slug: 'mofulunches-web',
    image: MofuLunchesWeb,
    tags: [
      { name: "Flask" },
      { name: "Bootstrap" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-Web',
  },
  {
    slug: 'mofulunches-api',
    image: MofuLunchesApi,
    tags: [
      { name: "Python" },
      { name: "Flask" },
      { name: "MongoDB" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-API',
  },
  {
    slug: 'mofulunches-totem',
    image: MofuLunchesTotem,
    tags: [
      { name: "Electron" },
      { name: "Arduino" },
      { name: "React" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-Totem',
  },
  {
    slug: 'mofulunches-eldimon',
    image: MofuLunchesElDimon,
    tags: [
      { name: "Arduino" },
      { name: "C++" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-ElDimon',
  },
  {
    slug: 'mofulunches-listener',
    image: MofuLunchesElDimonListener,
    tags: [
      { name: "Python" },
      { name: "PyQt5" }
    ],
    githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-ElDimon_Listener',
  },
  {
    slug: 'reyesandfriends-app',
    image: ReyesAndFriendsApp,
    tags: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Flask" },
      { name: "Docker" },
      { name: "MySQL" }
    ],
    githubUrl: 'https://github.com/reyesandfriends/reyesandfriends-app',
  }
];


function Projects() {
  const { t } = useI18n();

  const fullText = t("projects.title");
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;
    let cursorInterval: ReturnType<typeof setInterval>;

    if (typedText.length < fullText.length) {
      typingTimeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 90);
    } else {
      cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, [typedText, fullText]);

  useEffect(() => {
    setTypedText("");
    setShowCursor(true);
  }, [fullText]);

  // Merge meta with translations
  const projects = projectsMeta.map(meta => ({
    ...meta,
    title: t(`projects.items.${meta.slug}.title`),
    description: t(`projects.items.${meta.slug}.description`),
    year: t(`projects.items.${meta.slug}.year`),
  }));

  return (
    <>
      <SeoHelmet
        title={t("projects.seo_title")}
        description={t("projects.seo_description")}
        keywords={t("projects.seo_keywords")}
      />

        <section className="relative min-h-screen flex justify-center pt-32">
                <img
                    src={Background}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none z-10" />

                <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full mb-10 md:mb-16">

                        <motion.div
                            className="order-1 md:order-1 flex flex-col items-center justify-center w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative flex justify-center md:justify-end w-full">
                                <img
                                    src={AstronautMarkus}
                                    alt="AstronautMarkus"
                                    className="w-60 h-60 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] pointer-events-none bg-transparent drop-shadow-2xl"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-2 md:order-2 flex flex-col justify-center items-center md:items-start text-center md:text-left w-full"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <motion.h1
                                className="flex flex-col items-center md:items-start gap-2 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-5 md:mb-8 mt-4 sm:mt-6 drop-shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <span>
                                    {typedText}
                                    <span
                                        style={{
                                            opacity: showCursor ? 1 : 0,
                                            transition: "opacity 0.2s",
                                            color: "#9e28deff",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        |
                                    </span>
                                </span>
                            </motion.h1>
                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-white/80 max-w-md sm:max-w-xl mb-6 md:mb-8 drop-shadow"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                {t('projects.description')}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
          </section>

      <div className="bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B]">
        <div className="container mx-auto px-4 sm:px-6 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={project.slug}
                className="rounded-xl border-2 border-[#a084ee] bg-gradient-to-br from-[#251a3a]/70 to-[#1e1b3a]/80 shadow-lg p-7 flex flex-col hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center border-2 border-[#a084ee] mb-4 rounded-lg overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  ) : (
                    <span className="text-gray-400 text-lg">{t("projects.no_image")}</span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-[#a084ee] mb-2">{project.title} <span className="text-[#eaddff] font-normal">({project.year})</span></h2>
                <p className="text-[#eaddff] mb-4 text-base flex-1">{project.description}</p>
                <ul className="list-disc ml-6 text-[#eaddff] space-y-1 mb-4">
                  {project.tags.map((tag) => (
                    <li key={tag.name} className="text-base">{tag.name}</li>
                  ))}
                </ul>
                {project.githubUrl ? (
                    <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-full font-semibold shadow-lg hover:bg-purple-800 transition hover:scale-105 transform duration-300 mt-4 mx-auto justify-center"
                    >
                    {t("projects.view_details")}
                    <ChevronRight size={18} />
                    </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-300 text-gray-500 rounded-full font-semibold shadow mt-4 mx-auto cursor-not-allowed"
                  >
                    {t("projects.private_repo")}
                    <LockIcon size={18} />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;