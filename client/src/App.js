import React, { useEffect, useState } from "react";
import "./App.css"
import Health from './components/Health';
import Diet from './components/Diet';
import Recipes from './components/Recipes';
import axios from 'axios'

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [diet, setDiet] = useState("low-fat");

  useEffect(() => {
    getRecipes();
  }, [diet]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/recipes/${diet}`);
    console.log(response.data);
    setRecipes(response.data);
  };

  const updateSearch = (dietary_rest) => {
    setSearch(dietary_rest);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setDiet(search);
    setSearch("");
  };

  return (
    <div style={{display: 'grid', gridTemplateColumns: '250px auto'}} className="App">
      <div><Health /></div>
      <div><Diet /></div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
