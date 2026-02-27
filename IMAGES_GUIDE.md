# Images Nécessaires pour le Site

Ce fichier liste toutes les images que vous devez ajouter dans le dossier `public/images/` pour que le site fonctionne correctement.

## 📁 Structure des Images

```
public/
└── images/
    ├── youth.png                    # Logo de l'organisation (navbar)
    ├── back.jpg                     # Image de fond hero section
    ├── Youthh.jpg                   # Image About page
    ├── youth1.jpg                   # Image About page (structure)
    ├── peace.png                    # Image Peace Makers
    ├── Ecole en mouvement.jpg       # Image projet Madrasati
    │
    ├── projects/                    # Images des projets
    │   ├── barnamjik.jpg
    │   ├── madrasati.jpg
    │   ├── democracy-academy.jpg
    │   ├── qoffa.jpg
    │   ├── kiswa.jpg
    │   ├── bash-nenjah.jpg
    │   ├── careers-day.jpg
    │   ├── playgrounds.jpg
    │   └── radio.jpg
    │
    ├── events/                      # Images des événements
    │   ├── programming-workshop.jpg
    │   ├── cleanup-day.jpg
    │   ├── youth-conference.jpg
    │   ├── conference1.jpg
    │   ├── conference2.jpg
    │   ├── conference3.jpg
    │   ├── qoffa1.jpg
    │   └── qoffa2.jpg
    │
    ├── partners/                    # Logos des partenaires
    │   ├── ministry-youth.png
    │   ├── ndi.png
    │   ├── poland-ministry.png
    │   ├── municipality.png
    │   └── tunisian-youth-union.png
    │
    ├── gallery/                     # Galerie média
    │   ├── programming-1.jpg
    │   └── volunteer-1.jpg
    │
    ├── news/                        # Images actualités
    │   └── radio-launch.jpg
    │
    └── testimonials/                # Images témoignages (optionnel)
        ├── avatar1.jpg
        ├── avatar2.jpg
        └── avatar3.jpg
```

## ✅ Images Déjà Présentes

Ces images sont déjà utilisées dans le projet actuel:
- youth.png (logo)
- back.jpg (fond hero)
- Youthh.jpg
- youth1.jpg
- peace.png
- Ecole en mouvement.jpg

## 🆕 Nouvelles Images à Ajouter

### Projets
- `/images/projects/barnamjik.jpg` - Projet Barnamjik
- `/images/projects/democracy-academy.jpg` - Académie de la Démocratie
- `/images/projects/qoffa.jpg` - Qoffa El Khir
- `/images/projects/kiswa.jpg` - Kiswa El Aid
- `/images/projects/bash-nenjah.jpg` - Bash Nenjah
- `/images/projects/careers-day.jpg` - Yawm El Mihan
- `/images/projects/playgrounds.jpg` - Malaeeb Ahyaa
- `/images/projects/radio.jpg` - Radio Web Youth Waves

### Événements
- `/images/events/programming-workshop.jpg` - Atelier programmation
- `/images/events/cleanup-day.jpg` - Journée nettoyage
- `/images/events/youth-conference.jpg` - Conférence jeunesse
- `/images/events/conference1.jpg` - Galerie conférence
- `/images/events/conference2.jpg` - Galerie conférence
- `/images/events/conference3.jpg` - Galerie conférence
- `/images/events/qoffa1.jpg` - Galerie Qoffa
- `/images/events/qoffa2.jpg` - Galerie Qoffa

### Partenaires
- `/images/partners/ministry-youth.png` - Logo Ministère
- `/images/partners/ndi.png` - Logo NDI
- `/images/partners/poland-ministry.png` - Logo Ministère polonais
- `/images/partners/municipality.png` - Logo Municipalité
- `/images/partners/tunisian-youth-union.png` - Logo Union jeunesse

### Médias
- `/images/gallery/programming-1.jpg` - Galerie
- `/images/gallery/volunteer-1.jpg` - Galerie
- `/images/news/radio-launch.jpg` - Actualité radio

## 💡 Conseils pour les Images

### Dimensions Recommandées

- **Logo (youth.png)**: 150x150px (transparent PNG)
- **Hero background (back.jpg)**: 1920x1080px minimum
- **Images About**: 800x600px
- **Images Projets/Événements**: 600x400px
- **Logos Partenaires**: 200x200px (transparent PNG de préférence)
- **Galerie**: 800x600px

### Format
- Photos: JPG (optimisées pour le web, < 500KB)
- Logos: PNG avec fond transparent
- Qualité: 80-85% pour JPG

### Optimisation
Utilisez des outils comme:
- TinyPNG (https://tinypng.com/)
- ImageOptim
- Squoosh (https://squoosh.app/)

## 🔄 Images Temporaires

Si vous n'avez pas certaines images, vous pouvez:
1. Utiliser des placeholders temporaires
2. Réutiliser des images existantes similaires
3. Modifier les fichiers JSON pour masquer les sections concernées

## 📝 Modification des Chemins d'Images

Pour changer un chemin d'image, éditez le fichier JSON correspondant:

**Exemple pour un projet** (`src/data/projects.json`):
```json
{
  "id": 1,
  "title": "برنامجك",
  "image": "/images/projects/barnamjik.jpg",  ← Modifier ici
  ...
}
```

## ⚠️ Important

- Tous les chemins commencent par `/images/` (dossier public)
- Noms de fichiers sans espaces ni caractères spéciaux
- Respecter la casse (majuscules/minuscules)
