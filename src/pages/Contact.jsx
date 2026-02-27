import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getContactData, submitContactForm } from '../services/api';

function Contact() {
    const { language, t } = useLanguage();
    const { isDarkMode } = useTheme();
    const [contactData, setContactData] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const data = await getContactData();
            setContactData(data);
        };
        loadData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Show alert instead of submitting
            const alertMessage = language === 'ar'
                ? 'شكرا لك، يرجى التواصل معنا عبر الهاتف أو البريد الإلكتروني'
                : 'Merci de nous contacter par téléphone ou par email';

            alert(alertMessage);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitStatus({
                type: 'info',
                message: alertMessage
            });
        } catch (error) {
            setSubmitStatus({
                type: 'danger',
                message: language === 'ar' ? 'حدث خطأ' : 'Une erreur s\'est produite'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!contactData) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const data = contactData[language];

    if (!data) {
        return <div className="text-center py-5">Loading...</div>;
    }

    return (
        <div className="contact-page component-wrapper">
            <Container className="py-5">
                <header className="text-center mb-5">
                    <h1 className="display-4 mb-3"><strong>{data.title}</strong></h1>
                    <p className="lead">{data.subtitle}</p>
                </header>

                <Row className="mb-5">
                    {/* Contact Info */}
                    <Col md={6} className="mb-4">
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body className="p-4">
                                <h3 className="mb-4">{data.info.title}</h3>

                                <div className="mb-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3 mt-1" style={{ color: '#009aa4', fontSize: '1.5rem' }} />
                                        <div>
                                            <strong>{language === 'ar' ? 'العنوان:' : 'Adresse:'}</strong>
                                            <p className="mb-0">{data.info.address}</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mb-3">
                                        <FontAwesomeIcon icon={faPhone} className="me-3" style={{ color: '#009aa4', fontSize: '1.5rem' }} />
                                        <div>
                                            <strong>{language === 'ar' ? 'الهاتف:' : 'Téléphone:'}</strong>
                                            <p className="mb-0">{data.info.phone}</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mb-3">
                                        <FontAwesomeIcon icon={faEnvelope} className="me-3" style={{ color: '#009aa4', fontSize: '1.5rem' }} />
                                        <div>
                                            <strong>{language === 'ar' ? 'البريد الإلكتروني:' : 'E-mail:'}</strong>
                                            <p className="mb-0">
                                                <a href={`mailto:${data.info.email.replace('📧 ', '')}`} className="text-decoration-none">
                                                    {data.info.email}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="mt-4">
                                    <h5 className="mb-3">{data.socialMedia.title}</h5>
                                    <div className="d-flex gap-3">
                                        {data.socialMedia.platforms.map((platform, index) => (
                                            <a
                                                key={index}
                                                href={platform.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-icon-link"
                                                style={{ color: '#009aa4', fontSize: '1.8rem' }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={
                                                        platform.icon === 'facebook' ? faFacebookF :
                                                            platform.icon === 'instagram' ? faInstagram :
                                                                platform.icon === 'twitter' ? faTwitter :
                                                                    faLinkedinIn
                                                    }
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Contact Form */}
                    <Col md={6}>
                        <Card className="shadow-sm border-0">
                            <Card.Body className="p-4">
                                <h3 className="mb-4">{data.form.title}</h3>

                                {submitStatus.message && (
                                    <Alert variant={submitStatus.type} onClose={() => setSubmitStatus({ type: '', message: '' })} dismissible>
                                        {submitStatus.message}
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>{data.form.fields.name}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder={data.form.fields.name}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>{data.form.fields.email}</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder={data.form.fields.email}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>{data.form.fields.subject}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            placeholder={data.form.fields.subject}
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>{data.form.fields.message}</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="message"
                                            placeholder={data.form.fields.message}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <div className="d-grid">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            style={{ backgroundColor: '#009aa4', borderColor: '#009aa4' }}
                                        >
                                            {isSubmitting ? t('common.loading') : data.form.button}
                                            <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Map Section */}
                <section>
                    <h3 className="text-center mb-4">{data.map.title}</h3>
                    <div className="text-center">
                        <a
                            href={data.map.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                            style={{ backgroundColor: '#009aa4', borderColor: '#009aa4' }}
                        >
                            {language === 'ar' ? 'شاهد الموقع على الخريطة' : 'Voir sur Google Maps'}
                        </a>
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default Contact;
