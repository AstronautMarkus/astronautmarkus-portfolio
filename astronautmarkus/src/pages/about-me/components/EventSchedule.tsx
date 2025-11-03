import { motion } from "framer-motion";

const events = [
    {
        date: "2022-03-10",
        title: "My first day at College",
        description: "150 BPM heartbeat and a lot of excitement. My first class was about the OSI model and databases, too much technical stuff for day 1 to be honest haha",
    },
    {
        date: "2024-04-05",
        title: "Marcos start to use GNU/Linux",
        description: "The best change I've ever made. I hate you, Windows, I hate you with all my being. Freedom is coming.",
    },
    {
        date: "2025-06-01",
        title: "Marcos builds a Network Rack",
        description: "With only ChatGPT and Reddit images, Marcos builds his first Network Rack at home. Using a 24U Linkmade rack, a Fortigate 60D, a 6 port gigabit switch and a HP Proliant DL360 G7 as server.",
    },
    {
        date: "2025-06-17",
        title: "Final portfolio presentation. Dev vs Senior Wolves",
        description: "Final battle, the lone wolf programmed vs. the wolves. Approved with 100% (no meme).",
    },
    {
        date: "2025-07-01",
        title: "Reyes&Friends begins",
        description: "The journey begins. A new era of content creation, tech reviews, and gaming videos starts now. Join us on this exciting adventure!",
    },
];

function EventSchedule() {
    return (
        <div className="flex flex-col items-center">
            <motion.h2
                className="text-2xl font-bold text-rose-700 mb-4 mt-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
                Event Schedule
            </motion.h2>
            <div className="relative w-full max-w-5xl">
                <div className="absolute left-6 top-0 h-full w-1 bg-rose-700"></div>
                <ul className="space-y-8 pt-4">
                    {events.map((event, idx) => (
                        <motion.li
                            key={event.date + event.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + idx * 0.2 }}
                            className="relative flex items-start"
                        >
                            <span className="z-10 mt-1 w-4 h-4 rounded-full bg-rose-700 border-2 border-white absolute left-4"></span>
                            <div className="ml-12">
                                <div className="text-xs text-rose-700 font-semibold">{event.date}</div>
                                <div className="text-lg font-bold text-rose-700">{event.title}</div>
                                <div className="text-sm text-gray-700">{event.description}</div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EventSchedule;