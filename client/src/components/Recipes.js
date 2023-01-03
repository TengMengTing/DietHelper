import React from "react";
import "./Recipes.css";

const Recipes = ({ title, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className="style.image" src={image} alt="" />
    </div>
  );
};

export default Recipes;