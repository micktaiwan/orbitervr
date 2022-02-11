class Menu {
  constructor() {
    this.isOpenReact = new ReactiveVar(false);
  }

  isOpen() {
    return this.isOpenReact.get();
  }

  toggle() {
    return this.isOpenReact.set(!this.isOpenReact.get());
  }
}

app.menu = new Menu();
