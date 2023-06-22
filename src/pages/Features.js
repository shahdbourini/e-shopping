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
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 11, offset: 1 }}
            lg={{ span: 12, offset: 0 }}
            xl={{ span: 11, offset: 0 }}
          >
          <Checkout /> 
          </Col>

          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 11, offset: 1 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 10, offset: 0 }}
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