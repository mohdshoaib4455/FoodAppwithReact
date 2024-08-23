import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./componets/Banner.jsx";
import MenuCards from "./componets/MenuCards.jsx";
import SeactionOne from "./componets/SeactionOne.jsx";
import SectionTwo from "./componets/SectionTwo.jsx";
import SectionThree from "./componets/SectionThree.jsx";
import About from "./About.jsx";
import SearchResult from "./componets/SearchResult.jsx";
import MenuPage from "./componets/MenuPage/MenuPage.jsx";
import ALL from "./componets/MenuPage/ALl.jsx";
import Breakfast from "./componets/MenuPage/Breakfast.jsx";
import Dessert from "./componets/MenuPage/Dessert.jsx";
import Vegetarian from "./componets/MenuPage/Vegetarian.jsx";
import Vegan from "./componets/MenuPage/Vegan.jsx";
import Contact from "./componets/ContectPage/Contect.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Banner />
            <MenuCards />
            <SeactionOne />
            <SectionTwo />
            <SectionThree />
          </>
        ),
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/search", element: <SearchResult /> },
      {
        path: "/menu",
        element: <MenuPage />,
        children: [
          { path: "/menu", element: <ALL /> },
          { path: "/menu/breakfast", element: <Breakfast /> },
          { path: "/menu/dessert", element: <Dessert /> },
          { path: "/menu/veg", element: <Vegetarian /> },
          { path: "/menu/Vegan", element: <Vegan /> },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* */}
    <RouterProvider router={router} />
  </StrictMode>
);
