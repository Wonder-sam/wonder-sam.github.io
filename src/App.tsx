import { Route, Routes } from "react-router"
import RootLayout from "./layouts/root-layout"
import HomePage from "./pages/home-page"
import ProjectsPage from "./pages/project-page"
import GalleryPage from "./pages/gallery-page"
import CVPage from "./pages/cv-page"
import ReferencePage from "./pages/reference-page"
import ProjectDetailsPage from "./pages/project-details-page"

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
        <Route index={true} element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="references" element={<ReferencePage />} />
        <Route path="cv" element={<CVPage />} />
      </Route>
    </Routes>
  )
}

export default App
