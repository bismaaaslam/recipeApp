import React from "react"
import style from './recipe.module.css'
const Recipe= ({title, calories, image, ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h4>INGREDIENTS:</h4>
            <ol>
               {ingredients.map(ingredient=>(
                   <li>{ingredient.text}</li>
               ))}
            </ol>
            <p><b>Calories: </b>{calories}</p>
            <img src={image} className={style.image} alt=""/>
        </div>
    )
}
export default Recipe;