import React from "react";
import { Row, Col } from "antd";
import "./contactForm.css";

function ContactForm(props) {
  return (
    <div className="container">
      <section id="products" className="section p-b-116">
        <Row>
          <Col xl={{ span: 11, offset: 1 }}
               lg={{ span: 11, offset: 1 }}
               md={{ span: 12, offset: 0 }}
               sm={{ span: 24, offset: 0 }}
               xs={{ span: 24, offset: 0 }}
          >
            <form>
              <div className="send-message">
                <h4 className="div-title">Send Us A Message</h4>
                <div className="email-div">
                  <input
                    className="email-input"
                    type="text"
                    name="email"
                    placeholder="Your Email Address"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/${"images/email.webp"}`}
                    alt="ICON"
                  />
                </div>

                <div className="email-subject">
                  <textarea
                    rows="8"
                    name="msg"
                    placeholder="How Can We Help?"
                  ></textarea>
                </div>

                <button className="submitButton">Submit</button>
              </div>
            </form>
          </Col>

          <Col xl={{ span: 11, offset: 1 }}
               lg={{ span: 11, offset: 0 }}
               md={{ span: 12, offset: 0 }}
               sm={{ span: 24, offset: 0 }}
               xs={{ span: 24, offset: 0 }}
          >
            <div className="send-message">
              <div className="position">
                <span className="position-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <div className="details">
                  <span>Address</span>
                  <p>
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>

              <div className="position">
                <span className="position-icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <div className="details">
                  <span>Lets Talk</span>
                  <p className="blueColor">+1 800 1236879</p>
                </div>
              </div>

              <div className="position">
                <span className="position-icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <div className="details">
                  <span>Sale Support</span>
                  <p className="blueColor">contact@example.com</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default ContactForm;
