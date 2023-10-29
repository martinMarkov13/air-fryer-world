export default function Register() {
  return (
    <div className="layout_padding gallery_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="gallery_main">
              <h1 className="gallery_taital">
                <strong>
                  <span className="our_text">Get in</span>Touch
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
                  <form action="/action_page.php">
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="YOUR NAME"
                        name="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="EMAIL"
                        name="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="PHONE NUMBER"
                        name="Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="massage-bt"
                        placeholder="MASSAGE"
                        rows={5}
                        id="comment"
                        name="text"
                        defaultValue={""}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="send_btn">
                <button type="button" className="main_bt">
                  <a href="#">SEND</a>
                </button>
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
