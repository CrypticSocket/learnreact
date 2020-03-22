import React from "react";

function Product(props) {
  return (
    <div>
      <h2>Name : {props.prodData.name}</h2>
      <p>
        Price :{" "}
        {props.prodData.price.toLocaleString("en-US", {
          style: "currency",
          currency: "INR"
        })}
      </p>
      <p>Description : {props.prodData.description}</p>
    </div>
  );
}

export default Product;
