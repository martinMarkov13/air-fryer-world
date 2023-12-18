export default function Contacts() {
  return (
    <div>
      <div class="map_section">
        <div class="row">
          <div class="col-sm-12">
              <iframe
                width="100%"
                height="480"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=480&amp;hl=en&amp;q=National%20palace%20of%20culture+(Air%20Fryer%20World)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Find Population on Map
                </a>
              </iframe>
          </div>
        </div>
      </div>
      <div id="contact" className="contact_section">
        <div className="container">
          <div className="contact-taital">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="contact_text">
                  <strong>Contact Us</strong>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Adderess</h2>
              <div className="image-icon">
                <img alt="Not available" src="images/map-icon.png" />
                <span className="email_text">Bulgaria square 1 </span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/phone-icon.png" />
                <span className="email_text">(+359) 088888888</span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/email-icon.png" />
                <span className="email_text">airfryerworld@abv.com</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Useful Links</h2>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Air Fryer Dictionary</span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Helpful Links</span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Best vloggers</span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Call a Customer support</span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Beginner's help</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Overview</h2>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Air Fryer Dictionary</span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Helpful Links</span>
              </div>
              <div className="image-icon">
                <img alt="Not available" src="images/bulit-icon.png" />
                <span className="email_text">Beginner's help</span>
              </div>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img alt="Not available" src="images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="Not available" src="images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="Not available" src="images/google-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="Not available" src="images/linkedin-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Instagram</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="Not available"
                      src="images/footer-img1.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="Not available"
                      src="images/footer-img2.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="Not available"
                      src="images/footer-img2.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="Not available"
                      src="images/footer-img3.png"
                      style={{ width: "100%" }}
                    />
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
