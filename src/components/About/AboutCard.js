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
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            As a seasoned full-stack web developer with a degree in IT and over
            five years of experience, I am proficient not only in crafting
            elegant and efficient web solutions but also in a diverse range of
            technology domains. With a solid foundation in computer networking
            and cybersecurity, I bring a comprehensive understanding of
            infrastructure and security considerations to my development
            projects, ensuring robust and resilient solutions. Additionally, my
            expertise extends to project management methodologies, particularly
            Agile Scrum, where I leverage my skills to lead teams and drive
            projects to success with agility and efficiency. My proficiency in
            cloud computing further enhances my ability to design scalable and
            resilient applications that harness the power of cloud platforms. In
            every endeavor, I approach challenges with a strategic mindset and a
            commitment to excellence, striving to deliver results that not only
            meet but exceed expectations. I am not just a developer; I am a
            multifaceted technologist, equipped with the knowledge and skills to
            innovate and excel in today's dynamic tech landscape.
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
