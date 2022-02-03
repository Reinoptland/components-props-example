import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard(props) {
  return (
    <div className={`${styles["card"]} ${styles[`card--${props.color}`]} `}>
      <img
        src={props.icon}
        className={styles["card__icon"]}
        alt={`Icon for ${props.title} cars`}
      />
      <h2 className={styles["card__title"]}>{props.title}</h2>
      <p className={styles["card__description"]}>{props.description}</p>
      <button
        className={`${styles["card__button-cta"]} ${
          styles[`card__button-cta--${props.color}`]
        }`}
      >
        Learn More
      </button>
    </div>
  );
}
