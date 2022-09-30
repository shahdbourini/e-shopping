import React from "react";
import "./checkout.css";

function Checkout(props) {
  return (

   
            <div className="table ">
              <div className="wrap-table-shopping-cart">
                <table className="table-shopping-cart">
                  <tbody>
                    <tr className="table_head">
                      <th className="column-1">Product</th>
                      <th className="column-2"></th>
                      <th className="column-3">Price</th>
                      <th className="column-4">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>
                    <tr className="table_row">
                      <td className="column-1">
                        <div className="how-itemcart1">
                          <img
                            src="data:image/webp;base64,UklGRsADAABXRUJQVlA4ILQDAABwEQCdASo8AFAAPmkqj0WkIqEbOb4AQAaEswBiSkeDkH5edQG+iDbL87d6Hehp9W70AOlsn3bPnwF2ly/Hztvl9Zv/Q8wP1GoYsJap2Lhc43wNlFyZAhrRlF8iv1w+ahHHgV0GEIkU0+63ze2u2TK1yq8KeZRROJSaS8aY0Ij8urQGWUp6og46e+XghkuJ8/70ilEAAP78hrCiyAIvxF0XyGBx73TyVMtmk0dc9WVfPa+jU4vlFw7PJomDFITtXM7F/GBwa8XIH+H6u6Lww27AW2WQuLBA5lx1u75hz98IkGtIkJh85Gigg3zfP/NAeRrEBahAO8Jfw5y+RY/ovATT7O/d7xzXjykR6Pinq1sz/G6BtcKmd+ecF8YbwUGPqTbpo5Qo/y/T+n/HuKieqP+T5AWFjbqMuywwYbJbqm8SnoXH/2JVkzq62L+a1l0hLcOJXEOv8ggnsYSjtKj6gzNWA+RwwjGDpzuK0c9MitwIqUIKfECYtvhXVwYBB2Cylkno/E3upBw9kFw3oqmEeBX84hIpfYf1q/4LaUL0qUCIzQ/RcJVy5iu1hE6a1TYrIeNMgkFb8BHxx/RjRqprK2QOmnnlH/iHsKREmeEd1ZtWkNoQB1FlF503MkyiooHYLeBPxYESX/5jdcuzx1liiZ6e3K1mxgxx41RUYHYy91RYlH6LoGl/td42wUdZPOKHpPyiGt9vczsMMOCn9B/P3hau4Ibdoh1wtebjPv6/RwaJiSzUdxzynosQkyMuFLkp8tYmWLk3Y4GVssI9Tukq/tQp8mIRM+u+S1BjtVg28WmnbsW4PK+O2ako+T3i6/V32ozKfYqq/yd2F/7QXuABF+qMJtPL1fs5Ah9J4tc/tsiAoefyrgfEt9sVeyvPLDMT/a8sZMPqoBmfxKyxVWQ/RZH8oN6TczEwvlEqSB2BNq+aaptYpNQORkicVy6j1QTJUMn9cbFT9KOv/omxydNSo++uJMmURi005a00kVjrHuK9iF1YynB0gzr8b/mATy0N8Tv5jv2uBFtXWd9VUs3BZvPittxx9m23fylkJhB+J1BLtseFHSazcV0pJakJrstHSi7glV5F3TLgtbBz9EYE04onvlcixah+fv1A5Q0cw7Dej7uWUefw3oajgXbqmPxsB0YzC+6uIa4FfGtA0A6aRPDyz96EWes4P6Ahp9YGru4Un7csa3+lt12dcH+XD+hswImC8oxdg+AyKrW0HK2GTAEm+3z+uc7wsPQgIdfBZykpXsIwAAA="
                            alt="IMG"
                          />
                        </div>
                      </td>
                      <td className="column-2">Fresh Strawberries</td>
                      <td className="column-3">$ 36.00</td>
                      <td className="column-4">
                        <div className="wrap-num-product productNum">
                          <div className="btn-num-product-down hov-btn3">
                            <i className="fa fa-minus"></i>
                          </div>
                          <input
                            className="num-product"
                            type="number"
                            name="num-product1"
                            value="1"
                          />
                          <div className="btn-num-product-up hov-btn3 ">
                            <i className="fa fa-plus"></i>
                          </div>
                        </div>
                      </td>
                      <td className="column-5">$ 36.00</td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
              <div className="lastRow">
                <div className="couponCode">
                  <input
                    className="couponButton"
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code"
                  />
                  <div className="couponApply hov-btn3">
                    Apply coupon
                  </div>
                </div>
                <div className="couponApply hov-btn3">
                  Update Cart
                </div>
              </div>
            </div>

  );
}

export default Checkout;
