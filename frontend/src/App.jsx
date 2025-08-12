import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Authentication from './pages/Authentication'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  )
}

export default App

