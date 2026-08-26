---
layout: default
title: Ajouter une démonstration
description: Mode d’emploi pour ajouter une fiche concise au catalogue ISC Demos.
permalink: /contribuer/
---

<section class="page-hero">
  <div class="shell page-heading">
    <p class="eyebrow">Contribuer</p>
    <h1>Ajouter une démonstration</h1>
    <p>Une fiche doit permettre de comprendre et préparer la démo en quelques minutes. La documentation technique reste dans le dépôt du projet.</p>
  </div>
</section>

<section class="contribution">
  <div class="shell contribution-grid">
    <div>
      <h2>Procédure</h2>

      <ol>
        <li>Copier le dossier <code>demos/_template/</code> sous le nom du projet.</li>
        <li>Compléter l’en-tête et les quatre courtes sections du fichier <code>README.md</code>.</li>
        <li>Ajouter une capture <code>cover.png</code> ou <code>cover.jpg</code>, compressée et large de 1&nbsp;500&nbsp;px au maximum.</li>
        <li>Vérifier les liens vers le site, le dépôt et la documentation technique.</li>
        <li>Ouvrir une pull request. La CI construit automatiquement le site avant la fusion.</li>
      </ol>

      <h2>Deux documentations, deux rôles</h2>

      <h3>Dans ISC Demos</h3>
      <p>Rester accessible et concret&nbsp;: description courte, visuel, durée, matériel, public, mode de présentation, supervision, niveau requis et déroulé conseillé.</p>

      <h3>Dans le dépôt du projet</h3>
      <p>Documenter l’installation, le lancement, les mises à jour, le déploiement, l’architecture et l’ajout de fonctionnalités. La fiche ISC Demos pointe vers cette documentation grâce au champ <code>documentation_technique</code>.</p>

      <h2>Conventions</h2>

      <ul>
        <li><strong>Statut&nbsp;:</strong> <code>Prête</code>, <code>En développement</code>, <code>À réparer</code> ou <code>Archivée</code>.</li>
        <li><strong>Présentation&nbsp;:</strong> <code>Passive</code>, <code>Guidée</code> ou <code>Interactive</code>.</li>
        <li><strong>Supervision&nbsp;:</strong> <code>Active</code> si une personne doit accompagner la démo, <code>Passive</code> si une vérification occasionnelle suffit.</li>
        <li><strong>Niveau superviseur&nbsp;:</strong> <code>Basique</code>, <code>Intermédiaire</code> ou <code>Avancé</code>.</li>
        <li><strong>Vidéo&nbsp;:</strong> ajouter un lien, jamais un fichier vidéo dans Git.</li>
        <li><strong>Dernier test&nbsp;:</strong> indiquer un test réel de bout en bout, pas la date de modification de la fiche.</li>
      </ul>
    </div>

    <aside class="checklist">
      <h2>Avant la pull request</h2>
      <ul>
        <li>Résumé compréhensible sans contexte</li>
        <li>Visuel récent ou absence signalée</li>
        <li>Durée et matériel réalistes</li>
        <li>Public et supervision renseignés</li>
        <li>Responsable identifiable</li>
        <li>Lien technique testé</li>
        <li>Limites et solution de secours indiquées</li>
      </ul>
    </aside>
  </div>
</section>
