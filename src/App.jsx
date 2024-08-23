import { RecipeProvider } from "./store/context";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./componets/Footer";
import Navbar from "./componets/Header";

function App() {
  return (
    <>
      <RecipeProvider>
  
        <Navbar />
        <Outlet />
        <Footer />
      </RecipeProvider>
    </>
  );
}

export default App;
