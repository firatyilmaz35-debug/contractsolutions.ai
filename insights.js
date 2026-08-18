(function () {
  const buttons = Array.from(document.querySelectorAll('.insight-filter'));
  const featured = document.querySelector('.featured-insight');
  const cards = Array.from(document.querySelectorAll('.insight-card'));

  function match(el, filter) {
    if (filter === 'all') return true;
    return (el.dataset.category || '').split(/\s+/).includes(filter);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      buttons.forEach((b) => b.classList.toggle('is-active', b === button));
      if (featured) featured.hidden = !match(featured, filter);
      cards.forEach((card) => card.hidden = !match(card, filter));
    });
  });
})();
