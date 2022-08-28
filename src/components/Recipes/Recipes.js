import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Recipes() {

  const [recipes, setRecipes] = useState([]);
  
  function fetchRecipes() {
    fetch('https://sunnybites-backend.herokuapp.com/api/recipes')
    .then((res) => res.json())
    .then((res) => {
      setRecipes(res);
    });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (!recipes) {
    return <h2>Loading...</h2>
  };

  return (
    <div className='recipes__main-container'>
      <div className='recipes__header-container'>
        <h1>Recipes</h1>
        <h3>Results 5 out of {recipes.length}</h3>
      </div>
      <ul>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <Link to={`/recipes/${recipe._id}`} key={recipe._id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Recipes