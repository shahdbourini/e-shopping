import React from "react";
import { useEffect } from "react";
import ProductsOption from "../components/productsOption/ProductsOption";
import Products from "../components/products/Products";

function Shop(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="navBorder"></div>
      <ProductsOption childResFilter={props.childResFilter} />
      <Products result={props.result} />
    </>
  );
}

export default Shop;
