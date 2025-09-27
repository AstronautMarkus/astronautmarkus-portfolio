import { useGetPortfolioProjects } from "./hooks/useGetPortfolioProjects";
import { Github, Lock } from "lucide-react";
import TuxPenguin from "../../assets/img/animated/tux-linux-penguin.gif";
import PortfolioBannerCard from "../../assets/img/banners/portfolio_banner.jpg";
import Nope from "../../assets/img/animated/nope.gif";
import { useI18n } from "../../contexts/i18nContext";
import { Link } from "react-router-dom";

function Portfolio() {
  const { projects, categories } = useGetPortfolioProjects();
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-4">
      <div className="w-full max-w-6xl mx-auto space-y-8">

        <div className="hidden md:block">
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={PortfolioBannerCard}
              alt="PortfolioBanner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className="flex items-center gap-8 justify-center">
                <div className="text-center">
                  <h1 className="text-5xl font-extrabold text-white mb-2">{t("portfolio.banner_title")}</h1>
                  <p className="text-2xl text-gray-200 font-semibold">{t("portfolio.banner_subtitle")}</p>
                </div>
                <img
                  src={TuxPenguin}
                  alt="Tux Linux Penguin"
                  className="w-24 h-24 object-contain drop-shadow-lg pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative h-32 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
            <img
              src={PortfolioBannerCard}
              alt="PortfolioBanner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <h1 className="text-xl font-bold text-white mb-1 text-center">{t("portfolio.banner_title")}</h1>
              <p className="text-sm text-gray-200 font-medium text-center">{t("portfolio.banner_subtitle")}</p>
            </div>
            <img
              src={TuxPenguin}
              alt="Tux Linux Penguin"
              className="absolute bottom-2 right-2 w-12 h-12 object-contain drop-shadow-lg pointer-events-none"
            />
          </div>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-4">
            {t("portfolio.banner_info")}
          </p>
          <p className="text-gray-400 text-center mb-6">
            {t("portfolio.banner_info_note")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-gray-900/40 rounded-lg p-4 shadow-inner max-w-md mx-auto">
            <img
              src="https://github.com/astronautmarkus.png"
              alt="astronautmarkus avatar"
              className="w-16 h-16 rounded-full border-2 border-rose-700 shadow pointer-events-none"
            />
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-white font-semibold text-lg flex items-center gap-2">
                <Github size={20} />
                AstronautMarkus
              </span>
              <Link
                to="https://github.com/astronautmarkus"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block px-4 py-1 bg-rose-700 hover:bg-rose-800 text-white rounded transition-all text-sm font-medium"
              >
                {t("portfolio.github_profile")}
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {categories.map(category => (
            <div key={category.slug} className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-2 text-white">{category.title}</h2>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.filter(p => p.categorySlug === category.slug).map(proyecto => (
                  <div key={proyecto.slug} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70 relative flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2 text-center text-white">{proyecto.title}</h3>
                    {proyecto.imageUrl ? (
                      <img
                        src={proyecto.imageUrl}
                        alt={proyecto.title}
                        className="w-full h-32 object-cover rounded-lg mb-4 pointer-events-none"
                      />
                    ) : (
                        <div
                        className="w-32 h-32 bg-gray-800 flex items-center justify-center rounded-lg mb-4 group relative"
                        >
                        <img
                          src={Nope}
                          alt="No image available"
                          className="w-24 h-24 object-contain pointer-events-none"
                        />
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap mt-1 shadow-lg z-20">
                          {t("utils.no-image")}
                        </span>
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
                        <span
                          title="Repositorio privado"
                          className="flex items-center gap-1 text-gray-400 text-sm relative group"
                        >
                          <Lock size={20} />
                          {t("portfolio.private_repo")}
                          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-20">
                            {t("portfolio.private_repo_real")}
                          </span>
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
                            {t("portfolio.view_repository")}
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
    </div>
  )
}

export default Portfolio