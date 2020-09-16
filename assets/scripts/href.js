export function setupClickListeners() {
  const elements = document.querySelectorAll('[data-href]');

  for (const element of Array.from(elements)) {
    const url = element.getAttribute('data-href');
    if (!url) continue;

    element.addEventListener('click', () => window.location.href = url);
    element.classList.add('clickable');
  }
}
