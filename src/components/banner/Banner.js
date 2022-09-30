import React, {useState} from 'react';
import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
import "./bannerStyle.css";
import data from "./data";

function Banner () {


  return (
    <>
		 <Slider className="slider-wrapper" autoplay={3000}  >
      {data.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${process.env.PUBLIC_URL}/${"images/" + item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h3 className={item.title1Style}>{item.title}</h3>
            <h1 className={item.title2Style}>{item.description}</h1>
            <div className={item.ButtonStyle +" bannerButton"}>
              <a href="#">{item.button}</a></div>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>
    </>
  );
}

export default Banner;