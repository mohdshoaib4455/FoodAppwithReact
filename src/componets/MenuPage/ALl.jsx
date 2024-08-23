import React, { useContext } from "react";
import { RecipeContext } from "../../store/context";

const ALL = () => {
  const { allFoods } = useContext(RecipeContext);
  return (
    <>
      <div className="col-lg-12 d-flex justify-content-center align-items-center flex-wrap mb-4">
        {allFoods.map((item) => (
          <div
            key={item.idMeal}
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ALL;
