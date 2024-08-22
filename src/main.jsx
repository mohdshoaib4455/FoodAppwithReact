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
      { path: "/search", element: <SearchResult /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* */}
    <RouterProvider router={router} />
  </StrictMode>
);
