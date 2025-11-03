import { motion } from "framer-motion";

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
    },
    {
        category: "Languages",
        techs: [
            { name: 'Python', icon: 'devicon-python-plain', color: 'bg-[#3776AB]' },
            { name: 'PHP', icon: 'devicon-php-plain', color: 'bg-[#777BB4]' },
            { name: 'HTML', icon: 'devicon-html5-plain', color: 'bg-[#E34F26]' },
            { name: 'CSS', icon: 'devicon-css3-plain', color: 'bg-[#1572B6]' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain', color: 'bg-[#3178C6]' },
            { name: 'SQL', icon: 'devicon-mysql-plain', color: 'bg-[#4479A1]' },
            { name: 'Bash', icon: 'devicon-bash-plain', color: 'bg-[#4EAA25]' },
            { name: 'Markdown', icon: 'devicon-markdown-original', color: 'bg-[#000000]' },
        ]
    },
    {
        category: "Frameworks & Libraries",
        techs: [
            { name: 'Laravel', icon: 'devicon-laravel-plain', color: 'bg-[#FF2D20]' },
            { name: 'Flask', icon: 'devicon-flask-original', color: 'bg-[#000000]' },
            { name: 'Django', icon: 'devicon-django-plain', color: 'bg-[#092E20]' },
            { name: 'FastAPI', icon: 'devicon-fastapi-plain', color: 'bg-[#009688]' },
            { name: 'React', icon: 'devicon-react-original', color: 'bg-[#61DAFB]' },
            { name: 'Vue', icon: 'devicon-vuejs-plain', color: 'bg-[#42B883]' },
            { name: 'Livewire', icon: 'devicon-livewire-plain', color: 'bg-[#4E56A6]' },
            { name: 'Astro', icon: 'devicon-astro-plain', color: 'bg-[#181923]' },
            { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain', color: 'bg-[#06B6D4]' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: 'bg-[#7952B3]' },
            { name: 'Bulma', icon: 'devicon-bulma-plain', color: 'bg-[#00D1B2]' },
            { name: 'DevIcons', icon: 'devicon-devicon-plain', color: 'bg-[#000000]' },
        ]
    },
    {
        category: "UI/UX & Design",
        techs: [
            { name: 'Figma', icon: 'devicon-figma-plain', color: 'bg-[#F24E1E]' },
            { name: 'Photoshop', icon: 'devicon-photoshop-plain', color: 'bg-[#31A8FF]' },
            { name: 'Gimp', icon: 'devicon-gimp-plain', color: 'bg-[#5C5543]' },
            { name: 'Canva', icon: 'devicon-canva-plain', color: 'bg-[#00C4CC]' },
        ]
    },
    {
        category: "Sysadmin & Tools",
        techs: [
            { name: 'Linux', icon: 'devicon-linux-plain', color: 'bg-[#FCC624]' },
            { name: 'Filezilla', icon: 'devicon-filezilla-plain', color: 'bg-[#D72A19]' },
            { name: 'Bash', icon: 'devicon-bash-plain', color: 'bg-[#4EAA25]' },
            { name: 'Nano', icon: 'devicon-nano-plain', color: 'bg-[#009688]' },
            { name: 'Debian', icon: 'devicon-debian-plain', color: 'bg-[#A80030]' },
            { name: 'Postman', icon: 'devicon-postman-plain', color: 'bg-[#FF6C37]' },
            { name: 'VSCode', icon: 'devicon-vscode-plain', color: 'bg-[#007ACC]' },
            { name: 'Git', icon: 'devicon-git-plain', color: 'bg-[#F05032]' },
        ]
    },
    {
        category: "DevOps",
        techs: [
            { name: 'Docker', icon: 'devicon-docker-plain', color: 'bg-[#2496ED]' },
            { name: 'GitHub Actions', icon: 'devicon-github-original', color: 'bg-[#24292F]' },
            { name: 'Jenkins', icon: 'devicon-jenkins-plain', color: 'bg-[#D24939]' },
            { name: 'Cloudflare', icon: 'devicon-cloudflare-plain', color: 'bg-[#F38020]' },
        ]
    },
    {
        category: "Databases",
        techs: [
            { name: 'MySQL', icon: 'devicon-mysql-plain', color: 'bg-[#4479A1]' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: 'bg-[#47A248]' },
            { name: 'Oracle', icon: 'devicon-oracle-original', color: 'bg-[#F80000]' },
            { name: 'MariaDB', icon: 'devicon-mariadb-plain', color: 'bg-[#003545]' },
            { name: 'Cassandra', icon: 'devicon-cassandra-plain', color: 'bg-[#1287B1]' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: 'bg-[#336791]' },
            { name: 'SQLite', icon: 'devicon-sqlite-plain', color: 'bg-[#003B57]' },
            { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', color: 'bg-[#CC2927]' },
        ]
    },
    {
        category: "Package Managers",
        techs: [
            { name: 'Composer', icon: 'devicon-composer-plain', color: 'bg-[#8A4F9E]' },
            { name: 'npm', icon: 'devicon-npm-plain', color: 'bg-[#CB3837]' },
            { name: 'Yarn', icon: 'devicon-yarn-plain', color: 'bg-[#2C8EBB]' },
            { name: 'Pip', icon: 'devicon-pypi-plain', color: 'bg-[#3776AB]' },
        ]
    }
];

type TechStackProps = {
    fullList?: boolean;
};

function TechStack({ fullList = false }: TechStackProps) {
    const displayedCategories = fullList ? techCategories : techCategories.slice(0, 1);

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
                                <h3 className="text-2xl font-semibold text-rose-600 mb-6 text-center">{cat.category}</h3>
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
                    {!fullList && (
                        <>
                            <p className="text-center text-gray-600 mt-10 mb-10">...and many more technologies in my <strong>Full Tech Stack!</strong></p>
                            <div className="flex justify-center">
                                
                                <a
                                    href="/tech-stack"
                                    className="px-6 py-3 bg-rose-700 text-white rounded-lg font-semibold shadow hover:bg-rose-800 transition transition hover:scale-105 transform duration-300"
                                >
                                    View Full Tech Stack
                                </a>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default TechStack;