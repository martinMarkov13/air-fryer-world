import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as recipeService from "../../services/recipeService";
import { Recipe } from "./Recipe";

export const MyRecipes = () => {
    const [myRecipe, SetMyRecipe] = useState([])
    const { userId } = useAuthContext();

    useEffect(() => {
        recipeService.getMyRecipes(userId)
            .then(data => {
                SetMyRecipe(data);
            })
    }, [userId]);

    return (
        <div id="gallery" className="layout_padding2 gallery_section">
          {/* <div className="container-fluid"> */}
            {/* <div className="row"> */}
              {/* <div className="col-sm-12"> */}
                <div className="gallery_main">
                  <h1 className="gallery_taital">
                    <strong>
                      <span className="our_text">Recipes</span>
                    </strong>
                  </h1>
                </div>
              {/* </div> */}
              <div className="col-sm-12 gallery_maain">
                <div className="row">
                  {myRecipe.map((r) => (
                    <Recipe key={r._id} {...r} />
                  ))}
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      );
}