import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [err, seterr] = useState([]);
  const naviagte = useNavigate();
  const [fetching, setfetching] = useState(false);

  let fetchData = (value) => {
    setfetching(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((result) => {
          naviagte("/search");
        setRecipe(result.meals);
        setfetching(false);
      }).catch((err) => {
        seterr(err.meals);
    
      })
  };

  return (
    <RecipeContext.Provider value={{ recipe, fetchData, fetching,err }}>
      {children}
    </RecipeContext.Provider>
  );
};
