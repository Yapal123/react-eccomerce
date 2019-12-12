import React from "react";
import "./App.css";
import Product from "./Product";

function TopProductsRender(props) {
  const productItems = props.products
    .slice(0, 4 * props.counter)
    .map(product => <Product key={product.title.toString()} data={product} />);
  return <div className="TopProdPlace">{productItems}</div>;
}
export default TopProductsRender;
