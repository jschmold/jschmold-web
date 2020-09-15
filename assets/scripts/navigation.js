export class Navigation {

  constructor(el) {
    this.element = el;
    this.body = document.querySelector('body');
  }

  open() {
    this.element.classList.add('open');
    this.body.classList.add('disable-scrolling');
  }

  close() {
    this.element.classList.remove('open');
    this.body.classList.remove('disable-scrolling');
  }

  toggle() {
    if (this.element.classList.contains('open')) {
      this.close()
    } else {
      this.open();
    }
  }
}
