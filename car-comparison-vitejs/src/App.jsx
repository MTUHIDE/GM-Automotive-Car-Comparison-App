import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Test from './pages/Test.jsx'
import ComparisonResult from './Components/CompareCar/ComparisonResult.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          <Route path="/compare" element={<ComparisonResult />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
