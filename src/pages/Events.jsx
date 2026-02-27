import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Modal } from 'react-bootstrap';
import { useLanguage } from '../contexts/LanguageContext';
import { getEventsData } from '../services/api';

function Events() {
    const { language, t } = useLanguage();
    const [eventsData, setEventsData] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [activeTab, setActiveTab] = useState('upcoming');

    useEffect(() => {
        const loadData = async () => {
            const data = await getEventsData();
            setEventsData(data);
        };
        loadData();
    }, []);

    if (!eventsData) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const data = eventsData[language];

    if (!data) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(language === 'ar' ? 'ar-TN' : 'fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const openModal = (event) => {
        setSelectedEvent(event);
    };

    const closeModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="events-page component-wrapper">
            <Container className="py-5">
                <h1 className="text-center mb-5"><strong>{data.title}</strong></h1>

                {/* Tabs */}
                <div className="text-center mb-4">
                    <button
                        className={`btn ${activeTab === 'upcoming' ? 'btn-primary' : 'btn-outline-primary'} mx-2 mb-2`}
                        onClick={() => setActiveTab('upcoming')}
                    >
                        {data.upcomingTitle}
                    </button>
                    <button
                        className={`btn ${activeTab === 'past' ? 'btn-primary' : 'btn-outline-primary'} mx-2 mb-2`}
                        onClick={() => setActiveTab('past')}
                    >
                        {data.pastTitle}
                    </button>
                </div>

                {/* Events Display */}
                {activeTab === 'upcoming' && (
                    <section>
                        <h2 className="mb-4">{data.upcomingTitle}</h2>
                        <Row>
                            {data.upcomingEvents.map(event => (
                                <Col md={6} key={event.id} className="mb-4">
                                    <Card className="h-100 shadow-sm event-card">
                                        <Card.Img
                                            variant="top"
                                            src={event.image}
                                            alt={event.title}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <Card.Body>
                                            <Badge bg="primary" className="mb-2">{event.category}</Badge>
                                            <Card.Title>{event.title}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted">
                                                    📅 {formatDate(event.date)} - ⏰ {event.time}
                                                </small>
                                                <br />
                                                <small className="text-muted">📍 {event.location}</small>
                                            </Card.Text>
                                            <Card.Text>{event.description}</Card.Text>
                                            {event.registrationLink && (
                                                <a href={event.registrationLink} className="btn btn-primary btn-sm">
                                                    {language === 'ar' ? 'التسجيل' : 'S\'inscrire'}
                                                </a>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                )}

                {activeTab === 'past' && (
                    <section>
                        <h2 className="mb-4">{data.pastTitle}</h2>
                        <Row>
                            {data.pastEvents.map(event => (
                                <Col md={6} key={event.id} className="mb-4">
                                    <Card
                                        className="h-100 shadow-sm event-card"
                                        onClick={() => openModal(event)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={event.image}
                                            alt={event.title}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <Card.Body>
                                            <Badge bg="secondary" className="mb-2">{event.category}</Badge>
                                            <Card.Title>{event.title}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted">
                                                    📅 {formatDate(event.date)}
                                                </small>
                                                <br />
                                                <small className="text-muted">📍 {event.location}</small>
                                            </Card.Text>
                                            <Card.Text>{event.description}</Card.Text>
                                            {event.attendees && (
                                                <small className="text-muted">
                                                    {language === 'ar' ? 'الحاضرون:' : 'Participants:'} {event.attendees}
                                                </small>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                )}
            </Container>

            {/* Event Detail Modal */}
            <Modal show={selectedEvent !== null} onHide={closeModal} centered size="lg">
                {selectedEvent && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedEvent.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                className="img-fluid mb-3 rounded"
                            />
                            <p><strong>{language === 'ar' ? 'التاريخ:' : 'Date:'}</strong> {formatDate(selectedEvent.date)}</p>
                            <p><strong>{language === 'ar' ? 'الموقع:' : 'Lieu:'}</strong> {selectedEvent.location}</p>
                            <p>{selectedEvent.description}</p>
                            {selectedEvent.attendees && (
                                <p><strong>{language === 'ar' ? 'الحاضرون:' : 'Participants:'}</strong> {selectedEvent.attendees}</p>
                            )}
                            {selectedEvent.beneficiaries && (
                                <p><strong>{language === 'ar' ? 'المستفيدون:' : 'Bénéficiaires:'}</strong> {selectedEvent.beneficiaries}</p>
                            )}

                            {/* Gallery */}
                            {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
                                <div className="mt-4">
                                    <h5>{language === 'ar' ? 'معرض الصور' : 'Galerie'}</h5>
                                    <Row>
                                        {selectedEvent.gallery.map((img, idx) => (
                                            <Col md={4} key={idx} className="mb-3">
                                                <img src={img} alt={`Gallery ${idx + 1}`} className="img-fluid rounded" />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-secondary" onClick={closeModal}>
                                {t('common.close')}
                            </button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default Events;
