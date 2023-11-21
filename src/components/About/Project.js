import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Cards from "./Cards";
import sayin from "../../Assets/Projects/download (3).jpeg";
import MusicPlayer from "../../Assets/Projects/download.jpeg";
import client from "../../Assets/Projects/download (4).jpeg";
import E_commerce from "../../Assets/Projects/download (1).jpeg";
import News from "../../Assets/Projects/download (2).jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Why Choose <strong className="purple">BlackNights? </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Cards
              imgPath={sayin}
              isBloag={false}
              title="Professionalism"
              description=" Our team consists of experienced professionals dedicated to delivering high-quality results on every project."
            />
          </Col>
          <Col md={4} className="project-card">
            <Cards
              imgPath={MusicPlayer}
              isBloag={false}
              title="Cutting-edge Technology"
              description="We invest in the latest technology to ensure that your music benefits from the best possible production tools.
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <Cards
              imgPath={E_commerce}
              isBloag={false}
              title="Versatility"
              description="From music production to scoring for various media, our diverse range of services caters to the needs of musicians, content creators, and filmmakers alike.
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <Cards
              imgPath={News}
              isBloag={false}
              title="Passion for Music"
              description="We're not just a studio; we're a community of music enthusiasts committed to helping artists achieve their dreams.
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <Cards
              imgPath={client}
              isBloag={false}
              title="Client Collaboration"
              description="We prioritize open communication and collaboration with our clients throughout the creative process. Your input and vision are integral to our work, ensuring that the final product aligns perfectly with your artistic goals.
              "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
