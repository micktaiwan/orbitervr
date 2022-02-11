AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init() {
    this.el.addEventListener('raycaster-intersection', (evt) => {
      console.log('Player hit something!');
      evt.detail.els.forEach((obj) => {
        console.log(obj);
      });
    });
  },
});
