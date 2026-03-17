import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Join from './pages/Join'
import Team from './pages/Team'
import Projects from './pages/Projects'
import CivilWarSurvivors from './pages/CivilWarSurvivors'
import EasterAttacks from './pages/EasterAttacks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route path="team" element={<Team />} />
          <Route path="projects" element={<Projects />} />
          <Route path="civil-war-survivors" element={<CivilWarSurvivors />} />
          <Route path="easter-attacks" element={<EasterAttacks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
