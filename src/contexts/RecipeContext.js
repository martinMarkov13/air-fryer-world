import { createContext, useState, useEffect, useContext } from "react";
import * as recipeService from "../services/recipeService";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll().then((result) => {
      setRecipes(result);
    });
  }, []);

  const onCreateRecipeSubmit = async (recipeData) => {
    const newRecipe = await recipeService.create(recipeData);

    setRecipes((state) => [...state, newRecipe]);

    navigate("/recipes");
  };

  const onEditSubmit = async (values) => {
    const result = await recipeService.edit(values._id, values);

    setRecipes((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/recipes/${values._id}`);
  };

  const deleteRecipe = (recipeId) => {
    setRecipes((state) => state.filter((recipe) => recipe._id !== recipeId));
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, onCreateRecipeSubmit, deleteRecipe, onEditSubmit }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);

  return context;
};
