
import './App.css'
import Banner from './componets/Banner'
import Navbar from './componets/Header'
import MenuCards from './componets/MenuCards'
import SeactionOne from './componets/SeactionOne'
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
      <SectionTwo/>
    </>
  )
}

export default App
