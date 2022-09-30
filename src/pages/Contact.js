import React from "react";
import HeaderImg from "../components/headerImg/HeaderImg";
import ContactForm from "../components/contactForm/ContactForm";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Contact(props) {
  return (
    <>
      <div style={{ paddingBottom: `5%` }}></div>
      <HeaderImg Img="contact.webp" address="contact" />
      <ContactForm />

      <div style={{ height: "100vh", width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d387102.4733190657!2d-74.0059728!3d40.7127753!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d40.724745!2d-74.0045995!4m5!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%20USA!3m2!1d40.7127753!2d-74.0059728!5e0!3m2!1sen!2s!4v1663867670609!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
