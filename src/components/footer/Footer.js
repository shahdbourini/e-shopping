import React from "react";
import { Row, Col } from "antd";
import "./footerStyle.css";

function Footer(props) {
  return (
    <footer className="bg3 p-t-75 p-b-32">
      <div className="container">
        <Row>
          <Col lg={{ span: 6, offset: 0 }}>
            <h4 className="listItems">Categories</h4>
            <ul className="theItem">
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  Women
                </a>
              </li>
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  Men
                </a>
              </li>
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  Shoes
                </a>
              </li>
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  Watches
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={{ span: 6, offset: 0 }}>
            <h4 className="listItems">HELP</h4>
            <ul className="theItem">
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  Track Order
                </a>
              </li>
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  Returns
                </a>
              </li>
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  Shipping
                </a>
              </li>
              <li className="p-b-10">
                <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                  FAQs
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={{ span: 6, offset: 0 }}>
            <h4 className="listItems">GET IN TOUCH</h4>
            <ul className="theItem">
              <li className="p-b-10 ">
                <p class="stext-107 cl7 size-201 f-15">
                  Any questions? Let us know in store at 8th floor, 379 Hudson
                  St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>
              </li>
              <div class="p-t-27 ">
                <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  {/* <i className="fa fa-spinner fa-spin"></i> */}
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </div>
            </ul>
          </Col>

          <Col lg={{ span: 6, offset: 0 }}>
            <h4 className="listItems">NEWSLETTER</h4>
            <div className="wrap-emailInput">
              <input
                class="emailInput"
                type="text"
                name="email"
                placeholder="email@example.com"
              />
              <div class="focus-emailInput trans-04"></div>
            </div>

            <div class="p-t-18">
              <button class="subscribeButton">Subscribe</button>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
