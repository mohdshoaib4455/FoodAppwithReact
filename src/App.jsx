import { RecipeProvider } from "./store/context";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./componets/Footer";
import Navbar from "./componets/Header";
import Topbar from "./componets/Topbar";

function App() {
  return (
    <>
      <RecipeProvider>
        <Topbar />
        <Navbar />
        <Outlet />
        <Footer />
      </RecipeProvider>
    </>
  );
}

export default App;
