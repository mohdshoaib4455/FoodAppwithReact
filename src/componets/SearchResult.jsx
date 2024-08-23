import React, { useContext } from "react";
import "../App.css";
import { RecipeContext } from "../store/context";
import Loader from "./Loader";

const SearchResult = () => {
  const { recipe } = useContext(RecipeContext);
  const { fetching } = useContext(RecipeContext);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <h1 className="menuH1">Search Result</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 px-5">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center flex-wrap mb-4">
            {fetching && (
              <>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
              </>
            )}
           
            {!fetching &&
              recipe.map((item) => (
                <div
                  key={item.id}
                  className="card d-flex justify-content-center align-items-center  m-2"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={item.strMealThumb}
                    className="card-img-top icon w-100"
                    alt={item.strMeal}
                  />
                  <div className="card-body d-flex justify-content-center align-items-center flex-column py-4">
                    <h5 className="card-title text-danger">{item.strMeal}</h5>
                    <p className="card-text text-center my-2"></p>
                    {console.log(item)}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
