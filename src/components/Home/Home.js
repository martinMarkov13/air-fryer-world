import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="layout_padding banner_section_start">
      <div className="layout_padding banner_section">
        <div className="container">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row ">
                  <div className="col-md-6 taital">
                    <h1 className="taital">
                      Air fryer
                      <strong className="banner_taital">
                        <div>Cook fast</div>
                        Eat healthy Same good taste
                      </strong>
                    </h1>
                    <p className="lorem_text">
                      An air fryer is a countertop cooking appliance that
                      combines a heating element and a powerful fan to circulate
                      hot air, similar to a convection oven. Air fryers produce
                      foods that are crispy outside and moist and tender inside
                      without actual frying.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="banner-image">
                      <img
                        alt="Not available"
                        src="images/Air-Fryer-Recipes-Feature.jpg"
                        style={{ maxWidth: "100%"}}
                      />
                    </div>
                  </div>
                  <div className="banner_bt">
                    <button className="bt_main">
                      <Link to="/about">Read More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
