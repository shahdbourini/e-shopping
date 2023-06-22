import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./Types.css";

function Types(props) {
  return (
    <div className="container">
      <section id="about" className="section">
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
             sm={{ span: 22, offset: 1 }}
            md={{ span: 8, offset: 0 }}
            lg={{ span: 8, offset: 0 }}
          >
            <div className="blockType">
              <div className="blockContents">
                <a href="/shop.html" className="blockText">
                  <span>Women</span>
                  <br />
                  <span>spring 2018</span>
                </a>
                <Link to="/shop" className="shopText">SHOP NOW</Link>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/women.webp"} />
            </div>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 8, offset: 0 }}
            lg={{ span: 8, offset: 0 }}
          >
            <div className="blockType">
              <div className="blockContents mask">
                <a href="/" className="blockText">
                  <span>Men</span>
                  <br />
                  <span>spring 2018</span>
                </a>
                <Link to="/shop" className="shopText">SHOP NOW</Link>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/men.webp"} />
            </div>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 8, offset: 0 }}
            lg={{ span: 8, offset: 0 }}
          >
            <div className="blockType">
              <div className="blockContents mask">
                <a href="/" className="blockText">
                  <span>Accessories</span>
                  <br />
                  <span>spring 2018</span>
                </a>
                <Link to="/shop" className="shopText">SHOP NOW</Link>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/accessories.webp"} />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Types;
