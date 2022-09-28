import React from "react";
import "./CardProdotti.css";

const CardProdotti = ({
  prodotto: { brand, title, description, price, rating, thumbnail },
}) => {
  return (
    <li className="card col-3">
      <figure className="max-img-container">
        <img src={thumbnail} className="card-img-top max-img" alt="" />
      </figure>
      <div className="card-body">
        <span>{brand}</span>
        <h5 className="card-title">{title}</h5>
        <div>€{price}</div> <span>Voto: {rating}</span>
        <p className="card-text text-black-50">{description}</p>
      </div>
    </li>
  );
};

export default CardProdotti;
