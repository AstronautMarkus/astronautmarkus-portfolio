import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';

import Home from '../pages/home/home';
import AboutMe from '../pages/about-me/about-me';
import TechStackView from '../pages/tech-stack/tech-stack';

const Router = () => {
    return (
        <BrowserRouter>
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