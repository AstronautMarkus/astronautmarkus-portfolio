import TechStack from "./components/TechStack";
import { motion } from "framer-motion";
import SeoHelmet from "../../utils/SeoHelmet";
import { useI18n } from "../../context/i18n";

function TechStackView() {

    const { t } = useI18n();

    return (
        <>
            <SeoHelmet
                title="Tech Stack - AstronautMarkusDev"
                description="Explore the diverse technologies and tools that Marcos Reyes utilizes in his development projects, showcasing his adaptability and expertise across various tech stacks."
                keywords="AstronautMarkusDev, Marcos Reyes, Fullstack Developer, Systems Administrator, Portfolio, Projects, Blog, Tech Stack, Technologies, Tools"
            />
            <section className="min-h-screen flex flex-col items-center justify-center py-16 mt-12 px-4 bg-white">

                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-rose-700 mb-4">{t("tech-stack.title")}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t("tech-stack.description")}
                    </p>
                </motion.div>

                <TechStack />
            </section>
        </>
    );
}

export default TechStackView;