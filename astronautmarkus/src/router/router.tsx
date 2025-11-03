import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';

import Home from '../pages/home/home';
import AboutMe from '../pages/about-me/about-me';
import TechStackView from '../pages/tech-stack/tech-stack';
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
            <Routes location={location} key={location.pathname}>
                <Route element={<LayoutApp />}>
                    <Route
                        path="/"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Home />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/about-me"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <AboutMe />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/tech-stack"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <TechStackView />
                            </motion.div>
                        }
                    />
                </Route>
            </Routes>
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