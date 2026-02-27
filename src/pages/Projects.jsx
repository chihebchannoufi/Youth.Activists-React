import React, { useState, useEffect } from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';
import { useLanguage } from '../contexts/LanguageContext';
import { getProjectsData } from '../services/api';

function Projects() {
    const { language, t } = useLanguage();
    const [projectsData, setProjectsData] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [activeTab, setActiveTab] = useState('completed');

    useEffect(() => {
        const loadData = async () => {
            const data = await getProjectsData();
            setProjectsData(data);
        };
        loadData();
    }, []);

    if (!projectsData) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const data = projectsData[language];

    if (!data) {
        return <div className="text-center py-5">Loading...</div>;
    }

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const projects = activeTab === 'completed' ? data.completed.projects : data.ongoing.projects;
    const filteredProjects = filterCategory === 'all'
        ? projects
        : projects.filter(p => p.category === filterCategory);

    return (
        <section className="py-5 component-wrapper">
            <div className="container">
                <h1 className="text-center mb-3"><strong>{data.title}</strong></h1>

                {/* Tabs for Completed/Ongoing */}
                <div className="text-center mb-4">
                    <button
                        className={`btn ${activeTab === 'completed' ? 'btn-primary' : 'btn-outline-primary'} mx-2 mb-2`}
                        onClick={() => { setActiveTab('completed'); setFilterCategory('all'); }}
                    >
                        {data.completed.title}
                    </button>
                    <button
                        className={`btn ${activeTab === 'ongoing' ? 'btn-primary' : 'btn-outline-primary'} mx-2 mb-2`}
                        onClick={() => { setActiveTab('ongoing'); setFilterCategory('all'); }}
                    >
                        {data.ongoing.title}
                    </button>
                </div>

                {/* Category Filter */}
                <div className="text-center mb-4">
                    <button
                        className={`btn btn-sm ${filterCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
                        onClick={() => setFilterCategory('all')}
                    >
                        {t('common.viewAll')}
                    </button>
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

                {/* Projects Grid */}
                <div className="row">
                    {filteredProjects.length === 0 && (
                        <div className="col-12 text-center text-muted">{t('common.noResults')}</div>
                    )}
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="col-md-4 col-sm-6 mb-4">
                            <div
                                className="card h-100 shadow-sm project-card"
                                onClick={() => openModal(project)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="card-img-top project-image"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">{project.year}</small>
                                        {project.progress && (
                                            <Badge bg="info">{project.progress}%</Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <Modal show={selectedProject !== null} onHide={closeModal} centered size="lg">
                {selectedProject && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedProject.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="img-fluid mb-3 rounded"
                            />
                            <p><strong>{language === 'ar' ? 'السنة:' : 'Année:'}</strong> {selectedProject.year}</p>
                            <p>{selectedProject.description}</p>
                            {selectedProject.beneficiaries && (
                                <p><strong>{language === 'ar' ? 'المستفيدون:' : 'Bénéficiaires:'}</strong> {selectedProject.beneficiaries}</p>
                            )}
                            {selectedProject.duration && (
                                <p><strong>{language === 'ar' ? 'المدة:' : 'Durée:'}</strong> {selectedProject.duration}</p>
                            )}
                            {selectedProject.progress && (
                                <div className="mt-3">
                                    <p><strong>{language === 'ar' ? 'التقدم:' : 'Progrès:'}</strong></p>
                                    <div className="progress" style={{ height: '25px' }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${selectedProject.progress}%`, backgroundColor: '#009aa4' }}
                                            aria-valuenow={selectedProject.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {selectedProject.progress}%
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>
                                {t('common.close')}
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </section>
    );
}

export default Projects;
