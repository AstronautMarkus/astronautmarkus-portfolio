import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';

import Home from '../pages/home/home';
import AboutMe from '../pages/about-me/about-me';
import TechStackView from '../pages/tech-stack/tech-stack';
import Contact from '../pages/contact/contact';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    const [pendingScroll, setPendingScroll] = React.useState(false);

    React.useEffect(() => {
        if (pendingScroll) {
            window.scrollTo(0, 0);
            setPendingScroll(false);
        }
    }, [pendingScroll]);

    return (
        <AnimatePresence
            mode="wait"
            onExitComplete={() => setPendingScroll(true)}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                key={location.pathname}
            >
                <Routes location={location}>
                    <Route element={<LayoutApp />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/tech-stack" element={<TechStackView />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

const Router = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
};

export default Router;