import { motion } from "framer-motion";
import { useI18n } from "../../../context/i18n";

function EventSchedule() {

    const { t } = useI18n();

    const events = [
        { date: "2022-03-10" },
        { date: "2024-04-05" },
        { date: "2025-06-01" },
        { date: "2025-06-17" },
        { date: "2025-07-01" },
    ];

    return (
        <div className="bg-[#251a3a] border-4 border-[#a084ee] rounded-2xl p-8 w-full flex flex-col gap-8 shadow-2xl hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform">
            <motion.h2
                className="text-2xl font-bold text-[#a084ee] mb-4 mt-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
                Event Schedule
            </motion.h2>
            <div className="relative w-full max-w-5xl">
                <div className="absolute left-6 top-0 h-full w-1 bg-purple-700"></div>
                <ul className="space-y-8 pt-4">
                    {events.map((event, idx) => {
                        const title = t(`about-me.events.${event.date}.title`);
                        const description = t(`about-me.events.${event.date}.description`);
                        return (
                            <motion.li
                                key={event.date}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + idx * 0.2 }}
                                className="relative flex items-start"
                            >
                                <span className="z-10 mt-1 w-4 h-4 rounded-full bg-purple-700 border-2 border-white absolute left-4"></span>
                                <div className="ml-12">
                                    <div className="text-xs text-purple-700 font-semibold">{event.date}</div>
                                    <div className="text-lg font-bold text-purple-700">{title}</div>
                                    <div className="text-sm text-white">{description}</div>
                                </div>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default EventSchedule;