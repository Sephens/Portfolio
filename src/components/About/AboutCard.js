import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/programmer1.svg";
import Tilt from "react-parallax-tilt";
import mypic from "../../Assets/me-r.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCloseSharp } from 'react-icons/io5';

export default function AboutCard() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Hello! I’m Steven Odhiambo, a Python-powered problem solver with a passion for turning raw data into actionable stories. With expertise in machine learning, cloud engineering (AWS), and full-stack development, I thrive where logic meets creativity. <br />
              <br />My toolbox includes: <br></br><br></br>

              <ui>
                <i>🐍 Python for automation, ML (Scikit-learn, TensorFlow), and analytics.</i> <br></br><br></br>
                <i>📊 Power BI & Tableau for crafting interactive, boardroom-ready dashboards.</i><br></br><br></br>
                <i>☁️ AWS (EC2, S3, Lambda) to build scalable, cost-efficient systems.</i><br></br><br></br>
                <i>🌐 Frontend (HTML/CSS/JS + React) to design pixel-perfect UIs.</i><br></br><br></br>
                <i>📡 Advanced Networking to ensure seamless connectivity.</i><br></br><br></br>
              </ui>

              <br />
              <br />
              When I’m not coding or crafting dashboards, I’m either contributing to open-source projects or geeking out over the latest in AI/cloud tech. Let’s build something remarkable! &nbsp;
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={mypic} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sephens"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_Sephens"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoCloseSharp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/steven-adenux/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_Sephens/"
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
    </Container>
  );
}
