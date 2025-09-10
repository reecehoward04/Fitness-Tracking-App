import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Nutrition from './pages/Nutrition'
import Workouts from './pages/Workouts'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/nutrition" element={<Nutrition />}/>
        <Route path="/workouts" element={<Workouts />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
