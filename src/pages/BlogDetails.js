import React, { useState } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { Row, Col } from "antd";
import HeaderImg from "../components/headerImg/HeaderImg";
import FirstCol from "../components/blogDetails/FirstCol";
import SecondCol from "../components/blogDetails/SecondCol";

function BlogDetails(props) {

  const { imgID, title, discription, fullDisc } = useParams();


  return (
    <>
      <div style={{ paddingBottom: `5%` }}></div>
      <HeaderImg Img="blog.webp" address="blog" />
      <section className="p-t-62 p-b-60">
        <div className="container">
          <Row>
            <Col lg={{ span: 16, offset: 0 }}>
              <div className="blogImgs">
                <img
                  src={`${process.env.PUBLIC_URL}/${"images/" + imgID}`}
                  alt="blog-img"
                />
              </div>

              <div className="blogDisc">
                <h4>
                  <a href="blog-detail.html">{title}</a>
                </h4>
                {/* <p>{discription}</p> */}
                <p>{fullDisc}</p>
              </div>
            </Col>

            <Col lg={{ span: 6, offset: 1 }}>
              <SecondCol />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
