import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram, BookOpen } from "lucide-react";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/astronautmarkus",
        icon: Github,
        hover: "hover:bg-gray-800 hover:text-white",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/markusreyes",
        icon: Linkedin,
        hover: "hover:bg-blue-600 hover:text-white",
    },
    {
        name: "X",
        url: "https://x.com/astronautmarkus",
        icon: Twitter,
        hover: "hover:bg-black hover:text-white",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/astronautmarkusdev",
        icon: Instagram,
        hover: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
    },
    {
        name: "Email",
        url: "mailto:marcos@reyesandfriends.cl",
        icon: Mail,
        hover: "hover:bg-cyan-700 hover:text-white",
    },
    {
        name: "Blog",
        url: "https://blog.astronautmarkus.dev",
        icon: BookOpen,
        hover: "hover:bg-rose-700 hover:text-white",
    }
];

function Contact() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white">
            <motion.h1
                className="text-4xl font-bold text-rose-700 mb-12 mt-12 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0 }}
            >
                Contact Me
            </motion.h1>

            <motion.div
                className="max-w-2xl w-full mx-auto flex flex-col items-center justify-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                    Let's connect! You can reach me through any of the platforms below. I'm always open to new opportunities, collaborations, or just a friendly chat.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full max-w-2xl justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                {socialLinks.map((link) => (
                    <div key={link.name} className="flex justify-center">
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col items-center w-32 h-32 justify-center transition duration-300 hover:scale-105 ${link.hover}`}
                        >
                            <link.icon size={36} />
                            <span className="mt-3 font-semibold text-base text-gray-800 group-hover:text-white">{link.name}</span>
                        </a>
                    </div>
                ))}
            </motion.div>

        </section>
    );
}

export default Contact;