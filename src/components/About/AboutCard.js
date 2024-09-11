import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Steven Odhiambo </span>
            from <span className="purple"> Kisumu, Kenya.</span>
            <br />
              I am an upcoming and enthusiastic software developer
 with three years of experience in software development
 and design. Strong creative and analytical skills. Team
 player with an eye for detail.
 Considered an expert in troubleshooting complex problems
 and reaching innovative solutions while adhering to rules
 and requirements of project scope. Dynamic team player
 when interfacing with other staff members, vendors, and
 end-users.Strong work ethic and a commitment to
 delivery, with the willingness to take on and be deployed to
 new tasks and new environments


I am also an experienced ICT professional with a strong background in implementing and maintaining effective Quality Management Systems (QMS) within the IT department. Proficient in drafting and executing ICT maintenance schedules, managing hardware and software systems, and configuring network infrastructure. Skilled in overseeing the installation, configuration, and certification of ICT systems, as well as monitoring equipment performance to ensure optimal functionality. Adept at developing risk registers, data backup schedules, and ICT work plans, including procurement plans and budgets. Competent in managing Active Directory, email systems, and telecommunication facilities, as well as maintaining firewall policies and system interfaces. Experienced in updating corporate databases, websites, and ICT equipment inventories. Strong focus on network security, traffic monitoring, and ensuring high-speed connectivity. Committed to keeping up with technological advancements and emerging cybersecurity risks, providing staff training and support as needed. Skilled in the commissioning, repair, and maintenance of a wide range of ICT equipment, ensuring seamless operational efficiency. I have undertaken many different roles, from system administration to software development, and network management in the course of my career. I have overseen the lifecycle of many IT projects through the various phases starting from planning to actual deployment, within the stipulated time frame and even going beyond what was originally envisaged. Diagnosing technical problem and developing suitable solutions, in most cases has been a vital part of my work.

            <br />
            <br />
            <span className="purple">
              Apart from coding, some other activities that I love to do
              include!
            </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Networking
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning always
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> ...
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The Constituent elements of the world are order and chaos" An
            orderly code is an orderly mind, meticulously crafting the digital
            symphony of logic and creativity. A chaotic code is a chaotic
            labyrinth, where every twist and turn leads to confusion, obscuring
            the path to clarity and hindering progress at every step.{" "}
          </p>
          <footer className="blockquote-footer">Steven</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
