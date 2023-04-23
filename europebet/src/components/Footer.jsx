import React from "react";
import RelatedProductCard from "./RelatedproductCard";
import data from "../data";

export default function Footer() {
  const cards = data.map((item) => {
    return <RelatedProductCard key={item.id} {...item} />;
  });
  return (
    <div className="footer">
      <h3 className="footer-h">წესები და პირობები</h3>
      <div className="dropdown-item">
        <p className="dropdown-text">
          როდის იწყება და რა ფორმატით გაიმართება აქცია
        </p>
        <img
          className="dropdown-arrow"
          src="/src/assets/Vector Smart Object 22.png"
        />
      </div>
      <div className="dropdown-item">
        <p className="dropdown-text">როგორ მივიღო აქციაში მონაწილეობა?</p>
        <img
          className="dropdown-arrow"
          src="/src/assets/Vector Smart Object 22.png"
        />
      </div>
      <div className="dropdown-item">
        <p className="dropdown-text">სხვადასვა</p>
        <img
          className="dropdown-arrow"
          src="/src/assets/Vector Smart Object 22.png"
        />
      </div>
      <div>
        <h4>მსგავსი აქციები</h4>
        <div className="card-wrapper">{cards}</div>
      </div>
      <div className="fixed-bottom">
        <button>ითამაშე</button>
      </div>
    </div>
  );
}
