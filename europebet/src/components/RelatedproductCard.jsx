import React from "react";

export default function RelatedProductCard(props) {
  return (
    <div className="relatedPrCard">
      <img src={props.image}></img>
      <div>
        <h3 className={props.colorClass}>{props.headline}</h3>
        <p className={props.baseColor}>{props.text}</p>
      </div>
    </div>
  );
}
