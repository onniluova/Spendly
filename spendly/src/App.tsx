import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home>spendly</Home>}></Route>
      </Routes>
    </Router>
  )
}

export default App
