import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./blogDetails.css";

function FirstCol(props) {

  console.log(props.img);

  return (
    <>
      <div className="blogImgs">
        <img
          src={`${process.env.PUBLIC_URL}/${"images/" + props.img}`}
          alt="blog-img"
        />
      </div>

      <div className="blogDisc">
        <h4>
          <a href="blog-detail.html">{props.title}</a>
        </h4>
        <p>{props.discription}</p>

        <div className="flex-w flex-sb-m p-t-18 ">
          <span class="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10 f-s-16">
            <span>
              <span className="cl4">By</span> Admin
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>
            <span>
              StreetStyle, Fashion, Couple
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>
            <span>8 Comments</span>
          </span>

          <Link to={`/blogDetails/${props.img}/${props.title}/${props.discription}/${props.fullDisc}`} 
          className="continueReading">
          Continue Reading
          <i className="fa fa-long-arrow-right m-l-9"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FirstCol;
