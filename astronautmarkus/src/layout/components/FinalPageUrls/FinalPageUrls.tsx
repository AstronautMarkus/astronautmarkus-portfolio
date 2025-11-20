import AstronautMarkus from "../../../assets/img/astronautmarkus/AstronautMarkus-01.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FinalPageUrls() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 text-center items-center justify-center">
                <motion.img
                    src={AstronautMarkus}
                    alt="AstronautMarkus"
                    className="mx-auto mb-4 h-24 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.h1
                    className="text-2xl font-bold text-rose-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    AstronautMarkus.dev
                </motion.h1>
            </div>
            <div className="container mx-auto px-4 sm:px-6 mt-8 flex flex-col items-center">
                <motion.nav
                    className="flex flex-wrap gap-6 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <Link to="/" className="text-rose-700 hover:underline font-medium">Home</Link>
                    <Link to="/about-me" className="text-rose-700 hover:underline font-medium">About Me</Link>
                    <Link to="/projects" className="text-rose-700 hover:underline font-medium">Projects</Link>
                    <Link to="/tech-stack" className="text-rose-700 hover:underline font-medium">Tech Stack</Link>
                    <Link to="/contact" className="text-rose-700 hover:underline font-medium">Contact</Link>
                    <Link to="/gallery" className="text-rose-700 hover:underline font-medium">Gallery</Link>
                </motion.nav>
            </div>
            <blockquote className="mt-12 text-center text-lg italic text-gray-500 max-w-xl mx-auto border-l-4 border-rose-700 pl-4 w-[95%]">
               "Why don't you just fix your little problem and light this candle?" – Alan Shepard
            </blockquote>
        </section>
    )
}

export default FinalPageUrls;