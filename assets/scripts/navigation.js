export class Navigation {

  constructor(el) {
    this.element = el;
  }

  open() {
    this.element.classList.add('open');
  }

  close() {
    this.element.classList.remove('open');
  }

  toggle() {
    if (this.element.classList.contains('open')) {
      this.close()
    } else {
      this.open();
    }
  }
}
