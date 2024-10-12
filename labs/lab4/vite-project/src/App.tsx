// old files for lab4
import './App.css'
import ArtworksListContent from './components/artworks_list_content'

// new imports for lab5
import AboutPage from './components/about-page'
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './components/header';


const Root = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArtworksListContent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
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

