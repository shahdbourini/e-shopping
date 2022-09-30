import React, { useState, useEffect } from "react";
import { Button, Modal, Select } from "antd";
import { Row, Col } from "antd";
import data from "./data";
import "./ProductsStyle.css";

function Products(props) {
  const { Option } = Select;

  const [products, setProducts] = useState([]);
  const [subImages, setSubImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productNum, setProductNum] = useState(1);
  const [optionSize, setOptionSize] = useState();
  const [optionColor, setOptionColor] = useState();
  const [activeImg, setActiveImg] = useState("");
  const [count, setCount] = useState(-1);

  let counter = count;
  const tempArray = [];

  const handleLike = (index) => {
    let newArr = [...props.result];
    newArr[index].flag = !newArr[index].flag;
    setProducts(newArr);
  };

  const showModal = (img, index) => {
    setIsModalVisible(true);
    setActiveImg(img);

    for (let i = 0; i <= products.length - 1; i++) {
      if (i === index) {
        tempArray.push(products[i].subImage1);
        tempArray.push(products[i].subImage2);
        tempArray.push(products[i].subImage3);
      }
    }

    setSubImages(tempArray);
  };

  useEffect(() => {
    setActiveImg(subImages[count]);
    setProducts(props.result);
  }, [count, props.result]);

  const Imgafter = () => {
    if (counter === 2) {
      counter = 0;
    } else {
      counter = counter + 1;
    }
    setCount(counter);

    console.log(counter);
  };

  const ImgBefor = () => {
    if (counter === 0 || counter === -1) {
      counter = 2;
    } else {
      counter = counter - 1;
    }
    setCount(counter);
    console.log(counter);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangeSize = (value) => {
    setOptionSize(value);
  };

  const handleChangeColor = (value) => {
    setOptionColor(value);
  };

  const handleCartPlus = () => {
    setProductNum(productNum + 1);
  };

  const handleCartMinus = () => {
    if (productNum === 0) {
      setProductNum(0);
    } else {
      setProductNum(productNum - 1);
    }
  };

  const handleChanges = (event) => {
    const result = event.target.value;
    setProductNum(Number(result));
  };

  return (
    <div className="container">
      <section id="products" className="section p-t-39 p-b-140">
        <Row>
          {products.map((item, index) => (
            <Col lg={{ span: 6, offset: 0 }}>
              <div key={index} className="productBlock">
                <div className="product-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/${"images/" + item.image}`}
                    alt="product"
                  />
                  <button
                    className="qiuckButton"
                    onClick={() => showModal(item.image, index)}
                  >
                    Quick View
                  </button>
                </div>

                <div className="theProduct">
                  <div className="blockInfo">
                    <a href="#" className="productName">
                      Esprit Ruffle Shirt
                    </a>
                    <span className="productPrice">$16.64</span>
                  </div>

                  <div
                    className="favIcon"
                    value={index}
                    onClick={() => handleLike(index)}
                  >
                    {item.flag ? (
                      <img
                        src={process.env.PUBLIC_URL + "/images/whiteHeart.webp"}
                        alt="favIcon"
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + "/images/blueHeart.webp"}
                        alt="favIcon"
                      />
                    )}
                  </div>

                  <div className="clear"></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="loadButton">
          <a href="#">load more</a>
        </div>
      </section>

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
      >
        <Row>
          <Col lg={{ span: 2, offset: 0 }}>
            <div className="moreImages">
              {subImages.map((item, index) => (
                <ul class="slick3-dots" role="tablist" key={index}>
                  <li
                    className="slick-active"
                    onClick={() => setActiveImg(item)}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/${"images/" + item}`}
                      alt="img-deatails"
                    />
                    <div className="slick3-dot-overlay"></div>
                  </li>
                </ul>
              ))}
            </div>
          </Col>
          <Col lg={{ span: 10, offset: 0 }}>
            <img
              src={`${process.env.PUBLIC_URL}/${"images/" + activeImg}`}
              alt="favIcon"
            />
            <div className="wrap-slick3-arrows flex-sb-m flex-w">
              <button className="arrow-slick3 prev-slick3" onClick={ImgBefor}>
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </button>
              <button className="arrow-slick3 next-slick3" onClick={Imgafter}>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </Col>
          <Col lg={{ span: 10, offset: 1 }}>
            <h4 className="productTitle">Lightweight Jacket</h4>
            <span className="productPrice">$58.79</span>
            <p className="productDiscription">
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>

            <div style={{ paddingTop: "27px", paddingLeft: "68px" }}>
              <div className="options">
                <div className="option1">Size</div>
                <Select
                  defaultValue="Size S"
                  className="option2"
                  onChange={handleChangeSize}
                  value={optionSize}
                >
                  <Option value="Size S">Size S</Option>
                  <Option value="Size M">Size M</Option>
                  <Option value="Size L">Size L</Option>
                  <Option value="Size XL">Size XL</Option>
                </Select>
              </div>

              <div className="options">
                <div className="option1">Color</div>
                <Select
                  defaultValue="White"
                  className="option2"
                  onChange={handleChangeColor}
                  value={optionColor}
                >
                  <Option value="Red">Red</Option>
                  <Option value="Blue">Blue</Option>
                  <Option value="White">White</Option>
                  <Option value="Gray">Gray</Option>
                </Select>
              </div>
            </div>

            <div className="centerItems p-t-15">
              <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                <div
                  className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                  onClick={handleCartMinus}
                >
                  <i
                    className="fa fa-minus c18 fs-16 center-icon"
                    aria-hidden="true"
                  ></i>
                </div>
                <input
                  className="mtext-104 cl3 txt-center num-product"
                  type="number"
                  name="num-product"
                  value={productNum}
                  onChange={handleChanges}
                />
                <div
                  class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                  onClick={handleCartPlus}
                >
                  <i
                    class="fa fa-plus c18 fs-16 center-icon"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>

            <div className="bannerButton centerItems">
              <a href="#">add to cart</a>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default Products;
