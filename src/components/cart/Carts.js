import React, { useState } from "react";
import "./cart.css";

function Carts(props) {
    
  const styles = {
    sidebar:{
      visibility:"inherit",
      opacity:"1",
      
    },
    NOsidebar:{
      visibility:"hidden",
      opacity:"0",
    }
  };

  return (
    <>

    <div className="sidebar-block" style={props.leftOpen? styles.sidebar : styles.NOsidebar } />
        <div className="contents"
          style={{ right: props.leftOpen ? '0' : '-700px' }}
        >
          <div className="cart-header">
            <div className="cartName">YOUR CART</div>
            <div className="exit-icon" onClick={props.closeCart}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className="clear"></div>
          </div>
          <div className="cart-info">
            <ul>
              <li>
                <div className="cart-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/${"images/product11.webp"}`}
                    alt="cart-img"
                  />
                </div>
                <div className="cart-product-name">
                  <a href="#" className="header-cart-item-name">
                    White Shirt Pleat
                  </a>
                  <span className="header-cart-item-info">1 x $19.00</span>
                </div>
              </li>

              <li>
                <div className="cart-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/${"images/product10.webp"}`}
                    alt="cart-img"
                  />
                </div>
                <div className="cart-product-name">
                  <a href="#" className="header-cart-item-name">
                    White Shirt Pleat
                  </a>
                  <span className="header-cart-item-info">1 x $19.00</span>
                </div>
              </li>

              <li>
                <div className="cart-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/${"images/product12.webp"}`}
                    alt="cart-img"
                  />
                </div>
                <div className="cart-product-name">
                  <a href="#" className="header-cart-item-name">
                    White Shirt Pleat
                  </a>
                  <span className="header-cart-item-info">1 x $19.00</span>
                </div>
              </li>
              
            </ul>

            <div className="w-full">
              <div className="header-cart-total w-full">Total: $75.00</div>
              <div className="header-cart-buttons flex-w w-full">
                <a
                  href="/features"
                  className="cartButtons m-r-8"
                >
                  View Cart
                </a>
                <a
                  href="/features"
                  className="cartButtons"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Carts;
