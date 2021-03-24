import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p> The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>1999</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-mages-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt=""
      />
    </div>
  );
}

export default Product;
