import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import sayin from "../../Assets/Projects/Sayin-Chat-App.png";
import MusicPlayer from "../../Assets/Projects/Music-Player.png";
import WeatherReport from "../../Assets/Projects/Weather-Report-App.png";
import Jarvis from "../../Assets/Projects/project-jarvis.png";
import Snake from "../../Assets/Projects/Project-Snake.png";
import Portfolios from "../../Assets/Projects/portfolio-influencer.png";
import E_commerce from "../../Assets/Projects/e-commerce.png";
import News from "../../Assets/Projects/news_application.jpg";
import Weather from "../../Assets/Projects/weather_app.jpg";

const Projects = () => {
  return (
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
    </Container>
  );
};

export default Projects;
