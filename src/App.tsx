import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='abou' element={<About />} />
      </Routes>
    </Layout>
  )
}
