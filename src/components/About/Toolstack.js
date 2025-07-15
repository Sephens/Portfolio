import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiTrello,
  SiGithub,
  SiGooglechrome,
  SiPowerbi,
  SiTableau,
  SiScikitlearn,
  SiPandas,
  SiGooglecolab
} from "react-icons/si";



function Toolstack() {
  "use strict";
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
      </Col>
    </Row>
  );
}

export default Toolstack;
