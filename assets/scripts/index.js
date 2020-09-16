import { Navigation } from './navigation';
import * as href from  './href';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  href.setupClickListeners();
});


function setupNavigation() {
  const navElement = document.querySelector('nav');
  const nav = new Navigation(navElement);

  const navToggle = document.querySelector('.nav-toggle')
  navToggle.addEventListener('click', ev => nav.toggle());

  const closeToggle = document.querySelector('.nav-close');
  closeToggle.addEventListener('click', ev => nav.close());
}
