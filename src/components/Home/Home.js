import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/h1.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "../../style.css";

function Home() {
  return (
    <section>
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Shivam Gupta</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img  src={img1} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
      
    </section>
  );
}

export default Home;
