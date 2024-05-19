import { useRecipeContext } from "../../contexts/RecipeContext";
import { Recipe } from "./Recipe";

export default function Recipes() {
  
  const {recipes} = useRecipeContext()

  return (
    <div id="gallery" className="layout_padding2 gallery_section">
            <div className="gallery_main">
              <h1 className="gallery_taital">
                <strong>
                  <span className="our_text">Recipes</span>
                </strong>
              </h1>
            </div>
          <div className="col-sm-12 gallery_maain">
            <div className="row">
              {recipes.map((r) => (
                <Recipe key={r._id} {...r} />
              ))}
            </div>
          </div>
    </div>
  );
}
