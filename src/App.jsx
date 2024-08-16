
import './App.css'
import Banner from './componets/Banner'
import Navbar from './componets/Header'
import MenuCards from './componets/MenuCards'
import SeactionOne from './componets/SeactionOne'
import Topbar from './componets/Topbar'

function App() {

  return (
    <>
      <Topbar></Topbar>
      <Navbar />
      <Banner />
      <MenuCards />
      <SeactionOne/>
    </>
  )
}

export default App
