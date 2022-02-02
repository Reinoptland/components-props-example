import React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  //   console.log("PROPS:", props);
  return (
    <div className={`card card--${props.color}`}>
      <img src={props.icon} className="card__icon" />
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.description}</p>
      <button className={`card__button-cta card__button-cta--${props.color}`}>
        Learn More
      </button>
    </div>
  );
}
