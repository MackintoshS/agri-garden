import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pepiniere from './pages/Pepiniere'
import Boutique from './pages/Boutique'
import Evenements from './pages/Evenements'
import APropos from './pages/APropos'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pepiniere" element={<Pepiniere />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
