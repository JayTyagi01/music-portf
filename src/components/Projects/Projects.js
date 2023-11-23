import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Testimonial from "./Testimonial";

const Projects = () => {
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{ fontSize: "70px" }}>
            My <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are my <strong className="purple"> Projects </strong> I'have{" "}
            <span className="purple"> worked.</span>
          </p>
        </Container>
        <Testimonial />
      </Container>
    </div>
  );
};

export default Projects;
