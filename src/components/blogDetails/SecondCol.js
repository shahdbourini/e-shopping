import React from "react";

function SecondCol(props) {
  return (
    <div className="sideMenu">
      <div className="searchInput">
        <input type="text" name="search" placeholder="Search" />
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>

      <div className="p-t-55">
        <h4 className="textD cl2 p-b-33">Categories</h4>
        <ul>
          <li class="bor18">
            <a href="#">Fashion</a>
          </li>
          <li class="bor18">
            <a href="#">Beauty</a>
          </li>
          <li class="bor18">
            <a href="#">Street Style</a>
          </li>
          <li class="bor18">
            <a href="#">Life Style</a>
          </li>
          <li class="bor18">
            <a href="#">DIY &amp; Crafts</a>
          </li>
        </ul>
      </div>

      <div className="featuredProducts">
        <h4>Featured Products</h4>
        <ul>
          <li className="flex-w flex-t p-b-30">
            <a href="#" className="imgLink">
              <img
                src={`${process.env.PUBLIC_URL}/images/productMin1.webp`}
                alt="PRODUCT"
              />
            </a>
            <div className="featuredProducts-disc">
              <a href="#">White Shirt With Pleat Detail Back</a>
              <span class="stext-116 cl6 p-t-20">$19.00</span>
            </div>
          </li>
          <li className="flex-w flex-t p-b-30">
            <a href="#" className="imgLink">
              <img
                src={`${process.env.PUBLIC_URL}/images/productMin2.webp`}
                alt="PRODUCT"
              />
            </a>
            <div className="featuredProducts-disc">
              <a href="#">Converse All Star Hi Black Canvas</a>
              <span class="stext-116 cl6 p-t-20">$39.00</span>
            </div>
          </li>
          <li className="flex-w flex-t p-b-30">
            <a href="#" className="imgLink">
              <img
                src={`${process.env.PUBLIC_URL}/images/productMin3.webp`}
                alt="PRODUCT"
              />
            </a>
            <div className="featuredProducts-disc">
              <a href="#">Nixon Porter Leather Watch In Tan</a>
              <span className="stext-116 cl6 p-t-20">$17.00</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="archive">
        <h4 class="mtext-112 cl2 p-b-20">Archive</h4>
        <ul>
          <li>
            <a href="#">
              <span>July 2018</span>
              <span>(9)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>June 2018</span>
              <span>(39)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>May 2018</span>
              <span>(29)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>April 2018</span>
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>March 2018</span>
              <span>(22)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>February 2018</span>
              <span>(32)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>January 2018</span>
              <span>(21)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>December 2017</span>
              <span>(26)</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="tags">
        <h4>Tags</h4>
        <div className="tagsLink">
          <a href="#">Fashion</a>
          <a href="#">Lifestyle</a>
          <a href="#">Denim</a>
          <a href="#">Streetstyle</a>
          <a href="#">Crafts</a>
        </div>
      </div>
    </div>
  );
}

export default SecondCol;
