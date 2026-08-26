(() => {
  const form = document.querySelector('[data-catalogue-filters]');
  if (!form) return;

  const cards = [...document.querySelectorAll('[data-demo-card]')];
  const count = document.querySelector('[data-result-count]');
  const emptyState = document.querySelector('[data-empty-state]');
  const reset = document.querySelector('[data-reset-filters]');

  const normalize = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('fr')
    .trim();

  const refresh = () => {
    const values = Object.fromEntries(new FormData(form));
    let visible = 0;

    cards.forEach((card) => {
      const matchesSearch = !values.recherche || normalize(card.dataset.search).includes(normalize(values.recherche));
      const matchesStatus = !values.statut || normalize(card.dataset.status) === normalize(values.statut);
      const matchesMode = !values.mode || normalize(card.dataset.mode) === normalize(values.mode);
      const matchesAudience = !values.audience || normalize(card.dataset.audience).includes(normalize(values.audience));
      const matchesSupervision = !values.supervision || normalize(card.dataset.supervision) === normalize(values.supervision);
      const matchesLevel = !values.niveau || normalize(card.dataset.level) === normalize(values.niveau);
      const show = matchesSearch && matchesStatus && matchesMode && matchesAudience && matchesSupervision && matchesLevel;

      card.hidden = !show;
      if (show) visible += 1;
    });

    count.textContent = `${visible} démo${visible > 1 ? 's' : ''}`;
    emptyState.hidden = visible !== 0;
  };

  form.addEventListener('input', refresh);
  form.addEventListener('change', refresh);
  reset.addEventListener('click', () => {
    form.reset();
    refresh();
    form.querySelector('input').focus();
  });

  refresh();
})();

