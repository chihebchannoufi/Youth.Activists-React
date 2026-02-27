import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { getAboutData } from '../services/api';

function About() {
    const { language } = useLanguage();
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await getAboutData();
            setAboutData(data);
        };
        loadData();
    }, []);

    if (!aboutData) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const data = aboutData[language];

    if (!data) {
        return <div className="text-center py-5">Loading...</div>;
    }

    return (
        <div className="about-page component-wrapper">
            <Container className="py-5">
                <h1 className="text-center mb-5"><strong>{data.title}</strong></h1>

                {/* Presentation Section */}
                <section className="mb-5">
                    <Row className="align-items-center mb-5">
                        <Col md={6}>
                            <h2 className="mb-4" style={{ color: '#009aa4' }}>{data.presentation.title}</h2>
                            <div className="about-content">
                                <p className="lead">{data.presentation.content}</p>
                                <p className="h5 mb-3" style={{ color: '#fd5d5d' }}>{data.presentation.zone}</p>
                                <p style={{ textAlign: 'justify', color: '#434343' }}>{data.presentation.description}</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img
                                src="/images/Youthh.jpg"
                                alt="Youth Activists"
                                className="img-fluid rounded shadow about-image"
                            />
                        </Col>
                    </Row>
                </section>

                {/* Vision Section */}
                <section className="mb-5 p-4 rounded" style={{ backgroundColor: '#f0f0f0' }}>
                    <h3 className="mb-3" style={{ color: '#009aa4' }}>{data.vision.title}</h3>
                    <p style={{ textAlign: 'justify', color: '#434343' }}>{data.vision.content}</p>
                </section>

                {/* Objectives Section */}
                <section className="mb-5">
                    <h3 className="mb-4 text-center" style={{ color: '#009aa4' }}>{data.objectives.title}</h3>
                    <Row>
                        {data.objectives.items.map((objective, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <div className="objective-card p-4 h-100 border rounded shadow-sm">
                                    <h4 className="mb-3">{objective.title}</h4>
                                    <p style={{ color: '#434343' }}>{objective.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </section>

                {/* Methodology Section */}
                <section className="mb-5 p-4 rounded" style={{ backgroundColor: '#f0f0f0' }}>
                    <h3 className="mb-3" style={{ color: '#009aa4' }}>{data.methodology.title}</h3>
                    <p style={{ textAlign: 'justify', color: '#434343' }}>{data.methodology.content}</p>
                </section>

                {/* Organization Structure */}
                <section>
                    <Row className="align-items-center">
                        <Col md={6} className="order-md-2">
                            <h3 className="mb-4" style={{ color: '#009aa4' }}>{data.organization.title}</h3>
                            <ul className="list-unstyled about-structure">
                                {data.organization.structure.map((item, index) => (
                                    <li key={index} className="mb-3 p-3 border-bottom">
                                        {item.name}
                                        {item.link && (
                                            <a href={item.link} className="ms-3" style={{ color: '#009aa4' }}>
                                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={6} className="order-md-1">
                            <img
                                src="/images/youth1.jpg"
                                alt="Organization"
                                className="img-fluid rounded shadow about-image"
                            />
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default About;
