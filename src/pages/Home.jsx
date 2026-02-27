import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF as fabFacebook, faInstagram as fabInstagram, faTwitter as fabTwitter, faLinkedinIn as fabLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getHomeData, getTestimonialsData } from '../services/api';

function Home() {
    const { language, t } = useLanguage();
    const { isDarkMode } = useTheme();
    const [homeData, setHomeData] = useState(null);
    const [testimonials, setTestimonials] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const home = await getHomeData();
            const testimonialsData = await getTestimonialsData();
            setHomeData(home);
            setTestimonials(testimonialsData);
        };
        loadData();
    }, []);

    if (!homeData || !testimonials) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const data = homeData[language];
    const testimonialsData = testimonials[language];

    if (!data || !testimonialsData) {
        return <div className="text-center py-5">Loading...</div>;
    }

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" id="hero">
                <Container className="text-center">
                    <h1 className="display-3 mb-4 fw-bold text-white">{data.hero.title}</h1>
                    <h2 className="h3 mb-4 text-white">{data.hero.subtitle}</h2>
                    <p className="lead mb-5 text-white">{data.hero.description}</p>
                    <div className="hero-buttons">
                        <Link to="/join" className="btn btn-light btn-lg me-3 mb-3">
                            {data.hero.buttons.join}
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg mb-3">
                            {data.hero.buttons.contact}
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-5" style={{
                backgroundColor: '#009aa4',
                color: 'white'
            }}>
                <Container>
                    <h2 className="text-center mb-5 text-white">{data.stats.title}</h2>
                    <Row>
                        {data.stats.items.map((stat, index) => (
                            <Col md={3} sm={6} key={index} className="mb-4 text-center">
                                <div className="stat-item">
                                    <h2 className="display-4 fw-bold mb-2">{stat.number}</h2>
                                    <p className="h5">{stat.label}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">{testimonialsData.title}</h2>
                    <Row>
                        {testimonialsData.testimonials.map((testimonial) => (
                            <Col md={4} key={testimonial.id} className="mb-4">
                                <Card className="h-100 shadow-sm testimonial-card border-0">
                                    <Card.Body className="d-flex flex-column p-4">
                                        <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="mb-3" style={{ color: '#009aa4' }} />
                                        <Card.Text className="flex-grow-1 mb-4">{testimonial.text}</Card.Text>
                                        <footer className="blockquote-footer mt-3">
                                            <cite title="Source Title">{testimonial.name}, {testimonial.role}</cite>
                                        </footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Social Media Section */}
            <section className="py-5" style={{ backgroundColor: '#f0f0f0' }}>
                <Container>
                    <h2 className="text-center mb-4">{data.socialMedia.title}</h2>
                    <div className="d-flex justify-content-center gap-4">
                        {data.socialMedia.platforms.map((platform, index) => (
                            <a
                                key={index}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                                style={{ color: '#009aa4', fontSize: '2rem' }}
                            >
                                <FontAwesomeIcon
                                    icon={
                                        platform.icon === 'facebook' ? fabFacebook :
                                            platform.icon === 'instagram' ? fabInstagram :
                                                platform.icon === 'twitter' ? fabTwitter :
                                                    fabLinkedin
                                    }
                                />
                            </a>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Home;
