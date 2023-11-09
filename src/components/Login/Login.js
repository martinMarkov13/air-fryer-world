import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const { onLoginSubmit } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(values);
    setValues({ email: "", password: "" });
  };

  return (
    <div className="layout_padding gallery_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="gallery_main">
              <h1 className="gallery_taital">
                <strong>
                  <span className="our_text">Log </span>In
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
                  <form method="POST" onSubmit={onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="E-mail"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="email-bt"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="send_btn">
                      <button type="submit" className="main_bt">
                        Log in
                      </button>
                      <div id="register-link">
                        <span>
                          If you don't have profile click{" "}
                          <Link to="/register">here</Link>
                        </span>
                      </div>
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
