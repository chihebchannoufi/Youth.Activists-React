import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getPartnersData } from '../services/api';

function Partners() {
    const { language, t } = useLanguage();
    const [partnersData, setPartnersData] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');

    useEffect(() => {
        const loadData = async () => {
            const data = await getPartnersData();
            setPartnersData(data);
        };
        loadData();
    }, []);

    if (!partnersData) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const data = partnersData[language];

    if (!data) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const filteredPartners = filterCategory === 'all'
        ? data.partners
        : data.partners.filter(p => p.category === filterCategory);

    return (
        <div className="partners-page component-wrapper">
            <Container className="py-5">
                <h1 className="text-center mb-3"><strong>{data.title}</strong></h1>
                <p className="text-center text-muted mb-5">{data.description}</p>

                {/* Category Filter */}
                <div className="text-center mb-4">
                    {data.categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`btn btn-sm ${filterCategory === cat.id ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
                            onClick={() => setFilterCategory(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Partners Grid */}
                <Row className="justify-content-center">
                    {filteredPartners.map(partner => (
                        <Col md={3} sm={4} xs={6} key={partner.id} className="mb-4">
                            <Card className="h-100 shadow-sm partner-card text-center border-0">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '100px', objectFit: 'contain' }}
                                    />
                                    <Card.Title className="h6">{partner.name}</Card.Title>
                                    {partner.website && partner.website !== '#' && (
                                        <a
                                            href={partner.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline-primary mt-2"
                                        >
                                            {language === 'ar' ? 'زيارة الموقع' : 'Visiter'}
                                        </a>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Call to Action */}
                <section className="mt-5 p-5 text-center rounded" style={{ backgroundColor: '#f0f0f0' }}>
                    <h2 className="mb-3">{data.callToAction.title}</h2>
                    <p className="lead mb-4">{data.callToAction.description}</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        {data.callToAction.button}
                    </Link>
                </section>
            </Container>
        </div>
    );
}

export default Partners;
