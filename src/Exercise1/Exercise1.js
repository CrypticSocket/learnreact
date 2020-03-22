import React from "react";

import products from "./vschoolProducts";

import Product from "./Product";

let prod = products.map(function(item) {
  return <Product key={item.id} prodData={item} />;
});

function Exercise1() {
  return <div>{prod}</div>;
}

export default Exercise1;
