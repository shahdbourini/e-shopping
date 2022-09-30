import React from "react";
import { Select } from "antd";
import "./total.css";

function Total(props) {
  const { Option } = Select;
  return (
    <>
      <div className="header-cartTotals">
        <h4>cart Totals</h4>
        <div className="subTotal">
          <div className="totalName">
            <span className="stext-110 cl2">Subtotal:</span>
          </div>
          <div className="totalNum">
            <span className="mtext-110 cl2">$79.65</span>
          </div>
        </div>

        <div className="shippingPart">
          <div className="shippingName">
            <span>Shipping:</span>
          </div>
          <div className="shippingMethod">
            <p>
              There are no shipping methods available. Please double check your
              address, or contact us if you need any help.
            </p>

            <div className="shippingCalualation">
              <span>Calculate Shipping</span>
              <div className="countrySelect">
                <Select defaultValue="Select a country" className="country">
                  <Option value="usa">USA</Option>
                  <Option value="uk">UK</Option>
                </Select>
              </div>

              <div className="stateORcode">
                <input
                  type="text"
                  name="state"
                  placeholder="State /  country"
                />
              </div>

              <div className="stateORcode">
                <input type="text" name="state" placeholder="PostCode /  Zip" />
              </div>

              <div className="flex-w">
                <button className="total-button">Update Totals</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-w theTotal">
          <div className="size-208">
            <span>Total:</span>
          </div>
          <div className="size-209 p-t-1">
            <span>$79.65</span>
          </div>
        </div>

        <button className="checkoutButton">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
}

export default Total;
