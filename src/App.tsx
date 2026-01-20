import { Route, Routes } from 'react-router-dom'

import Home from './Pages/LandingPage/Home'
import About from './Pages/AboutPage/About'
import Container from './components/layout/Container'
import Contact from './Pages/Contact/Contact'

export default function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>
  )
}
