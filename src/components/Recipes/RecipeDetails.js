import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";

export function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    recipeService.getOne(recipeId).then((r) => {
      setRecipe(r);
    });
  }, [recipeId]);

  const onDeleteClick = async () => {
    const confirmation = window.confirm(`Are you sure you want to delete ${recipe.title}?`);

    if(confirmation){
        await recipeService.remove(recipe._id)
    }
    //Delete from state

    navigate('/recipes')
  }

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
          <p className="taital-about max-length-paragraph" style={{ color: "#fa3e19" }}>
            Time to cook: {recipe.minutes} minutes
          </p>
          <p className="taital-about max-length-paragraph">Ingredients: {recipe.incredients}</p>
          <p className="taital-about max-length-paragraph" style={{ color: "#fa3e19" }}>
            Description: {recipe.description}
          </p>
          <div className="details-buttons">
            <Link
              to={`/recipes/${recipe._id}/edit`}
              id="edit-btn"
              className="bt_details">Edit</Link>
            <button className="bt_details" onClick={onDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
