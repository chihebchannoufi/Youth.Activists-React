import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getJoinData, submitJoinForm } from '../services/api';

function Join() {
    const { language, t } = useLanguage();
    const { isDarkMode } = useTheme();
    const [joinData, setJoinData] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        lieu: '',
        residence: '',
        genre: '',
        mail: '',
        tel: '',
        org: '',
        competence: '',
        experience: '',
        engagementType: 'volunteer',
        confirmation: ''
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const data = await getJoinData();
            setJoinData(data);
        };
        loadData();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? 'confirmed' : '') : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Show alert that form is not active
            const alertMessage = language === 'ar'
                ? 'عذرا، النموذج غير نشط في الوقت الحالي. يرجى التواصل معنا عبر البريد الإلكتروني'
                : 'Le formulaire n\'est pas actif pour le moment. Merci de nous contacter par email';

            alert(alertMessage);
            setFormData({
                name: '',
                date: '',
                lieu: '',
                residence: '',
                genre: '',
                mail: '',
                tel: '',
                org: '',
                competence: '',
                experience: '',
                engagementType: 'volunteer',
                confirmation: ''
            });
            setSubmitStatus({
                type: 'warning',
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

    if (!joinData) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const data = joinData[language];

    if (!data) {
        return <div className="text-center py-5">Loading...</div>;
    }

    return (
        <div className="join-page component-wrapper">
            <Container className="py-5">
                {/* Hero Section */}
                <section className="text-center mb-5">
                    <h1 className="display-4 mb-3"><strong>{data.title}</strong></h1>
                    <h2 className="h4 mb-3" style={{ color: '#009aa4' }}>{data.subtitle}</h2>
                    <p className="lead">{data.description}</p>
                </section>

                {/* Join Form Section */}
                <section className="mb-5">
                    <h2 className="text-center mb-4">{data.form.title}</h2>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="shadow-sm">
                                <Card.Body className="p-4">
                                    {submitStatus.message && (
                                        <Alert variant={submitStatus.type} onClose={() => setSubmitStatus({ type: '', message: '' })} dismissible>
                                            {submitStatus.message}
                                        </Alert>
                                    )}

                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{data.form.fields.name}</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{data.form.fields.birthDate}</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        name="date"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{data.form.fields.birthPlace}</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="lieu"
                                                        value={formData.lieu}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{data.form.fields.residence}</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="residence"
                                                        value={formData.residence}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label>{data.form.fields.gender}</Form.Label>
                                            <div>
                                                <Form.Check
                                                    inline
                                                    type="radio"
                                                    name="genre"
                                                    label={data.form.fields.male}
                                                    value="Homme"
                                                    checked={formData.genre === "Homme"}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Check
                                                    inline
                                                    type="radio"
                                                    name="genre"
                                                    label={data.form.fields.female}
                                                    value="Femme"
                                                    checked={formData.genre === "Femme"}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </Form.Group>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{data.form.fields.email}</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="mail"
                                                        value={formData.mail}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{data.form.fields.phone}</Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        name="tel"
                                                        value={formData.tel}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label>{data.form.fields.engagementType}</Form.Label>
                                            <Form.Select
                                                name="engagementType"
                                                value={formData.engagementType}
                                                onChange={handleChange}
                                            >
                                                <option value="volunteer">{language === 'ar' ? 'متطوع' : 'Bénévole'}</option>
                                                <option value="active-member">{language === 'ar' ? 'عضو نشط' : 'Membre actif'}</option>
                                                <option value="partner">{language === 'ar' ? 'شريك' : 'Partenaire'}</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>{data.form.fields.motivation}</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="org"
                                                value={formData.org}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>{data.form.fields.skills}</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                name="competence"
                                                value={formData.competence}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>{data.form.fields.experience}</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Check
                                                type="checkbox"
                                                name="confirmation"
                                                label={data.form.fields.confirmation}
                                                checked={formData.confirmation === 'confirmed'}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <div className="d-grid gap-2">
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                size="lg"
                                                disabled={isSubmitting}
                                                style={{ backgroundColor: '#009aa4', borderColor: '#009aa4' }}
                                            >
                                                {isSubmitting ? t('common.loading') : data.form.buttons.submit}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default Join;
