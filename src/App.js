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

import { AuthProvider } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import * as recipeService from "./services/recipeService";
import { RecipeDetails } from "./components/Recipes/RecipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll().then((result) => {
      setRecipes(result);
    });
  }, []);

  return (
    <AuthProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/recipes" element={<Recipes recipes={recipes}/>} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
