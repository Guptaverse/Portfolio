import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "./ShivamResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <>
    <Particle />
    <Container fluid className="resume-section">
      <Container>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Lejhro Technology Pvt Ltd."
              data="Sept 2022 - Nov 2022"
              content={[
                "I worked as Reactjs Developer Intern at Lejhro Technology Pvt Ltd. ",
                "Worked on different features of website and mostly the frontend part of Lejhro website.",
                "Tech stack that i worked on : React,Redux,Bootstrap and Ant-design"
              ]}
            />
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title="Mastering Data Structures & Algorithms using C++ by Udemy"

            />
            <Resumecontent
              title="The Complete Frontend Engineering by Udemy"
            />
            <Resumecontent
              title="SQL Essential Training by LinkedIn Learning"
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="NSUT East Campus(Formerly AIACTR), New Delhi "
              data="B.Tech in ECE [2019-2023]"
              content={[`CGPA: 8.62 `]}
            />
            <Resumecontent
              title="Sarvodaya Bal vidhyalaya,New Delhi"
              data="12th Board [PCM]"
              content={["Precentage: 81.4%"]}
            />
            <Resumecontent
              title="GBSSS Molarband,New Delhi "
              data="10th Board"
              content={["CGPA : 8.2"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "➔Higgest rating on Codechef 1638",
                "➔AIR 315 rank in Facebook Hackercup Qualification round 2022",
                "➔532 rank in Codechef Starters-38 ",
                "➔2740 rank in Google Kickstart in Google Kickstart Round-B 2022",
                "➔Qualified Internal Smart India Hackathon 2022",
              ]}
            />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}> */}
          {/* <Button variant="primary" href={ResumePdf} target="_blank"> */}
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        {/* </Row> */}
      </Container>
    </Container></>
  );
}

export default Resume;
