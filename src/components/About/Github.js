import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {

  const colourTheme = 
  {
    "light": [
      "#f0f0f0",
      "#c4edde",
      "#7ac7c4",
      "#f73859",
      "#384259"
    ],
    "dark": [
      "hsl(0, 0%, 22%)",
      
      "#3BC6AF",
      "#3BC6AF",
      // "#4D455D",
      "#7DB9B6",
      "#F5E9CF",
      // "#E96479"
    ]
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="guptaverse"
        colorScheme='dark'
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
