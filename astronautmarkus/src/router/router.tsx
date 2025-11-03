import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';

import Home from '../pages/home/home';
import AboutMe from '../pages/about-me/about-me';
import TechStackView from '../pages/tech-stack/tech-stack';
import React from 'react';

function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<LayoutApp />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/tech-stack" element={<TechStackView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;