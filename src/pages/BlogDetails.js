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

              <div className="commentsTable">
                <h5>Leave a Comment</h5>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form>
                  <div className="theComment">
                    <textarea name="cmt" placeholder="Comment..."></textarea>
                  </div>
                  <div className="commentsInput">
                    <input type="text" name="name" placeholder="Name *" />
                  </div>
                  <div className="commentsInput">
                    <input type="text" name="email" placeholder="Email *" />
                  </div>
                  <div className="commentsInput">
                    <input type="text" name="web" placeholder="Website" />
                  </div>
                  <button>Post Comment</button>
                </form>
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
