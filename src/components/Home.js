import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div id="section1" className="d-flex flex-column justify-content-center" style={{minHeight: '100vh', padding: '180px 50px'}}>
      <Container className="text-center mb-5">
        <h1 className="display-4 mb-4">Welcome to Youth Activists!</h1>
        <h2 className="h3 mb-4">Nonprofit Organization</h2>
        <br></br>
        <br></br>
        <Link to="/inscription" className="btn btn-light btn-lg mb-3">Join Our Community</Link>
        <p className="lead">Be part of something bigger</p>
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-5">What Our Members Say</h2>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm testimonial-card">
              <Card.Body className="d-flex flex-column">
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-primary mb-3" />
                <Card.Text className="flex-grow-1">
                  "Joining Youth Activists has been a transformative experience. I've learned so much about community engagement and made lifelong friends!"
                </Card.Text>
                <footer className="blockquote-footer mt-3">
                  <cite title="Source Title">Chiheb Channoufi, Member since 2020</cite>
                </footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm testimonial-card">
              <Card.Body className="d-flex flex-column">
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-primary mb-3" />
                <Card.Text className="flex-grow-1">
                  "The projects we work on at Youth Activists are truly impactful. It's amazing to see how our efforts can make a real difference in our community."
                </Card.Text>
                <footer className="blockquote-footer mt-3">
                  <cite title="Source Title">Chiheb</cite>
                </footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm testimonial-card">
              <Card.Body className="d-flex flex-column">
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-primary mb-3" />
                <Card.Text className="flex-grow-1">
                  "Youth Activists has given me the platform and resources to advocate for causes I'm passionate about. It's empowering to be part of such a supportive community."
                </Card.Text>
                <footer className="blockquote-footer mt-3">
                  <cite title="Source Title">chiheb</cite>
                </footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image partner-image" src="/images/partner.png" alt="Youth in action" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image partner-image" src="/images/partner.png" alt="Community project" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image partner-image" src="/images/partner.png" alt="Global network" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Home;