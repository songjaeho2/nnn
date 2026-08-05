import { Route, Routes } from 'react-router-dom'
import MobileLayout from './components/layout/MobileLayout'
import Home from './pages/Home'
import Music from './pages/Music'
import AlbumDetail from './pages/AlbumDetail'
import AlbumCredits from './pages/AlbumCredits'
import Schedule from './pages/Schedule'
import ScheduleDetail from './pages/ScheduleDetail'
import './styles/app.css'

function App() {
  return (
    <Routes>
      <Route element={<MobileLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/:albumId" element={<AlbumDetail />} />
        <Route path="/music/:albumId/credits" element={<AlbumCredits />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/:scheduleId" element={<ScheduleDetail />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
