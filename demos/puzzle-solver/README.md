---
layout: demo
kind: demo
title: Puzzle Solver
resume: Une application photographie des pièces de puzzle, analyse leurs formes et leurs couleurs, puis montre leur reconstruction à l’écran.
statut: En développement
responsable: Axel Hall
contact: mailto:axel.hall@hes-so.ch
depot: https://github.com/ISC-HEI/PuzzleSolver
documentation_technique: https://github.com/ISC-HEI/PuzzleSolver#readme
mode: Interactive
duree: 3 à 5 minutes
supervision: Active
niveau_superviseur: Intermédiaire
audience:
  - Tout public
  - Étudiants
  - Médias
materiel:
  - PC Windows ou Mac Apple Silicon
  - Écran principal pour le public
  - Écran HDMI posé à plat
  - Caméra Full HD avec support
  - Puzzle préalablement validé
tags:
  - Vision par ordinateur
  - Traitement d’image
  - Algorithmique
dernier_test: Prototype testé, dispositif public à valider
permalink: /demos/puzzle-solver/
---

## L’expérience proposée

Des pièces de puzzle sont disposées en vrac sous une caméra. Puzzle Solver les
photographie, repère leurs contours, compare les formes et les couleurs, puis
affiche une reconstruction animée.

Le public voit les étapes intermédiaires de l’analyse. La démo rend ainsi la
vision par ordinateur très concrète : avant de résoudre le puzzle, la machine
doit transformer une image en mesures qu’elle peut comparer.

## Déroulé conseillé

1. Montrer les pièces réelles et demander au visiteur ce que l’ordinateur doit
   comprendre pour les assembler.
2. Lancer **Capture and solve** et commenter les grandes phases affichées.
3. Laisser l’animation reconstruire le puzzle, puis utiliser **Replay** ou
   **Rotate**.
4. Ouvrir une vue intermédiaire pour relier le résultat aux images calculées.

## À préparer avant l’événement

- Fixer la caméra au-dessus de l’écran et éviter tout mouvement du support.
- Espacer les pièces : elles ne doivent ni se toucher ni se chevaucher.
- Calibrer la caméra, l’exposition et la zone de projection avec le matériel du
  stand.
- Résoudre une fois le puzzle complet et préparer une photo importable comme
  solution de secours.

## Points d’attention

- La qualité dépend fortement de l’éclairage, de la stabilité de la caméra et
  du puzzle choisi. Utiliser uniquement une configuration déjà validée.
- Le dispositif recommandé demande deux écrans et une caméra Full HD ; le
  montage doit être préparé avant l’arrivée du public.
- La version actuelle est encore en développement. La fiche ne doit passer au
  statut **Prête** qu’après un test complet dans les conditions du stand.
