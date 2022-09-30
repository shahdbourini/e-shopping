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
            // xs={{ span: 19, offset: 4 }}
            // sm={{ span: 15, offset: 5 }}
            // md={{ span: 12, offset: 6 }}
            lg={{ span: 8, offset: 0 }}
          >
            <div className="blockType">
              <div className="blockContents mask">
                <a href="/" className="blockText">
                  <span>Women</span>
                  <br />
                  <span>spring 2018</span>
                </a>
                <a className="shopText">SHOP NOW</a>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/women.webp"} />
            </div>
          </Col>
          <Col
            // xs={{ span: 19, offset: 4 }}
            // sm={{ span: 15, offset: 5 }}
            // md={{ span: 12, offset: 6 }}
            lg={{ span: 8, offset: 0 }}
          >
            <div className="blockType">
              <div className="blockContents mask">
                <a href="/" className="blockText">
                  <span>Men</span>
                  <br />
                  <span>spring 2018</span>
                </a>
                <a className="shopText">SHOP NOW</a>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/men.webp"} />
            </div>
          </Col>
          <Col
            // xs={{ span: 19, offset: 4 }}
            // sm={{ span: 15, offset: 5 }}
            // md={{ span: 12, offset: 6 }}
            lg={{ span: 8, offset: 0 }}
          >
            <div className="blockType">
              <div className="blockContents mask">
                <a href="/" className="blockText">
                  <span>Accessories</span>
                  <br />
                  <span>spring 2018</span>
                </a>
                <a className="shopText">SHOP NOW</a>
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
