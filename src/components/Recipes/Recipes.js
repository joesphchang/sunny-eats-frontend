import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  function fetchRecipes() {
    fetch("https://sunnybites-backend.herokuapp.com/api/recipes")
      .then((res) => res.json())
      .then((res) => {
        setRecipes(res);
      });
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (!recipes) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="recipes__main-container">
      <div className="recipes__header-container">
        <h1 className="recipes__header">Recipes</h1>
        <h3 className="recipes__second-header">
          Results 5 out of {recipes.length}
        </h3>
      </div>
      <ul>
        {recipes.map((recipe) => (
          <Link
            to={`/recipes/${recipe._id}`}
            key={recipe._id}
            className="recipes__link"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipes__link-image"
            />
            <div className="recipes__card-description">
              <h4 className="recipes__link-header">{recipe.title}</h4>
              <p>{recipe.description}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
