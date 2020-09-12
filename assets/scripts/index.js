import { Navigation } from './navigation';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
});


function setupNavigation() {
  const navElement = document.querySelector('nav');
  const nav = new Navigation(navElement);

  const navToggle = document.querySelector('.nav-toggle')
  navToggle.addEventListener('click', ev => nav.toggle());
}
