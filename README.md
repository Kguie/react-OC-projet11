# Kasa #

 Ce projet correspond au projet 11 de la formation développeur d'applications JS React de OPENCLASSROOMS.


 ## Table des Matières

- [Introduction](#introduction)
- [Installation et utilisation](#installation-et-utilisation)
- [Structure du Projet](#structure-du-projet)
- [Auteurs](#auteurs)
- [Exigences fonctionnelles](#exigences-fonctionnelles)
- [Outils et contraintes techniques](#outils-et-contraintes-techniques) 


## Introduction

- L'objectif ici est de démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma responsive (https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0).


## Installation et utilisation

- Installation des dépendances : Cloner ce repository et lancer `yarn install` pour installer les dépendances.


## Structure du Projet

-    ├── public
-    │     └── data/           # Contient les données des logements
-    └──  src
-          ├── assets          # Contient les images
-          │     ├── icons/    # Contient les icônes au format svg
-          │     └── photos/   # Contient les photos
-          ├── components      # Contient les components
-          ├── pages           # Contient les pages
-          ├── utils           # Contient les utilitaires
-          │     ├── hooks/    # Contient les hooks
-          │     ├── loader/   # Contient le loader
-          │     ├── router/   # Contient le router
-          │     └── style/    # Contient les fichiers sass
-          └── index.tsx       # Entrée


## Auteurs

- [GUIEBA Kévin](https://github.com/Kguie/)

## Exigences fonctionnelles ##

- Pour le défilement des photos dans la galerie (composant Gallery) :
    - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
    - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
    - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.

### Outils et contraintes techniques ###

- Create React App.
- React Router.
- Styling:Sass .
- Pas de librairie React externe.

- Découpage en composants modulaires et réutilisables .
- Un composant par fichier .
- Structure logique des différents fichiers .
- Utilisation des props entre les composants .
- Utilisation du state dans les composants quand c'est nécessaire .
- Gestion des événements .
- Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.

- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans un seul fichier.

