import { useContext } from "react";
import "./MenuPage.css";
import { Link, Outlet } from "react-router-dom";
import { RecipeContext } from "../../store/context";

const MenuPage = () => {
  const { Breakfast } = useContext(RecipeContext);
  const { DessertFun } = useContext(RecipeContext);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <h1 className="menuH1">Our Menu</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 px-5">
        <div className="row">
          <div className="col-lg-12  d-flex justify-content-center align-items-center">
            <ul className="MenuNav">
              <Link className="menulink" to="/menu">
                All
              </Link>
              <Link
                className="menulink"
                to="/menu/breakfast"
                onClick={Breakfast}
              >
                Breakfast
              </Link>
              <Link
                to="/menu/dessert"
                className="menulink"
                onClick={DessertFun}
              >
                Dessert
              </Link>
              <Link to="/menu/veg" className="menulink">
                Vegetarian
              </Link>
              <Link to="/menu/Vegan" className="menulink">
                Vegan
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 px-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MenuPage;
