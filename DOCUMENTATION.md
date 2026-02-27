# Youth Activists Organization - Website

Site web moderne, professionnel, responsive et multilingue (AR / FR) pour l'association Youth Activists Organization.

## 🎯 Caractéristiques

- ✅ Moderne et accessible
- ✅ Responsive (mobile-first)
- ✅ Multilingue (Arabe / Français)
- ✅ Facilement maintenable
- ✅ Dynamique (données depuis fichiers JSON)
- ✅ Développé avec React.js

## 🏗 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.js       # Barre de navigation avec sélecteur de langue
│   └── Footer.js       # Pied de page
│
├── pages/              # Pages principales
│   ├── Home.jsx        # Page d'accueil
│   ├── About.jsx       # À propos
│   ├── Projects.jsx    # Projets & Programmes
│   ├── Events.jsx      # Activités & Événements
│   ├── Partners.jsx    # Partenaires
│   ├── Media.jsx       # Médias
│   ├── Join.jsx        # Adhésion / Engagement
│   └── Contact.jsx     # Contact
│
├── data/               # Fichiers JSON pour les données
│   ├── home.json
│   ├── about.json
│   ├── projects.json
│   ├── events.json
│   ├── partners.json
│   ├── media.json
│   ├── join.json
│   ├── contact.json
│   ├── testimonials.json
│   └── translations.json
│
├── contexts/           # Contextes React
│   └── LanguageContext.jsx  # Gestion multilingue
│
├── services/           # Services API
│   └── api.js         # Fonctions de chargement des données
│
├── styles.css         # Styles globaux
├── App.js             # Composant principal
└── index.js           # Point d'entrée

```

## 🎨 Identité Visuelle

### Couleurs
- **Primary**: `#009aa4` (Couleur principale)
- **Background**: `#f0f0f0` (Fond)
- **Text**: `#434343` (Texte)
- **Accent**: `#fd5d5d` (Accent)

### Typographie
- **Titres (FR)**: Poppins / Montserrat
- **Texte (FR)**: Roboto
- **Arabe**: Cairo

## 📄 Pages du Site

1. **Accueil** (`/`)
   - Hero Section avec slogan
   - Objectifs principaux
   - Chiffres clés
   - Projets phares
   - Témoignages
   - Réseaux sociaux

2. **À propos** (`/about`)
   - Présentation officielle
   - Vision et méthodologie
   - Objectifs
   - Structure organisationnelle

3. **Projets** (`/projects`)
   - Projets réalisés
   - Projets en cours
   - Filtrage par catégorie

4. **Événements** (`/events`)
   - Événements à venir
   - Événements passés
   - Calendrier

5. **Partenaires** (`/partners`)
   - Liste des partenaires
   - Appel à collaboration

6. **Médias** (`/media`)
   - Galerie photos
   - Actualités

7. **Adhésion** (`/join`)
   - Pourquoi nous rejoindre
   - Types d'engagement
   - Formulaire d'adhésion

8. **Contact** (`/contact`)
   - Informations de contact
   - Formulaire de contact
   - Carte Google Maps
   - Réseaux sociaux

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start
```

Le site sera accessible sur `http://localhost:3000`

### Build Production
```bash
npm run build
```

## 🌐 Système Multilingue

Le site supporte l'arabe et le français. Le changement de langue se fait via le bouton dans la navigation.

### Utilisation dans les composants
```javascript
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t('navbar.home')}</h1>
      <button onClick={toggleLanguage}>
        Changer de langue
      </button>
    </div>
  );
}
```

### Ajouter des traductions
Éditer le fichier `src/data/translations.json`:
```json
{
  "ar": {
    "navbar": {
      "home": "الرئيسية"
    }
  },
  "fr": {
    "navbar": {
      "home": "Accueil"
    }
  }
}
```

## 📝 Modification des Données

Toutes les données du site sont stockées dans des fichiers JSON dans le dossier `src/data/`.

### Exemple: Ajouter un projet
Éditer `src/data/projects.json`:
```json
{
  "id": 11,
  "title": "Nouveau Projet",
  "category": "education",
  "year": 2024,
  "image": "/images/projects/nouveau.jpg",
  "description": "Description du projet...",
  "beneficiaries": 100,
  "duration": "6 mois"
}
```

## 🎯 Backend API (Optionnel)

Le site peut être connecté à une API backend pour:
- Soumission de formulaire de contact
- Inscription des membres

Endpoints configurés:
- `POST http://localhost:5000/message/store` - Contact
- `POST http://localhost:5000/inscription/store` - Adhésion

Modifier les URLs dans `src/services/api.js` selon votre configuration.

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour:
- 📱 Mobile (< 576px)
- 📱 Tablet (576px - 768px)
- 💻 Desktop (> 768px)

## ♿ Accessibilité

- Support RTL pour l'arabe
- Contraste des couleurs optimisé
- Navigation au clavier
- Labels ARIA

## 🤝 Contribution

Pour contribuer au projet:
1. Fork le repository
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit les changements (`git commit -m 'Ajout fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📞 Contact

**Youth Activists Organization**
- 📍 Cité la mosquée, Le Krib, Tunisia, 6120
- 📞 +216 93 102 455
- 📧 mustiyouthactivists@gmail.com

## 📄 Licence

© 2024 Youth Activists Organization. Tous droits réservés.
