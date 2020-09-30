import React from "react";

const Card = (props) => {
  return (
    <div onClick={props.onClick} className="card">
      <img className="card-image" src={props.src} />
      <a>{props.name}</a>
      {props.price ? (
        <div className="price">
          <p>{props.price} ₺</p>
          <a href="/">
            {props.price !== "Seçenekler" ? (
              <img onClick={props.cartClick} src="../../public/icons/add.svg" />
            ) : null}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
