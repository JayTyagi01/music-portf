import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Project from "./Project";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/omid-armin-0cbLoqUyz28-unsplash.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1
          className="project-heading"
          style={{ fontSize: "70px", paddingBottom: "20px" }}
        >
          Let's <strong className="purple">Create Something </strong>
          Extraordinary
        </h1>
        <p
          className="section"
          style={{ fontSize: "30px", paddingBottom: "20px" }}
        >
          Whether you're a seasoned artist or just starting your musical
          journey, BlackNights Music Studio is here to turn your aspirations
          into reality. Let's collaborate, innovate, and create music that
          leaves a lasting impact. Contact us today to book your session and
          experience the magic of BlackNights.
        </p>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>
              Services We <strong className="purple">Provide</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "300px",
              paddingBottom: "50px",
              borderRadius: "",
            }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ borderRadius: "30px" }}
            />
          </Col>
        </Row>

        <Project />
      </Container>
    </Container>
  );
}

export default About;
