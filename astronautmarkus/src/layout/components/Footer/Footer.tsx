import AstronautMarkus from "../../../assets/img/astronautmarkus/AstronautMarkus-01.png";
import { Heart, ChevronUp } from "lucide-react";
import { useI18n } from "../../../context/i18n";
import { Link } from "react-router-dom";

import AstronautMarkusStand from "../../../assets/img/astronautmarkus/markus-stand.png";
import AstronautMarkusGreet from "../../../assets/img/astronautmarkus/markus-greet.png";
import { useState } from "react";

function Footer() {

    const { t } = useI18n();
    const year = new Date().getFullYear();
    const [isGreet, setIsGreet] = useState(false);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#101014] px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-visible">
            <div
                className="hidden md:block absolute -top-48 right-10 z-20 transition-all"
                style={{ pointerEvents: "auto" }}
                onMouseEnter={() => setIsGreet(true)}
                onMouseLeave={() => setIsGreet(false)}
            >
                <img
                    src={isGreet ? AstronautMarkusGreet : AstronautMarkusStand}
                    alt="Astronaut Markus Stand"
                    className="h-56 drop-shadow-xl select-none transition-all duration-200"
                    draggable={false}
                />
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-[#23232b] text-gray-400">
                <div>
                    <div className="flex items-center gap-2">
                        <img
                            className="h-16 md:h-24 pointer-events-none"
                            src={AstronautMarkus}
                            alt="AstronautMarkus"
                        />
                        <span className="md:text-xl text-base font-bold tracking-tight transition-colors text-gray-100 hover:text-rose-700 cursor-pointer">
                            AstronautMarkusDev
                        </span>
                    </div>
                    <p className="max-w-[410px] mt-6 text-gray-400">
                        {t("footer.description")}
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    <div>
                        <h3 className="font-semibold text-base text-gray-100 md:mb-5 mb-2">{t("footer.quick_links")}</h3>
                        <ul className="text-sm space-y-1">
                            <li><Link to="/" className="hover:underline hover:text-white transition text-gray-400">Home</Link></li>
                            <li><Link to="/about-me" className="hover:underline hover:text-white transition text-gray-400">About Me</Link></li>
                            <li><Link to="/projects" className="hover:underline hover:text-white transition text-gray-400">Projects</Link></li>
                            <li><Link to="/tech-stack" className="hover:underline hover:text-white transition text-gray-400">Tech Stack</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-white transition text-gray-400">Contact</Link></li>
                            <li><Link to="/gallery" className="hover:underline hover:text-white transition text-gray-400">Gallery</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base text-gray-100 md:mb-5 mb-2">{t("footer.business_pages")}</h3>
                        <ul className="text-sm space-y-1">
                            <li><a href="https://reyesandfriends.cl" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition text-gray-400">Reyes&Friends</a></li>
                            <li><a href="https://reyeshosting.cl" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition text-gray-400">ReyesHosting</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-auto flex justify-end mt-6 md:mt-0">
                    <button
                        onClick={handleBackToTop}
                        className="bg-rose-700 hover:bg-rose-800 text-white font-semibold py-2 px-4 rounded-full transition cursor-pointer"
                    >
                        <ChevronUp className="inline-block w-4 h-4 mr-2" />
                        {t("footer.back_to_top")}
                    </button>
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright {year} © AstronautMarkusDev {t("footer.rights")} | {t("footer.made_with")} <Heart className="inline-block w-4 h-4 text-rose-700" /> {t("footer.by")} Marcos Reyes
            </p>
        </footer>
    );
}

export default Footer;
