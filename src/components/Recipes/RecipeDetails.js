import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";

export function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    recipeService.getOne(recipeId).then((r) => {
      setRecipe(r);
    });
  }, [recipeId]);

  return (
    <>
      <div className="product_section_2 images">
        <div
          className="col-sm-4"
          style={{ paddingTop: "48px", paddingLeft: "48px" }}
        >
          <h2 className="den_text">
            <div style={{ fontSize: "38px" }}>
              {recipe.title}
              <div className="images">
                <img
                  alt="Not available"
                  src={recipe.imageUrl}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </h2>
        </div>
        <div className="description">
          <p className="taital-about" style={{ color: "#fa3e19" }}>
            Time to cook: {recipe.minutes} minutes
          </p>
          <p className="taital-about">Ingredients: {recipe.incredients}</p>
          <p className="taital-about" style={{ color: "#fa3e19" }}>
            Description: {recipe.description}
          </p>
        </div>
        <div className="buttons">
            <Link to={`/catalogue/${recipe._id}/edit`} className="button">
              Edit
            </Link>
            <button  className="button" onClick>
              Delete
            </button>
          </div>
      </div>
    </>
  );
}
