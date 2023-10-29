import { Link } from "react-router-dom";

export default function About() {
  return (
    <div id="about" className="layout_padding about_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <img
                alt="Not available"
                src="images/cupcake-img.png"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="about_text">
              <strong>
                About <span className="color">Air Fryers</span>
              </strong>
            </h1>
            <p className="about_taital">
              An air fryer is a countertop cooking appliance that combines a
              heating element and a powerful fan to circulate hot air, similar
              to a convection oven. Air fryers produce foods that are crispy
              outside and moist and tender inside without actual frying
            </p>
            <p className="about_taital">
              Counter space is a hot commodity in almost every kitchen. Even
              when you have a lot of it, it’s easy to clutter and fill with the
              latest cooking appliances. An air fryer, however, is one you’ll
              want to make room for. An air fryer is similar to an oven in the
              sense that it bakes and roasts, but the difference is its heating
              elements are only located on top and are accompanied by a large,
              powerful fan, resulting in food that's super crispy in no time —
              and, most notably, with less oil than deep-fried counterparts. Air
              fryers typically heat up very quickly and they cook food quickly
              and evenly, thanks to the combination of a concentrated heat
              source and the size and placement of the fan.
            </p>
          </div>
          <div className="col-md-13">
            <h2 className="taital-about">
              What's the difference between an air fryer and deep fryer?
            </h2>
            <p className="about_taital">
              Air fryers bake food at a high temperature with a high-powered
              fan, while deep fryers cook food in a vat of oil that has been
              heated up to a specific temperature. Both cook food quickly, but
              an air fryer requires practically zero preheat time while a deep
              fryer can take upwards of 10 minutes. Air fryers also require
              little to no oil and deep fryers require a lot that absorb into
              the food. Food comes out crispy and juicy in both appliances, but
              don't taste the same, usually because deep fried foods are coated
              in batter that cook differently in an air fryer vs a deep fryer.
              Battered foods needs to be sprayed with oil before cooking in an
              air fryer to help them color and get crispy, while the hot oil
              soaks into the batter in a deep fryer. Flour-based batters and wet
              batters don't cook well in an air fryer, but they come out very
              well in a deep fryer.
            </p>
            <img
              alt="Not available"
              src="images/air-fryer-food.jpg"
              style={{ maxWidth: "100%" }}
            />
            <h2 className="taital-about" style={{ paddingTop: "40px" }}>
              Is air fried food healthy?
            </h2>
            <p className="about_taital">
              The taste and texture of air fried food is comparable to the
              results of a deep fryer: Crispy on the outside, juicy on the
              inside. However, you only need to use a tiny amount of oil, if any
              at all (depending on what you're cooking). So yes, compared to
              deep-frying, air frying is "definitely a healthier alternative if
              you commit to using just 1-2 tablespoons of a plant-based oil with
              seasoning, and you stick to air-frying veggies more than anything
              else," says Good Housekeeping’s Nutrition Director Jaclyn London,
              MS, RD, CDN. "Any appliance that helps you and your family up your
              veggie game is key to weight management, reduced risk of chronic
              disease, and improved long-term health as we age."
            </p>
            <img
              alt="Not available"
              src="images/Collage-vegan-air-fryer-recipes.jpg"
              style={{ maxWidth: "40%", float: "left", marginRight: "16px" }}
            />
            <h2 className="taital-about">What can you cook in an air fryer?</h2>
            <p className="about_taital">
              Air fryers are fast, and once you understand how they work, they
              can be used to heat frozen foods or cook all sorts of fresh food
              like chicken, steak, pork chops, salmon and veggies. Most meats
              require no added oil because they’re already so juicy: just season
              them with salt and your favorite herbs and spices. Make sure you
              stick to dry seasonings — less moisture leads to crispier results.
              If you want to baste meats with barbecue sauce or honey, wait
              until the last couple minutes of cooking. Lean cuts of meat, or
              foods with little or no fat, require oil to brown and crisp up.
              Brush boneless chicken breasts and pork chops with a bit of oil
              before seasoning. Vegetable oil or canola oil is usually
              recommended due to its higher smoke point, meaning it can stand up
              to the high heat in an air fryer. Vegetables also need to be
              tossed in oil before air frying. We recommend sprinkling them with
              salt before air frying, but use a little less than you’re used to:
              The crispy, air fried bits pack a lot of flavor. We love air
              frying broccoli florets, Brussels sprouts and baby potato halves.
              They come out so crispy! Butternut squash, sweet potatoes and
              beets all seem to get sweeter, and green beans and peppers take no
              time at all.
            </p>
            <h2 className="taital-about">Are air fryers worth it?</h2>
            <p className="about_taital">
              First off, consider whether you’re in the market for another
              appliance. Many toaster ovens have air frying capabilities now,
              like the Cuisinart TOA-65 and the Breville Smart Oven Air, as do
              some pressure cookers, like the Ninja Foodi. If you do decide to
              spring for an air fryer, consider that s-alone air fryers range in
              price from $40 for small compact ones to $400 for large, air fryer
              toaster ovens. When shopping for an air fryer, consider how many
              people you’re cooking for: The smallest air fryers (1.2 liters)
              are good for 1-2 people, while the medium sizes (3-4 liters) are
              good for 2-3 people, and the largest (6 liters or more) are good
              for 4-6. We prefer air fryers with baskets instead of shelves
              because they cook more evenly.
            </p>
            <div className="about-btn">
            <button className="read_more">
              <Link to="/devices">Show devices</Link>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
