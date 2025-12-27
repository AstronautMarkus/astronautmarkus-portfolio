import { motion } from "framer-motion";
import { Shield, Globe, Database, Layers, Wand2, LayoutList } from "lucide-react";

import { useI18n } from "../../../context/i18n";

function SkillsArsenal() {

const { t } = useI18n();

const skillCategories = [
    {
        category: t("home.skills_arsenal.skills.frontend"),
        icon: <LayoutList className="inline-block mr-2 text-[#a084ee]" size={22} />,
        techs: [
            "React",
            "Vue.js",
            "TypeScript",
            "Tailwind CSS",
            "Sass",
            "BulmaCSS",
        ]
    },
    {
        category: t("home.skills_arsenal.skills.backend"),
        icon: <Shield className="inline-block mr-2 text-[#a084ee]" size={22} />,
        techs: [
            "Laravel",
            "Flask",
            "Django",
            "FastAPI"
        ]
    },
    {
        category: t("home.skills_arsenal.skills.devops"),
        icon: <Wand2 className="inline-block mr-2 text-[#a084ee]" size={22} />,
        techs: [
            "Docker",
            "CI/CD",
            "AWS",
            "Git",
            "Nginx",
            "Apache",
            "Linux",
            "Fortinet",
            "Jenkins"
        ]
    },
    {
        category: t("home.skills_arsenal.skills.DBMS"),
        icon: <Database className="inline-block mr-2 text-[#a084ee]" size={22} />,
        techs: [
            "MySQL",
            "MariaDB",
            "MongoDB",
            "SQLite",
            "Cassandra",
        ]
    },
    {
        category: t("home.skills_arsenal.skills.apis.title"),
        icon: <Globe className="inline-block mr-2 text-[#a084ee]" size={22} />,
        techs: [
            "REST",
            "WebSockets",
            "GraphQL",
            t("home.skills_arsenal.skills.apis.public_implementation"),
            t("home.skills_arsenal.skills.apis.payment_gateways"),
            "OAuth2",
            "JWT",
            "Middlewares"
        ]
    },
    {
        category: t("home.skills_arsenal.skills.architecture.title"),
        icon: <Layers className="inline-block mr-2 text-[#a084ee]" size={22} />,
        techs: [
            t("home.skills_arsenal.skills.architecture.monolith"),
            "SOA",
            t("home.skills_arsenal.skills.architecture.microservices"),
            "MVC",
            t("home.skills_arsenal.skills.architecture.clean_architecture")
        ]
    }
];


    return (
        <section className="py-16 bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B]">
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
                        <h2 className="text-4xl font-bold text-[#a084ee] mb-2">{t("home.skills_arsenal.title")}</h2>
                        <p className="text-lg text-[#eaddff] max-w-3xl mx-auto leading-relaxed">
                            {t("home.skills_arsenal.description")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.category}
                                className="rounded-xl border-2 border-[#a084ee] bg-gradient-to-br from-[#251a3a]/70 to-[#1e1b3a]/80 shadow-lg p-7
                                    hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                            >
                                <h3 className="text-xl font-bold text-[#a084ee] mb-4 flex items-center">
                                    {cat.icon}
                                    <span className="text-[#a084ee]">{cat.category}</span>
                                </h3>
                                <ul className="list-disc ml-6 text-[#eaddff] space-y-2">
                                    {cat.techs.map(tech => (
                                        <li key={tech} className="text-base">{tech}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsArsenal;