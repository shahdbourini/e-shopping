import React from "react";
import ProductsOption from "../components/productsOption/ProductsOption";
import Products from "../components/products/Products";

function Shop(props) {
  return (
    <>
      <div className="navBorder"></div>
      <ProductsOption childResFilter={props.childResFilter} />
      <Products result={props.result} />
    </>
  );
}

export default Shop;
