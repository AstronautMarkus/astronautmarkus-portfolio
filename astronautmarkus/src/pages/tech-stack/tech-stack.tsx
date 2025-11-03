import TechStack from "./components/TechStack";
import { motion } from "framer-motion";

function TechStackView() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-16 mt-12 px-4 bg-white">

            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-rose-700 mb-4">My Tech Stack</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Throughout my journey as a developer, I've had the opportunity to work with a <strong>wide variety of technologies and tools</strong>. Many might say <em>"you have quite the attention deficit"</em> for learning so many things, but I say, well, there's nothing wrong with adapting to different stacks beyond your own. <span className="text-rose-600 font-medium">Of course, I have my favorites</span>. Below you'll find a summary of the technologies I feel most comfortable working with and use most frequently in my projects.
                </p>
            </motion.div>

            <TechStack />
        </section>
    );
}

export default TechStackView;