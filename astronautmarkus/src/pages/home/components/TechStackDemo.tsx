import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Link } from "react-router-dom";

const techCategories = [
    {
        category: "Main Stack",
        techs: [
            { name: 'Laravel', icon: 'devicon-laravel-plain', color: 'bg-[#FF2D20]' },
            { name: 'React', icon: 'devicon-react-original', color: 'bg-[#61DAFB]' },
            { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain', color: 'bg-[#06B6D4]' },
            { name: 'Flask', icon: 'devicon-flask-original', color: 'bg-[#000000]' },
            { name: 'MariaDB', icon: 'devicon-mariadb-plain', color: 'bg-[#003545]' },
            { name: 'Docker', icon: 'devicon-docker-plain', color: 'bg-[#2496ED]' },
            { name: 'Axios', icon: 'devicon-axios-plain', color: 'bg-[#5A29E4]' },
            { name: 'Astro', icon: 'devicon-astro-plain', color: 'bg-[#181923]' },
            { name: 'SQLAlchemy', icon: 'devicon-sqlalchemy-plain', color: 'bg-[#E3B23C]' },
        ]
    }
];

function TechStackDemo() {
    const displayedCategories = techCategories;

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
                        <h2 className="text-3xl lg:text-4xl font-bold text-rose-700 mb-4">Technologies I Use</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Throughout my career, I've worked with diverse technologies and tools that have enabled me to develop projects efficiently and effectively. I'm always exploring new tools and approaches to enhance my workflow, while maintaining solid expertise in these core technologies that form the foundation of my development stack.
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

                    <p className="text-center text-gray-600 mt-10 mb-10">...and many more technologies in my <strong>Full Tech Stack!</strong></p>
                    <div className="flex justify-center">
                        <Link
                            to="/tech-stack"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-rose-700 text-white rounded-lg font-semibold shadow-lg hover:bg-rose-800 transition hover:scale-105 transform duration-300"
                            rel="noopener noreferrer"
                        >
                            <Code size={20} />
                            View Full Tech Stack
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TechStackDemo;