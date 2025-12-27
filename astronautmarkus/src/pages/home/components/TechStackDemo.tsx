import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "../../../context/i18n";

const techCategories = [
    {
        category: "Main Stack",
        techs: [
            { name: 'Laravel', icon: 'devicon-laravel-plain', color: 'bg-[#FF2D20]' },
            { name: 'React', icon: 'devicon-react-original', color: 'bg-[#61DAFB]' },
            { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain', color: 'bg-[#06B6D4]' },
            { name: 'MariaDB', icon: 'devicon-mariadb-plain', color: 'bg-[#003545]' },
            { name: 'Docker', icon: 'devicon-docker-plain', color: 'bg-[#2496ED]' },
            { name: 'Nginx', icon: 'devicon-nginx-original', color: 'bg-[#009639]' },
            { name: 'Apache', icon: 'devicon-apache-plain', color: 'bg-[#D22128]' },
            { name: 'Linux', icon: 'devicon-linux-plain', color: 'bg-[#FCC624]' },
        ]
    }
];

function TechStackDemo() {
    const displayedCategories = techCategories;

    const { t } = useI18n();

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-rose-700 mb-4">{t("home.techStack")}</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t("home.tech_stack_description")}
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {displayedCategories.map((cat, catIdx) => (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + catIdx * 0.2 }}
                            >
                                <h3 className="text-2xl font-semibold text-rose-700 mb-6 text-center">{cat.category}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {cat.techs.map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className={`w-12 h-12 ${tech.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl`}>
                                                <i className={`${tech.icon} text-3xl`} />
                                            </div>
                                            <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 mt-10 mb-10">...{t("home.and_many_more_technologies")}</p>
                    <div className="flex justify-center">
                        <Link
                            to="/tech-stack"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-rose-700 text-white rounded-lg font-semibold shadow-lg hover:bg-rose-800 transition hover:scale-105 transform duration-300"
                            rel="noopener noreferrer"
                        >
                            <Code size={20} />
                            {t("home.explore_full_tech_stack")}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TechStackDemo;