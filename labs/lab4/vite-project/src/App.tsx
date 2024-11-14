// old files for lab4
import './App.css'
import ArtworksListContent from './components/artworks_list_content'

// new imports for lab5
import AboutPage from './components/about-page'
import { createBrowserRouter, Route, Routes, RouterProvider, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import ArtworkContent from './components/artwork-content';


const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArtworksListContent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artwork/:id" element={<ArtworkContent />} />
      </Routes>
    </>
  )
}

const router = createBrowserRouter (
  [ {path:"*", Component: Root} ]
)


export default function App() {
  return (
    <>
      {/* <ArtworksListContent /> */}
      <RouterProvider router={router} />
    </>
  )
}

