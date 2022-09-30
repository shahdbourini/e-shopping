import React from 'react';
import { Row, Col } from "antd";
import Checkout from "../components/checkout/Checkout";
import Total from "../components/cartTotals/Total"

function Features(props) {
    return (
        <>
        <div className="navBorder"></div>
       <div className="container tableSpace">
        <section className="section">
         <Row>
          <Col
            // xs={{ span: 19, offset: 4 }}
            // sm={{ span: 15, offset: 5 }}
            // md={{ span: 12, offset: 6 }}
            lg={{ span: 12, offset: 0 }}
          >
          <Checkout /> 
          </Col>

          <Col
            // xs={{ span: 19, offset: 4 }}
            // sm={{ span: 15, offset: 5 }}
            // md={{ span: 12, offset: 6 }}
            lg={{ span: 10, offset: 2 }}
          >
          <Total /> 
          </Col>
          </Row>
          </section>
          </div>
        </>
    );
}

export default Features;