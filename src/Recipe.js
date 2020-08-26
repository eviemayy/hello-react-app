import React from 'react';
import style from './recipe.module.css';



const Recipe = ({title,yeild,image,time,source}) => {
    return(
        <div className={style.recipe}>
            
                <img src={image} alt=""/>
            
            <div className={style.content}>
                <h2 className={style.title}>{title}</h2>
                <p>Total time: {time} minutes</p>
                <p>Yields: {yeild} servings</p>
                <p>Source: {source}</p>
            </div>
            
        </div>
    );
}

export default Recipe;