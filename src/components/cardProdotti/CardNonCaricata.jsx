import React from "react";
import "./CardProdotti.css";

function CardNonCaricata() {
  return (
    <div className="card col-3" aria-hidden="true">
      <figure className="max-img-container bg-secondary text-white d-flex justify-content-center align-items-center">
        <span>Caricamento...</span>
      </figure>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
      </div>
    </div>
  );
}

export default CardNonCaricata;
