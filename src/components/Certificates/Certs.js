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
import CCNA3 from "../../Assets/Certificates/CCNA3.png"
import CCNA2 from "../../Assets/Certificates/CCNA2.png"
import DevNet from "../../Assets/Certificates/DevNet.png"
import CyberOps from "../../Assets/Certificates/CyberOps.png"
import AWSCCP from "../../Assets/Certificates/AWSCCP.png"
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
              imgPath={AWSCCP}
              isBlog={false}
              title="AWS Certified Cloud Practioner"
              description="Earned a foundational certification  demonstrating a clear understanding of AWS Cloud concepts. services (EC2, S3, IAM, Lambda, etc), security and compliance, architecture, pricing and cost optimization, and support. Validates my availability to navigate AWS Cloud with best practices and identify core solutions for business needs."
             
              demoLink="https://www.credly.com/badges/82de672a-ac2e-4942-b915-41a8ae3fb67e/linked_in_profile"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GooglePm}
              isBlog={false}
              title="Google Project Management Professional"
              description="Completed six courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare me for introductory-level roles in Project Management. I am competent in initiating, planning and running both traditional and agile projects."
              
              demoLink="https://www.credly.com/badges/c871ec4f-dbde-48de-973b-d96b79ddf13c/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleCyberSecurity}
              isBlog={false}
              title="Google CyberSecurity Professional"
              description="Completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare me for entry-level roles in cybersecurity. I am competent in beginner-level Python, Linux, SQL, Security Information and Event Management (SIEM) tools, and Intrusion Detection Systems (IDS). I know how to identify common cybersecurity risks, threats, and vulnerabilities, as well as the techniques to mitigate."
              
              demoLink="https://www.credly.com/badges/b7d7c72d-b7cb-4b37-b2bc-5883b200e9a2/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleITSupport}
              isBlog={false}
              title="Google IT Support Professional"
              description="Completed five-courses, developed by Google, that include hands-on, practice-based assessments which are designed to prepare me for entry-level roles in IT support. I am competent in foundational skills, including troubleshooting and customer service, networking, operating systems, system administration, and security."
              
              demoLink="https://www.credly.com/badges/75badda6-0887-4931-a566-f49fd28dc5c6/public_url"              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetworkSecurity}
              isBlog={false}
              title="Cisco Network Security"
              description="I have knowledge to support endpoints, networks, and users including diagnostics and documentation as a member of a help desk team as well as an in-depth view of troubleshooting of networks and endpoints and knowledge and skills regarding supporting users and networks remotely. I participated in up to 10 labs and Cisco PT activities."
              
              demoLink="https://www.credly.com/badges/723143ba-94e1-4feb-9cd4-d66b9fad5720/linked_in_profile"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PythonEssentials1}
              isBlog={false}
              title="Cisco Python Essentuals 1"
              description="I have knowledge of the concepts of computer programming, the syntax and semantics of the Python language as well as demonstrate the ability to accomplish coding tasks related to the essentials of programming in the Python language and resolve implementation challenges using the Python Standard Library."
              
              demoLink="https://www.credly.com/badges/c96c3cf5-1abc-4d8f-a422-7888648832e1/linked_in_profile"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CybersecurityAnalyst}
              isBlog={false}
              title="Cisco Junior Cybersecurity Analyst"
              description="I understand techniques to monitor and protect the network, including firewalls, cloud security, and cryptography, I am familiar with security alerts and governance, and the skills to perform network vulnerability assessment and create a risk management plan, including forensic investigations and incident response planning."
              
              demoLink="https://www.credly.com/badges/67afd8fe-7188-4225-bc4f-15dda7fb8c4f/linked_in_profile"              
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CyberOps}
              isBlog={false}
              title="CyberOps Associate"
              description="Completed the CyberOps Associate course. I have a broad understanding of Security Operations. I developed problem-solving skills to detect and analyze intrusions and monitor the network by completing up to 30 hours of 52 hands-on labs using virtual machines (Security Onion - ELK) and/or Cisco Packet Tracer."
              
              demoLink="https://www.credly.com/badges/82de672a-ac2e-4942-b915-41a8ae3fb67e/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevNet}
              isBlog={false}
              title="DevNet Associate"
              description="Completed the DevNet Associate course, completed 25+ hands-on labs using a virtual lab environment and achieved this student level credential. I have a broad understanding in the areas of Python coding, using Linux, Cisco DevNet, Software Development and Design, Understanding and Using APIs, Network Fundamentals, Application Deployment and Security, Infrastructure and Automation and Cisco Platforms and Development."
              
              demoLink="https://www.credly.com/badges/2a298c7f-6984-478c-bc92-b7ef6ace25f4/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CCNA2}
              isBlog={false}
              title="CCNA 2: Switching, Routing, and Wireless Essentials"
              description="Completed the Switching, Routing, and Wireless Essentials course and achieved this student level credential. I have a foundation in switching operations, wired and wireless LAN configuration using security best practices, redundancy protocols, and developed problem-solving skills. I have participated in up to 45 practice activities and accumulated up to 21 hours of hands-on labs using Cisco hardware and/or the Cisco Packet Tracer tool"
              
              demoLink="https://www.credly.com/badges/c19a346e-4e60-45ad-94fe-f68685b08a5c/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CCNA3}
              isBlog={false}
              title="CCNA 3: Endpoint Networking, Security, and Automation"
              description="Successfully completed the Enterprise Networking, Security and Automation course and achieved this student level credential. I have a foundation in scalable network architectures, dynamic routing, mitigation of security threats, wide-area networks, virtualization, automation of programmable networks. I participated in up to 41 lab activities and accumulated up to 15 hours of hands-on labs using Cisco hardware and/or Cisco Packet Tracer tool."
              
              demoLink="https://www.credly.com/badges/9007ec76-8938-4568-8c0a-ba42377282da/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CCNA1}
              isBlog={false}
              title="CCNA 1"
              description="I have knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources. I participated in up to 54 labs and accumulated up to 14 hours of hands-on labs using Cisco hardware or Packet Tracer tool"
              
              demoLink="https://www.credly.com/badges/e39abb38-0095-404b-a97f-ec79d08c9203/linked_in_profile"              
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntroCyber}
              isBlog={false}
              title="Cisco Introduction to Cybersecurity"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              
              demoLink="#"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IctaCyber}
              isBlog={false}
              title="ICTA Cybersecurity Training"
              description="C++, Matplotlib, Chart.js, OpenCV, A tool to distinguish between malicious and benign files based on visualizing the files in 3D geometrical shapes formats."
              
              demoLink="#"              
            />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}
