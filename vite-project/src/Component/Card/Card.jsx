import React from "react";
import style from "./Card.module.css";
const Card = ({ barcode, model, system }) => {
  return (
    <div className={style.container}>
      <div>{barcode}</div>
      <h2>{model}</h2>
      <p>{system}</p>
    </div>
  );
};

export default Card;
