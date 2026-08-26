# ISC Demos

Catalogue interne des démonstrations de l’Institut Informatique et systèmes de
communication, publié sous forme de site statique avec GitHub Pages.

L’identité visuelle reprend les logos, couleurs et polices du
[template web ISC](https://github.com/Sebastian0211-vs/WebAppISCTemplate), sans
reprendre sa structure applicative.

Le dépôt sépare volontairement deux niveaux de documentation :

- les fiches de `demos/` restent courtes et accessibles pour choisir et préparer
  une présentation ;
- l’installation, les mises à jour et le développement sont documentés dans le
  dépôt source de chaque projet, puis liés depuis sa fiche.

## Ajouter ou modifier une fiche

Le mode d’emploi et les conventions se trouvent dans
[`demos/README.md`](demos/README.md). Le modèle à copier se trouve dans
[`demos/_template/`](demos/_template/).

Le catalogue est généré directement à partir des en-têtes YAML des fichiers
Markdown. Il n’y a donc aucun tableau ou fichier d’index à maintenir à la main.

## Publication

Le workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) :

1. construit le site Jekyll à chaque push et pull request ;
2. publie l’artefact sur GitHub Pages après un push sur `main` ;
3. peut être relancé manuellement depuis l’onglet **Actions**.

Avant le premier déploiement, sélectionner **GitHub Actions** dans
**Settings → Pages → Build and deployment → Source**.

L’URL attendue pour le dépôt de test est
<https://sebastian0211-vs.github.io/TESTISCDEMOS/>.

## Aperçu local sous Windows

`gem` est fourni avec Ruby : si PowerShell ne reconnaît pas cette commande,
Ruby n’est pas encore installé ou son dossier n’est pas dans le `PATH`.

1. Télécharger **Ruby+Devkit 3.3 (x64)** depuis
   [RubyInstaller](https://rubyinstaller.org/downloads/). La branche 3.3 est
   proche de l’environnement utilisé par le build GitHub Pages.
2. Lancer l’installateur avec les options par défaut, notamment l’ajout des
   exécutables Ruby au `PATH`.
3. À la fin de l’installation, laisser l’assistant exécuter `ridk install` et
   installer la chaîne **MSYS2 and MINGW development toolchain**.
4. Fermer puis rouvrir PowerShell afin de recharger le `PATH`.
5. Depuis ce dépôt, exécuter :

   ```powershell
   ruby --version
   gem --version
   gem install jekyll bundler
   jekyll --version
   jekyll serve --baseurl=
   ```

Sous PowerShell, la forme `--baseurl=` est importante : `--baseurl ""` perd
son argument vide avant d’atteindre Jekyll. Le site est alors accessible sur
<http://localhost:4000>. Si `gem` reste
introuvable après l’installation, redémarrer Windows puis vérifier à nouveau
avec `ruby --version`.
