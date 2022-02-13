AFRAME.registerComponent('hit-highlight', {
  dependencies: ['raycaster', 'material'],

  // init() {
  //   this.el.addEventListener('raycaster-intersected', evt => {
  //     // evt.detail.els.forEach(obj => {
  //     if (this.el.getAttribute('hit-highlight', 'color')) { return; }
  //     // save old color
  //     const color = this.el.getAttribute('material', 'color');
  //     this.el.setAttribute('hit-highlight', 'color', color.color);
  //     // console.log(color);
  //     // set new color
  //     this.el.setAttribute('material', 'color', '#fff');
  //     const c = this.el.getAttribute('hit-highlight', 'color');
  //     console.log(c);
  //     Meteor.setTimeout(() => {
  //       this.el.setAttribute('material', 'color', c);
  //       this.el.removeAttribute('hit-highlight', 'color');
  //     }, 1000);
  //     // });
  //   });
  // },
  init() {
    this.color = this.el.getAttribute('material', 'color').color;
    // console.log(this.color);
    this.el.addEventListener('raycaster-intersected', evt => {
      this.el.setAttribute('material', 'color', '#f9a825');
    });
    this.el.addEventListener('raycaster-intersected-cleared', () => {
      this.el.setAttribute('material', 'color', this.color);
    });
  },
});
