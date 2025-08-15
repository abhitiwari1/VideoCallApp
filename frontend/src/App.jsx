import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Authentication from './pages/Authentication'
import VideoMeetComponent from './pages/VideoMeet'
import HomeComponent from './pages/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/home" element={<HomeComponent />} />
      <Route path="/:url" element={<VideoMeetComponent />} />
    </Routes>
  )
}

export default App

