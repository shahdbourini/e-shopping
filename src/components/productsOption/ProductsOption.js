import React, { useState, useRef, useEffect } from "react";
import "./OptionsStyle.css";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import data from "../products/data";

function ProductsOption({ childResFilter,title }) {
  const [products, setProducts] = useState(data);
  const [showSearchBar, setShowSearchBar] = useState(0);
  const [types, SetTypes] = useState([
    "All Products",
    "Women",
    "Men",
    "Bag",
    "Shoes",
    "Watches",
  ]);
  const [flag, setFlag] = useState(false);

  const searchRef = useRef(null);
  const wrapper = useRef(null);
  const searchButton = useRef(null);
  const searchButton2 = useRef(null);

  function getSearchBar() {
    setFlag(!flag);
    if (searchRef.current.clientHeight) {
      searchRef.current.style.height = 0;
      searchRef.current.style.border = "solid 1px white";
      searchButton.current.style.display = "inline";
      searchButton2.current.style.display = "none";
    } else {
      searchRef.current.style.height = wrapper.current.clientHeight + "px";
      searchRef.current.style.border = "2px solid rgb(213 210 210)";
      searchButton.current.style.display = "none";
      searchButton2.current.style.display = "inline";
      // searchButton.current.style.background = "#e6e6e6";
      setShowSearchBar(wrapper);
    }
  }

  function filterProducts(item) {
    // setOption(item);
    if (item === "All Products") {
      item = "";
    }
    const input = !item
      ? data
      : data.filter((choice) =>
          choice.title.toLowerCase().startsWith(item.toLocaleLowerCase())
        );
     setProducts(input);

  }
  
  useEffect(() => {
    childResFilter(products);
  }, [products]);

  return (
    <>
      <div className="container">
        <section id="products" className="section">
          <h2>
            {/* from props */}
            <b>{title}</b> 
          </h2>
          <div className="pruductsType">
            <ul>
              {types.map((item, index) => (
                <li key={index} onClick={() => filterProducts(item)}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="filters">
              <button>Filter</button>
              <div className="space"></div>
              <button onClick={getSearchBar} ref={searchButton}>
                <SearchOutlined />
                Search
              </button>
              <button
                onClick={getSearchBar}
                ref={searchButton2}
                className="closeSearch"
              >
                <CloseOutlined />
                Search
              </button>
            </div>
            <div className="clear"></div>
          </div>

          <div ref={searchRef} className="SearchBar">
            <div ref={wrapper} className="measuringWrapper">
              <button className="SearchIcon ">
                <SearchOutlined />
              </button>
              <input placeholder="Search" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductsOption;
