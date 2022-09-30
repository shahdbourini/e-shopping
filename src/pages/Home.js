import React from 'react';
import Banner from "../components/banner/Banner";
import Types from "../components/types/Types";
import ProductsOption from "../components/productsOption/ProductsOption";
import Products from "../components/products/Products";

function Home(props) {
    return (
        <>
      <Banner />
      <Types />
      <ProductsOption childResFilter={props.childResFilter} title="PRODUCT OVERVIEW" />
      <Products result={props.result} />
            
        </>
    );
}

export default Home;