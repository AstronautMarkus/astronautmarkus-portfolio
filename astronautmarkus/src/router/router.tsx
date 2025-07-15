import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import LayoutApp from '../layouts/layoutApp'

import Home from '../pages/home/home'
import Portfolio from '../pages/portfolio/portfolio'
import Contact from '../pages/contact/contact'
import Experience from '../pages/experience/experience'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

import { easeInOut } from 'framer-motion'

const pageTransition = {
  duration: 0.4,
  ease: [easeInOut],
}

function Router() {
  const location = useLocation()

  return (
    <LayoutApp>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                style={{ height: '100%' }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                style={{ height: '100%' }}
              >
                <Portfolio />
              </motion.div>
            }
          />
          <Route
            path="/experience"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                style={{ height: '100%' }}
              >
                <Experience />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                style={{ height: '100%' }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/extras"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                style={{ height: '100%' }}
              >
                <div>Extras Page</div>
              </motion.div>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </LayoutApp>
  )
}

export default Router
