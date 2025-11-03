import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';

import Home from '../pages/home/home';
import AboutMe from '../pages/about-me/about-me';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutApp />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;