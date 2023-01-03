import React from 'react'

const Recipe = ({title, image, ingredients, link}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <o1>
                {ingredients.map(ingredients => (<li>{ingredients.text}</li>))}
            </o1>
            <img className="image" src={image} alt=""/>
        </div>
    )
}

export default Recipe