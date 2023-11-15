import { Link } from "react-router-dom";

export const Recipe = ({ _id, title, imageUrl }) => {
  return (
    <div className="col-sm-3 padding_0">
      <div className="gallery_blog">
        <img alt="Not available" className="img-responive" src={imageUrl} />
        <Link to={`/recipes/${_id}`}>
          <div className="overlay">
            <h2>{title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};
