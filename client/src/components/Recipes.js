import React from "react";
import "./Recipes.css";

const Recipes = ({ title, image, ingredients, link }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <a href={link} rel="noreferrer">instruction link</a>
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