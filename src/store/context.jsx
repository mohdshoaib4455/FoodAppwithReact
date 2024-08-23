import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [allFoods, setallFooeds] = useState([]);
  const [breakfast, SetBreakfast] = useState([]);
  const [dessert, SetDessert] = useState([]);
  const [Vegan, SetVegan] = useState([]);
  const [veg, Setveg] = useState([]);

  const naviagte = useNavigate();
  const [fetching, setfetching] = useState(false);
  // SearchMethods
  let fetchData = (value) => {
    setfetching(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((result) => {
        naviagte("/search");
        setRecipe(result.meals);
        setfetching(false);
      });
  };
  // All Fooad

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((res) => res.json())
      .then((Data) => {
        setallFooeds(Data.meals);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // breakfast
  let Breakfast = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
      .then((res) => res.json())
      .then((Data) => {
        SetBreakfast(Data.meals);
      });
  };
  // dessert

  let DessertFun = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((res) => res.json())
      .then((Data) => {
        SetDessert(Data.meals);
      });
  };
  // Vegetarian

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
      .then((res) => res.json())
      .then((Data) => {
        Setveg(Data.meals);
      });
  }, []);
  // SetVegan
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan")
      .then((res) => res.json())
      .then((Data) => {
        SetVegan(Data.meals);
      });
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        fetchData,
        fetching,
        allFoods,
        breakfast,
        Breakfast,
        DessertFun,
        dessert,
        veg,
        Vegan,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
