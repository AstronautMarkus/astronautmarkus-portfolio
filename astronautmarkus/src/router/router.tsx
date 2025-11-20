import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';
import React from 'react';

import Home from '../pages/home/home';
import AboutMe from '../pages/about-me/about-me';
import TechStackView from '../pages/tech-stack/tech-stack';
import Contact from '../pages/contact/contact';
import Projects from '../pages/projects/projects';
import Gallery from '../pages/gallery/Gallery';

function AnimatedRoutes() {
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes location={location}>
            <Route element={<LayoutApp />}>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/tech-stack" element={<TechStackView />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
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