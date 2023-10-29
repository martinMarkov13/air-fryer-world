import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Devices from "./components/Devices/Devices";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Recipes from "./components/Recipes/Recipes";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import AddRecipe from "./components/AddRecipe/AddRecipe";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/contacts" element={<Contacts />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
