import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useI18n } from "../../contexts/i18nContext";
import Banner404 from "../../assets/img/banners/404_banner.jpg";
import Sad from "../../assets/img/animated/sad.gif"

function NotFound() {
    const { t } = useI18n();

    function getActualRoute() {
        return window.location.href;
    }

    const actualRoute = getActualRoute();

    return (
        <div className="min-h-screen p-4">
            <div className="w-full max-w-6xl mx-auto space-y-8">

                <div className="hidden md:block">
                    <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                        <img
                            src={Banner404}
                            alt="404 Banner"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                        <div className="relative z-10 flex flex-col items-center justify-center w-full">
                            <div className="text-center">
                                <h1 className="text-6xl font-extrabold text-white mb-2">
                                    {actualRoute.length > 40
                                        ? `${actualRoute.slice(0, 37)}...`
                                        : actualRoute} = 404
                                </h1>
                                <p className="text-2xl text-gray-200 font-semibold">{t("not-found.banner-title")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                    <div className="relative h-32 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
                        <img
                            src={Banner404}
                            alt="404 Banner"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                        <div className="relative z-10 flex flex-col items-center justify-center w-full">
                            <h1 className="text-xl font-bold text-white mb-1 text-center">{actualRoute.length > 40
                                ? `${actualRoute.slice(0, 37)}...`
                                : actualRoute} = 404</h1>
                            <p className="text-sm text-gray-200 font-medium">{t("not-found.banner-title")}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                    <div className="text-center space-y-6">

                        <div className="flex justify-center mb-6">
                            <img
                                src={Sad}
                                alt="Sad anime gif"
                                className="w-64 object-contain pointer-events-none rounded-lg shadow-lg"
                            />
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4">{t("not-found.title")}</h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                            {t("not-found.description")}
                        </p>

                        <div className="bg-gray-800/50 rounded-lg p-6 max-w-md mx-auto">

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-lg transition-all font-medium"
                                >
                                    <Home size={18} />
                                    {t("not-found.home-button")}
                                </Link>

                                <button
                                    onClick={() => window.history.back()}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all font-medium"
                                >
                                    <ArrowLeft size={18} />
                                    {t("not-found.back-button")}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm">
                            Si crees que esto es un error, puedes contactarme a través de mis redes sociales.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NotFound;
