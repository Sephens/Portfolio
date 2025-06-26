import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import wr from "../../Assets/Projects/wr.jpeg";
import hrDash from "../../Assets/Projects/hr_dash.png"
import powerDash from "../../Assets/Projects/powerDash.png"
import titanicDataSet from "../../Assets/Projects/titanic-dataset-eda.png"
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";



export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrDash}
              isBlog={false}
              title="From Data to Insights: Building a Dynamic HR Dashboard in Tableau"
              description=" Transformed raw HR data into a stunning, interactive dashboard with Tableau. Designed intuitive visualizations for workforce trends, demographics, and pay equity analysis. Features dynamic filters, drill-down capabilities, and polished UI. Empowers HR teams with real-time insights for data-driven decisions. A perfect blend of analytics and design—turning complexity into clarity.  
              
              ✨Skills: Tableau, Data Storytelling, Dashboard Design
              "
              ghLink="https://github.com/Sephens/CyberShujaa-Data-and-AI/tree/master/assignments/BI/Tableau"
              demoLink="https://www.kaggle.com/code/sephensb/netflix-data-wrangling"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerDash}
              isBlog={false}
              title="Revolutionizing Hotel Analytics: A Power BI Dashboard for Smarter Revenue & Guest Experience Optimization"
              description="Transformed hotel data into strategic gold! Designed an interactive Power BI dashboard with 20+ DAX measures, predictive analytics, and real-time KPIs. Boosted revenue insights, occupancy tracking, and guest experience through AI-powered visuals. A star-schema model ensured lightning-fast analytics."
              ghLink="https://github.com/Sephens/CyberShujaa-Data-and-AI/tree/master/assignments/BI/powerbi"
              demoLink="https://www.kaggle.com/code/sephensb/netflix-data-wrangling"              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wr}
              isBlog={false}
              title="Netflix Data Wrangling"
              description="This project demonstrates my data wrangling skills by cleaning and preparing Netflix's movie and TV show data for analysis. I used Python's Pandas library to handle missing data, correct inconsistencies, and structure the dataset properly.

              Project Highlights
                Data Cleaning: Handled missing values in director, cast, and country fields
                Feature Engineering: Split duration into numeric values and units
                Data Validation: Ensured logical consistency (e.g., no release dates after addition dates)
                Kaggle Integration: Worked directly with Kaggle's dataset environment
              
              "
              ghLink="https://github.com/Sephens/CyberShujaa-Data-and-AI/tree/master/assignments/data_wrangling"
              demoLink="https://www.kaggle.com/code/sephensb/netflix-data-wrangling"              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titanicDataSet}
              isBlog={false}
              title="Decoding Survival on the Titanic: A Data-Driven Exploration of Privilege, Demographics, and Disaster Response"
              description="This exploratory data analysis (EDA) of the Titanic dataset uncovers the socioeconomic and demographic factors influencing survival. Using Python (Pandas, Seaborn, Matplotlib), I analyzed passenger records to reveal stark disparities; gender, class, and age dramatically impacted outcomes. Key findings include 74% female vs. 19% male survival and 1st-class passengers’ 3x higher survival rate. The project highlights data cleaning, visualization, and actionable insights for crisis response."
              ghLink="https://github.com/Sephens/CyberShujaa-Data-and-AI/tree/master/assignments/EDA"
              demoLink="https://www.kaggle.com/code/sephensb/decoding-survival-on-the-titanic-data-driven-eda"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Code-Crumbs"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink="https://code-crumbs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bioinformatics"
              description="Analyzing Human Preproinsulin Sequence, Calculating Molecular Weight, and Net Charge"
              ghLink="https://github.com/Sephens/Bioinformatics-Project"
              demoLink="#"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Binary Visualization Tool in 3D Software - Ongoing"
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
