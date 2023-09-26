import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import mongoMovies from "../../Assets/Projects/MongoMovies.JPG"
import studyRoom from "../../Assets/Projects/studyRoom.JPG"
import SIH from "../../Assets/Projects/sih.png"
import studentSphere from "../../Assets/Projects/studentSphere.JPG"
import urlShortener from "../../Assets/Projects/urlShortner.JPG"
import chatApp from "../../Assets/Projects/chatApp.JPG"


function Projects() {
  return (
    <>
    <Particle /> 
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studyRoom}
              title="StudyRoom [Frontend]"
              description="StudyRoom is a web application that enhances group study productivity. With features like a study schedule, pomodoro technique, quizzes, and a leaderboard, it promotes effective time management and collaboration.Tech Stack used : MERN + Sockit.io"
              link="https://github.com/Guptaverse/StudyRoomv1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mongoMovies}
              title="MongoMovies"
              description="We try to create a platform where you can search the list of your favourite movies without any difficulty. So I try to create a website called MongoMovies with almost all the features that can solve your problems while searching for your fav movie. I have used React.js to make this project."
              link="https://github.com/Guptaverse/MongoMovies"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlShortener}
              title="Url Shortener Service"
              description="I have created this project to solve long URLs of webpages. So basically this is a website which generate ShortUrl using ShortId package and map it to original URL.It has also shows Past converted URLs and their Analytics which includes No. of clicks ,Redirected URL and ShortID. I have use React.js in frontend and Node.js,Express in Backend."
              link="https://github.com/Guptaverse/URL-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              title="Chatting Application"
              description="I have created this project for Learning Socket.io , This Web-App basically for realtime messaging between multiple clients , which is also known as group messenger.I have used Node.js and Sockit.io for making this project."
              link="https://github.com/Guptaverse/ChatApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentSphere}
              title="StudentSphere"
              description="This is a website where student can share study material with other student, I built this project as I face problem regarding college syllabus and study materials such as notes,e-book etc.we built this project using MERN stack."
              link="https://github.com/Guptaverse/StudySphere"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SIH}
              title="Moving Vehicle Plate Detection [Frontend]"
              description="This is Team Project which we created for the Smart India Hackathon Edition 2022 ,I worked as frontend developer in this project. This webApp helps to detect number plate from moving vehicle and i designed the frontend for it."
              link="https://github.com/SumitKrShakya/Smart-India-Hackathon-2022"
            />
          </Col>

        </Row>
      </Container>
    </Container></>
  );
}

export default Projects;
