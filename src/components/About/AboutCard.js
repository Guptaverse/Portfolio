import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Gupta </span>
            from <span className="purple"> New Delhi, India. </span>
            <br />I am 2023 Batch Passout, B.Tech student of Electronics & Communication
            from NSUT East Campus, New Delhi. I'm{" "}
            <b className="purple"> Full Stack Developer</b> and
            <b className="purple"> Competitive programmer</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development and Software engineering
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>

            <li className="about-activity">
              <ImPointRight />
              Playing Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
