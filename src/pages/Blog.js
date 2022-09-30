import React from "react";
import { Row, Col } from "antd";
import HeaderImg from "../components/headerImg/HeaderImg";
import FirstCol from "../components/blogDetails/FirstCol";
import SecondCol from "../components/blogDetails/SecondCol";

function Blog(props) {
  return (
    <>
      <div style={{ paddingBottom: `5%` }}></div>
      <HeaderImg Img="blog.webp" address="blog" />
      <section className="p-t-62 p-b-60">
        <div className="container">
          <Row>
            <Col lg={{ span: 16, offset: 0 }}>
              <FirstCol
                img="blog1.webp"
                title="8 Inspiring Ways to Wear Dresses in the Winter"
                discription="Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
              sapien eu varius"
                fullDisc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus 
                sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar
                 a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu
                  pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. 
                  Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. 
                  Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. 
                  Donec ac purus id sapien condimentum feugiat.

              Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
               Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus
                justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. 
                Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo.
                 Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis 
                 accumsan felis, quis vulputate"
              />
              <FirstCol
                img="blog2.webp"
                title="The Great Big List of Men’s Gifts for the Holidays"
                discription="Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
                sapien eu varius"
                fullDisc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus 
                sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar
                 a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu
                  pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. 
                  Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. 
                  Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. 
                  Donec ac purus id sapien condimentum feugiat.
                  
              Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
               Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus
                justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. 
                Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo.
                 Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis 
                 accumsan felis, quis vulputate"
              />
              <FirstCol
                img="blog3.webp"
                title="5 Winter-to-Spring Fashion Trends to Try Now"
                discription="Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
                sapien eu varius"
                fullDisc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus 
                sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar
                 a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu
                  pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. 
                  Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. 
                  Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. 
                  Donec ac purus id sapien condimentum feugiat.
                  
              Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
               Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus
                justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. 
                Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo.
                 Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis 
                 accumsan felis, quis vulputate"
              />
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

export default Blog;
