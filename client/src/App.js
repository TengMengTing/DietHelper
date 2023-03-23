import React, { useEffect, useState } from "react";
import "./App.css"
import Health from './components/Health';
import Diet from './components/Diet';
import Recipes from './components/Recipes';
import axios from 'axios'

const dietary_rest = ["alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free", "gluten-free", "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free", "mediterranean", "mollusk-free", "mustard-free", "no-oil-added", "paleo", "peanut-free", "pescatarian", "pork-free", "red-meat-free", "sesame-free", "shellfish-free", "soy-free", "sugar-conscious", "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"]
var initList = []
dietary_rest.forEach((id) => initList.push({id: id, checked: false}))

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [diet, setDiet] = useState("low-fat");


  const [items, setItems] = useState(initList)

  useEffect(() => {
    getRecipes();
  }, [diet]);

  const getRecipes = async () => {
    var dietary_filter = ""
    items.forEach((dict) => {if (dict.checked) {dietary_filter += `&health=${dict.id}`}})
    const response = await axios.get(`http://localhost:5000/recipes/${diet}${dietary_filter}`);
    console.log(`http://localhost:5000/recipes/${diet}${dietary_filter}`)
    console.log(response.data);
    setRecipes(response.data);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setDiet(search);
    setSearch("");
  };

  return (
    <div style={{display: 'grid', gridTemplateColumns: '250px auto'}} className="App">
      <div><Health 
        items={items}
        setItems={setItems}/>
      </div>

      <div className="recipes">
      <Diet /> 
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            link={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
