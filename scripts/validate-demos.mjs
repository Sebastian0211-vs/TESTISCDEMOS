import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const demosRoot = join(root, 'demos');
const folders = readdirSync(demosRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'));

const requiredScalars = [
  'layout',
  'kind',
  'title',
  'resume',
  'statut',
  'responsable',
  'depot',
  'documentation_technique',
  'mode',
  'duree',
  'supervision',
  'niveau_superviseur',
  'dernier_test',
  'permalink',
];

const allowed = {
  statut: ['Prête', 'En développement', 'À réparer', 'Archivée'],
  mode: ['Passive', 'Guidée', 'Interactive'],
  supervision: ['Active', 'Passive'],
  niveau_superviseur: ['Basique', 'Intermédiaire', 'Avancé'],
};

const errors = [];
const permalinks = new Set();

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const scalar = (frontMatter, key) => {
  const match = frontMatter.match(new RegExp(`^${escapeRegExp(key)}:\\s*(.+?)\\s*$`, 'm'));
  return match?.[1].replace(/^['"]|['"]$/g, '').trim();
};

for (const folder of folders) {
  const relativeFile = `demos/${folder.name}/README.md`;
  const file = join(demosRoot, folder.name, 'README.md');

  if (!existsSync(file)) {
    errors.push(`${relativeFile}: fichier manquant`);
    continue;
  }

  const source = readFileSync(file, 'utf8');
  const frontMatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!frontMatterMatch) {
    errors.push(`${relativeFile}: en-tête YAML manquant ou mal délimité`);
    continue;
  }

  const frontMatter = frontMatterMatch[1];
  for (const key of requiredScalars) {
    if (!scalar(frontMatter, key)) errors.push(`${relativeFile}: champ « ${key} » manquant`);
  }

  for (const key of ['audience', 'materiel', 'tags']) {
    const list = frontMatter.match(new RegExp(`^${key}:\\s*\\r?\\n((?:  - .+(?:\\r?\\n|$))+)`, 'm'));
    if (!list) errors.push(`${relativeFile}: liste « ${key} » manquante ou vide`);
  }

  for (const [key, values] of Object.entries(allowed)) {
    const value = scalar(frontMatter, key);
    if (value && !values.includes(value)) {
      errors.push(`${relativeFile}: « ${key} » doit valoir ${values.join(' | ')}`);
    }
  }

  if (scalar(frontMatter, 'layout') !== 'demo') errors.push(`${relativeFile}: layout doit valoir demo`);
  if (scalar(frontMatter, 'kind') !== 'demo') errors.push(`${relativeFile}: kind doit valoir demo`);

  const summary = scalar(frontMatter, 'resume');
  if (summary && summary.length > 200) errors.push(`${relativeFile}: résumé trop long (${summary.length}/200 caractères)`);

  const permalink = scalar(frontMatter, 'permalink');
  if (permalink && permalinks.has(permalink)) errors.push(`${relativeFile}: permalink déjà utilisé (${permalink})`);
  if (permalink) permalinks.add(permalink);

  const cover = scalar(frontMatter, 'cover');
  if (cover) {
    const coverFile = join(root, cover.replace(/^\//, ''));
    if (!existsSync(coverFile)) errors.push(`${relativeFile}: visuel introuvable (${cover})`);
    if (!scalar(frontMatter, 'cover_alt')) errors.push(`${relativeFile}: cover_alt requis lorsqu’un visuel est défini`);
  }
}

if (errors.length) {
  console.error(`Validation échouée (${errors.length} erreur${errors.length > 1 ? 's' : ''}) :`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`${folders.length} fiche${folders.length > 1 ? 's' : ''} de démonstration valide${folders.length > 1 ? 's' : ''}.`);

