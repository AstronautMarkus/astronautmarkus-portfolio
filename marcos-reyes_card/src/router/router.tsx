import { Routes, Route, Navigate } from 'react-router-dom'
import LayoutApp from '../layouts/layoutApp'
import Home from '../pages/home'

function Router() {
    return (
        <Routes>
            <Route element={<LayoutApp />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default Router
