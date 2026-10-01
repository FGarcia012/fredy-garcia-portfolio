import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

// Each page is loaded only when the visitor opens it (code splitting)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Values = lazy(() => import('./pages/Values'))
const Mark = lazy(() => import('./pages/Mark'))
const Mci = lazy(() => import('./pages/Mci'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Cv = lazy(() => import('./pages/Cv'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="values" element={<Values />} />
        <Route path="mark" element={<Mark />} />
        <Route path="mci" element={<Mci />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="cv" element={<Cv />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
