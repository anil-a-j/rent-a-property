import React from "react";
import "./card.css";
import like from "../../icons/like.png";
import liked from "../../icons/liked.png";
import bed from "../../icons/bed.png";
import bathtub from "../../icons/bathtub.png";
import area from "../../icons/area.png";
import stars from "../../icons/stars.png";
import { useDispatch } from "react-redux";
import { switchFav } from "../../store/property/propertySlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      {data.popular && (
        <div className="popular-absolute">
          <img src={stars} />
          <p>POPULAR</p>
        </div>
      )}
      <img src={`/images/${data.image}`} className="card-image" />
      <div className="card-details">
        <div className="price-and-like">
          <p className="price">
            ${data.price}
            <small className="small"> /month</small>
          </p>
          <img
            src={data.fav ? liked : like}
            className="like-button"
            onClick={() => dispatch(switchFav(data.id))}
          />
        </div>
        <h2 className="card-name">{data.title}</h2>
        <p className="card-address">{data.address}</p>
        <div className="card-features">
          <img src={bed} className="bed" />
          <small>{data.beds} beds</small>
          <img src={bathtub} className="bathtub" />
          <small>{data.bathrooms} Bathrooms</small>
          <img src={area} className="area" />
          <small>{data.area} &#13217;</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
