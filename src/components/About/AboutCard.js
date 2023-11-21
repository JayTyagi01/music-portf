import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <strong className="purple" style={{ fontSize: "30px" }}>
              Music production{" "}
            </strong>
            <br />
            <br />
            At BlackNights, we believe that every artist has a unique story to
            tell through their music. Our music production services are tailored
            to transform your ideas into tracks that resonate with your
            audience. Whether you're a solo artist, band, or producer, our
            experienced team is here to help you craft a sound that stands out
            in today's competitive music landscape.
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong className="purple" style={{ fontSize: "30px" }}>
              Mixing & Mastering
            </strong>
            <br />
            <br />
            Achieving the perfect mix and master is crucial for ensuring that
            your music sounds polished and professional. Our engineers have a
            keen ear for detail, utilizing top-tier equipment to enhance the
            clarity, balance, and overall sonic quality of your tracks. Trust us
            to elevate your music to its full potential.
            <br />
            <br />
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong className="purple" style={{ fontSize: "30px" }}>
              Beatmaking
            </strong>
            <br />
            <br />
            Looking for the perfect beat to complement your lyrics or elevate
            your project? Our skilled beatmakers specialize in creating
            captivating and unique beats across various genres. Whether you're a
            rapper, singer, or content creator, we've got the beats that will
            make your work shine.
            <br />
            <br />
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong className="purple" style={{ fontSize: "30px" }}>
              Jingles & Advertisements
            </strong>
            <br />
            <br />
            Make your brand unforgettable with custom jingles and
            advertisements. Our team understands the importance of creating a
            sonic identity that resonates with your audience. From catchy
            jingles to impactful advertisements, we'll help you leave a lasting
            impression in the minds of your listeners.
            <br />
            <br />
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong className="purple" style={{ fontSize: "30px" }}>
              Background Scoring
            </strong>
            <br />
            <br />
            Enhance the emotional impact of your movie, short story, or YouTube
            video with our expert background scoring services. Our composers are
            adept at creating immersive soundscapes that enhance the narrative
            and captivate your audience, adding an extra layer of depth to your
            visual content.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
