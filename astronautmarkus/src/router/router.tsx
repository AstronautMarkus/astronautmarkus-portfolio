import { Routes, Route, Navigate } from 'react-router-dom'
import LayoutApp from '../layouts/layoutApp'
import Home from '../pages/home'

function Router() {
    return (
        <Routes>
            <Route element={<LayoutApp />}>r
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<div>Portfolio Page</div>} />
                <Route path="/experience" element={<div>Experience Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/extras" element={<div>Extras Page</div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default Router
