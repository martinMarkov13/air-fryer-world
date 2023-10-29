export default function AddRecipe() {
  return (
    <div className="layout_padding gallery_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="gallery_main">
              <h1 className="gallery_taital">
                <strong>
                  <span className="our_text">Add </span>Recipe
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="touch_main">
          <div className="row">
            <div className="col-md-6">
              <div className="input_main">
                <div className="container">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Recipe name"
                        name="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="url"
                        className="email-bt"
                        placeholder="Upload a photo"
                        name="imageUrl"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="email-bt"
                        placeholder="How many minutes will need to cook it"
                        name="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Ingredients"
                        name="Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="massage-bt"
                        placeholder="Description"
                        rows={5}
                        id="comment"
                        name="text"
                        defaultValue={""}
                      />
                    </div>
                    <div className="send_btn">
                      <button type="submit" className="main_bt">
                        Upload
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
                  src="images/bread-img.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
