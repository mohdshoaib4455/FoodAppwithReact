
import './App.css'
import Banner from './componets/Banner'
import Footer from './componets/Footer'
import Navbar from './componets/Header'
import MenuCards from './componets/MenuCards'
import SeactionOne from './componets/SeactionOne'
import SectionThree from './componets/SectionThree'
import SectionTwo from './componets/SectionTwo'
import Topbar from './componets/Topbar'

function App() {

  return (
    <>
      <Topbar></Topbar>
      <Navbar />
      <Banner />
      <MenuCards />
      <SeactionOne />
      <SectionTwo />
      <SectionThree />
      <Footer/>
    </>
  )
}

export default App
