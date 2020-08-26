import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import "./App.css"; 

const App = () => {

  const APP_ID = "d23632e1";
  const APP_KEY = "35bddac768110076b776feb3776152f3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async ()  => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log("SEARCH:" + search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              yeild={recipe.recipe.yield}
              image={recipe.recipe.image}
              time={recipe.recipe.totalTime}
              source={recipe.recipe.source}
            />
          ))}
      </div>

      
    </div>
  );
}

export default App;
