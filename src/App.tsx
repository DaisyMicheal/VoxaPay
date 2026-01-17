import Nav from './components/Landing Page/Nav'
import Header from './components/Landing Page/Header'
import Layout from './components/Landing Page/layout'
import MainSection from './components/Landing Page/MainSection'
import Dowload from './components/Landing Page/Dowload'
import Footer from './components/Landing Page/Footer/Footer'

export default function App() {
  return (
    <Layout>
      <Nav />
      <Header />
      <MainSection />
      <Dowload />
      <Footer />
    </Layout>
  )
}
