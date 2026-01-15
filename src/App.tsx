import Nav from './components/Nav'
import Header from './components/Header'
import Layout from './components/layout'
import MainSection from './components/MainSection'

export default function App() {
  return (
    <div>
      <Layout children={undefined} />
      <Nav />
      <Header />
      <MainSection />
    </div>
  )
}
