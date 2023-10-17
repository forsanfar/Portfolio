import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineWhatsApp,
  AiFillMail,
  AiFillInstagram,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Forsan Farouk</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Forsan Farouk</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
            <a
                  href="https://wa.me/+967779562483"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:forsanfarouk071@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+967779562483"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/4san_far"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
