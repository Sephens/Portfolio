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
              description="I have completed six courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare me for introductory-level roles in Project Management. I am competent in initiating, planning and running both traditional and agile projects."
              ghLink=""
              demoLink="https://www.credly.com/badges/c871ec4f-dbde-48de-973b-d96b79ddf13c/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleCyberSecurity}
              isBlog={false}
              title="Google CyberSecurity Professional"
              description="I have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare me for entry-level roles in cybersecurity. I am competent in beginner-level Python, Linux, SQL, Security Information and Event Management (SIEM) tools, and Intrusion Detection Systems (IDS). I know how to identify common cybersecurity risks, threats, and vulnerabilities, as well as the techniques to mitigate."
              ghLink=""
              demoLink="https://www.credly.com/badges/b7d7c72d-b7cb-4b37-b2bc-5883b200e9a2/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleITSupport}
              isBlog={false}
              title="Google IT Support Professional"
              description="I have completed five-courses, developed by Google, that include hands-on, practice-based assessments which are designed to prepare me for entry-level roles in IT support. I am competent in foundational skills, including troubleshooting and customer service, networking, operating systems, system administration, and security."
              ghLink=""
              demoLink="https://www.credly.com/badges/75badda6-0887-4931-a566-f49fd28dc5c6/public_url"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CCNA1}
              isBlog={false}
              title="CCNA 1"
              description="I have knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources. I participated in up to 54 labs and accumulated up to 14 hours of hands-on labs using Cisco hardware or Packet Tracer tool"
              ghLink=""
              demoLink="https://www.credly.com/badges/e39abb38-0095-404b-a97f-ec79d08c9203/linked_in_profile"              
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
              title="Cisco Junior Cybersecurity Analyst"
              description="I understand techniques to monitor and protect the network, including firewalls, cloud security, and cryptography, I am familiar with security alerts and governance, and the skills to perform network vulnerability assessment and create a risk management plan, including forensic investigations and incident response planning."
              ghLink=""
              demoLink="https://www.credly.com/badges/67afd8fe-7188-4225-bc4f-15dda7fb8c4f/linked_in_profile"              
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
              description="I have knowledge to support endpoints, networks, and users including diagnostics and documentation as a member of a help desk team as well as an in-depth view of troubleshooting of networks and endpoints and knowledge and skills regarding supporting users and networks remotely. I participated in up to 10 labs and Cisco PT activities."
              ghLink=""
              demoLink="https://www.credly.com/badges/723143ba-94e1-4feb-9cd4-d66b9fad5720/linked_in_profile"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PythonEssentials1}
              isBlog={false}
              title="Cisco Python Essentuals 1"
              description="I have knowledge of the concepts of computer programming, the syntax and semantics of the Python language as well as demonstrate the ability to accomplish coding tasks related to the essentials of programming in the Python language and resolve implementation challenges using the Python Standard Library."
              ghLink=""
              demoLink="https://www.credly.com/badges/c96c3cf5-1abc-4d8f-a422-7888648832e1/linked_in_profile"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
