import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineClose ,
} from "react-icons/ai";
import { IoCloseSharp } from 'react-icons/io5';

import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Do it no matter what!!</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Steve</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Sephens"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/_Sephens"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IoCloseSharp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/steven-adenux/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_Sephens/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
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
