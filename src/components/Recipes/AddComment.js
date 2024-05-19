import { useState } from "react";

export const AddComment = ({ onCommentSubmit }) => {
  const [values, setValues] = useState({
    comment: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(values);
    setValues({ comment: "" });
  };

  return (
    <div className="layout_padding gallery_section">
            <div className="gallery_main">
              <h1 className="gallery_taital">
                <strong>
                  <span className="our_text">Add </span>Comment
                </strong>
              </h1>
            </div>
        <div className="touch_main">
          <div className="col-md-6">
            <div className="input_main">
              <div className="container">
                <form method="POST" onSubmit={onSubmit}>
                  <div className="form-group">
                    <textarea
                      className="massage-bt"
                      placeholder="Place your comment here"
                      rows={5}
                      id="comment"
                      name="comment"
                      value={values.comment}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="send_btn">
                    <button type="submit" className="main_bt">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
