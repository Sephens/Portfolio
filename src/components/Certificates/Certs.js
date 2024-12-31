import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCard";
import Particle from "../Particle";
import GoogleCyberSecurity from "../../Assets/Certificates/google-cyber.png"
import GooglePm from "../../Assets/Certificates/google-pm.png"
import GoogleITSupport from "../../Assets/Certificates/google-support.png"
import CCNA1 from "../../Assets/Certificates/ccna1.png"
import CybersecurityAnalyst from "../../Assets/Certificates/Cybersecurity-Analyst.png"
import IntroCyber from "../../Assets/Certificates/Intro-cyber.png"
import NetworkSecurity from "../../Assets/Certificates/Network-security.png"
import PythonEssentials1 from "../../Assets/Certificates/Python_Essentials1.png"
import IctaCyber from "../../Assets/Certificates/icta-cyber.png"
import hcia from "../../Assets/Certificates/hcia.png"

export default function Certs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are my Achievements so far ...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GooglePm}
              isBlog={false}
              title="Google Project Management Professional"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=""
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleCyberSecurity}
              isBlog={false}
              title="Google CyberSecurity Professional"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink="https://code-crumbs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleITSupport}
              isBlog={false}
              title="Google IT Support Professional"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              ghLink=""
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CCNA1}
              isBlog={false}
              title="CCNA 1"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              ghLink=""
              demoLink="#"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntroCyber}
              isBlog={false}
              title="Cisco Introduction to Cybersecurity"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              ghLink=""
              demoLink="#"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CybersecurityAnalyst}
              isBlog={false}
              title="Cisco Cybersecurity Analyst"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              ghLink=""
              demoLink="#"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IctaCyber}
              isBlog={false}
              title="ICTA Cybersecurity Training"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              ghLink=""
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetworkSecurity}
              isBlog={false}
              title="Cisco Network Security"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              ghLink=""
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PythonEssentials1}
              isBlog={false}
              title="Cisco Python Essentuals 1"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              ghLink=""
              demoLink="#"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
