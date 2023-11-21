import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who <span className="purple"> We </span> Are
            </h1>
            <p className="home-about-body">
              Our passion for music production is the driving force behind our
              state-of-the-art studio,
              <br />
              <br />
              equipped with cutting-edge technology and a team of skilled
              professionals dedicated to
              <br />
              <br />
              bringing your musical vision to fruition. &nbsp;
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              FIND <span className="purple">ME</span> ON
            </h1>
            <p>Feel free to connect with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
