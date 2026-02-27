// API service for loading data from JSON files

// Import all JSON data files
import homeData from '../data/home.json';
import aboutData from '../data/about.json';
import projectsData from '../data/projects.json';
import eventsData from '../data/events.json';
import partnersData from '../data/partners.json';
import joinData from '../data/join.json';
import contactData from '../data/contact.json';
import testimonialsData from '../data/testimonials.json';
import translationsData from '../data/translations.json';

// Load home page data
export const getHomeData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(homeData), 0);
  });
};

// Load about page data
export const getAboutData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(aboutData), 0);
  });
};

// Load projects data
export const getProjectsData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(projectsData), 0);
  });
};

// Load events data
export const getEventsData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(eventsData), 0);
  });
};

// Load partners data
export const getPartnersData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(partnersData), 0);
  });
};

// Load join/membership data
export const getJoinData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(joinData), 0);
  });
};

// Load contact data
export const getContactData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(contactData), 0);
  });
};

// Load testimonials data
export const getTestimonialsData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(testimonialsData), 0);
  });
};

// Load translations
export const getTranslations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(translationsData), 0);
  });
};

// Get API base URL from environment variable
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Submit contact form
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/message/store`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true, message: 'Message envoyé avec succès' };
    } else {
      return { success: false, message: 'Erreur lors de l\'envoi du message' };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'Erreur de communication avec le serveur' };
  }
};

// Submit membership/join form
export const submitJoinForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/inscription/store`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || 'Inscription réussie' };
    } else {
      return { success: false, message: 'Erreur lors de l\'inscription' };
    }
  } catch (error) {
    console.error('Error submitting join form:', error);
    return { success: false, message: 'Erreur de communication avec le serveur' };
  }
};
