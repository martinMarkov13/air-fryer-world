import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";
import * as commentService from "../../services/commentService";
import { useRecipeContext } from "../../contexts/RecipeContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { AddComment } from "./AddComment";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const [recipe, setRecipe] = useState({});
  const { deleteRecipe } = useRecipeContext();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      recipeService.getOne(recipeId),
      commentService.getAllComments(recipeId),
    ]).then(([recipeData, comments]) => {
      setRecipe({
        ...recipeData,
        comments,
      });
    });
  }, [recipeId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.createComment(
      recipeId,
      values.comment
    );

    setRecipe((state) => ({
      ...state,
      comments: [
        ...state.comments,
        {
          ...response,
          author: {
            email: userEmail,
          },
        },
      ],
    }));
  };

  const onDeleteClick = async () => {
    const confirmation = window.confirm(
      `Are you sure you want to delete ${recipe.title}?`
    );

    if (confirmation) {
      await recipeService.remove(recipe._id);
      deleteRecipe(recipe._id);
      navigate("/recipes");
    }
  };

  const isOwner = recipe._ownerId === userId;

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
          <p
            className="taital-about max-length-paragraph"
            style={{ color: "#fa3e19" }}
          >
            Time to cook: {recipe.minutes} minutes
          </p>
          <p className="taital-about max-length-paragraph">
            Ingredients: {recipe.ingredients}
          </p>
          <p
            className="taital-about max-length-paragraph"
            style={{ color: "#fa3e19" }}
          >
            Description: {recipe.description}
          </p>

          {isOwner && (
            <div className="details-buttons">
              <Link
                to={`/recipes/${recipe._id}/edit`}
                id="edit-btn"
                className="bt_details"
              >
                Edit
              </Link>
              <button className="bt_details" onClick={onDeleteClick}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div id="comment-section">
        <div id="gallery" className="gallery_section">
          {/* <div className="container-fluid"> */}
          {/* <div className="row"> */}
          {/* <div className="col-sm-12"> */}
          <div className="gallery_main">
            <h1 className="gallery_taital">
              <strong>
                <span className="our_text">Comments:</span>
              </strong>
            </h1>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="comments">
          <ul>
            {recipe.comments &&
              recipe.comments.map((c) => (
                <li key={c._id}>
                  <p className="taital-about max-length-paragraph-comments">
                    <p className="comments-p">
                      {c.author.email}:{" "}
                      <span className="comments-span"> {c.comment}</span>
                    </p>
                  </p>
                </li>
              ))}
          </ul>
        </div>
        <div style={{display:"inline-block", marginLeft: "740px"}}>
          {!recipe.comments?.length && (
            <p>There are no comments yet.</p>
          )}
        </div>
      </div>

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </>
  );
}
