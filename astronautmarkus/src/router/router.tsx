import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';
import Home from '../pages/Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutApp />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;