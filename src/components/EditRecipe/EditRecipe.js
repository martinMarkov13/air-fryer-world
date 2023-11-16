import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../../contexts/RecipeContext";

import * as recipeService from "../../services/recipeService";

export default function EditRecipe() {
  const { recipeId } = useParams();
  const { onEditSubmit } = useRecipeContext();
  const [values, setValues] = useState({
    _id: "",
    title: "",
    imageUrl: "",
    minutes: "",
    ingredients: "",
    description: "",
  });

  useEffect(() => {
    recipeService.getOne(recipeId)
    .then((result) => {
      setValues(result);
    });
  }, [recipeId]);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onEditSubmit(values);

  };

  return (
    <div className="layout_padding gallery_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="gallery_main">
              <h1 className="gallery_taital">
                <strong>
                  <span className="our_text">Edit </span>Recipe
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <h2 className="den_text">
        <div style={{ fontSize: "38px", marginTop: '32px' }}>
              {values.title}
        </div>
        </h2>
        <div className="touch_main">
          <div className="row">
            <div className="col-md-6">
              <div className="input_main">
                <div className="container">
                  <form method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Recipe name"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="url"
                        className="email-bt"
                        placeholder="Upload a photo"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="email-bt"
                        placeholder="How many minutes will need to cook it"
                        name="minutes"
                        value={values.minutes}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Ingredients"
                        name="ingredients"
                        value={values.ingredients}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="massage-bt"
                        placeholder="Description"
                        rows={5}
                        id="comment"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="send_btn">
                      <button type="submit" className="main_bt">
                        Edit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="images">
                <img
                  alt="Not available"
                  src={values.imageUrl}
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  
}
