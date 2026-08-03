import { Route, Routes } from 'react-router-dom'
import MobileLayout from './components/layout/MobileLayout'
import Home from './pages/Home'
import Music from './pages/Music'
import AlbumDetail from './pages/AlbumDetail'
import Schedule from './pages/Schedule'
import './styles/app.css'

function App() {
  return (
    <Routes>
      <Route element={<MobileLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/:albumId" element={<AlbumDetail />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
