AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init() {
    this.el.addEventListener('raycaster-intersection', (evt) => {
      evt.detail.els.forEach((obj) => {
        // log(`HIT: ${obj.id || obj.tagName}`);
      });
    });
  },
});
