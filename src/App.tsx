import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologiesSection from './components/TechnologiesSection'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TechnologiesSection />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
