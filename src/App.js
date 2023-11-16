import { Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Devices from "./components/Devices/Devices";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Recipes from "./components/Recipes/AllRecipes";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import { RecipeDetails } from "./components/Recipes/RecipeDetails";

// import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { RecipeProvider } from "./contexts/RecipeContext";
import * as recipeService from "./services/recipeService";
import EditRecipe from "./components/EditRecipe/EditRecipe";


function App() {
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   recipeService.getAll()
  //   .then((result) => {
  //     setRecipes(result);
  //   });
  // }, []);

  return (
    <AuthProvider>
      <RecipeProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails/>} />
            <Route path="/recipes/:recipeId/edit" element={<EditRecipe/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
