import React from "react";
import "./headerImg.css";

function HeaderImg(props) {
  return (
    <section
      className=" header-img"
      style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${"images/"+ props.Img })`}}
    >
      <h2>{props.address}</h2>
    </section>
  );
}

export default HeaderImg;
