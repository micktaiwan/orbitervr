AFRAME.registerComponent('intersection-spawn', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse,
  },

  init() {
    const { data } = this;
    const { el } = this;

    el.addEventListener(data.event, (evt) => {
      // Create element.
      const spawnEl = document.createElement('a-entity');

      log(data.event);
      // Snap intersection point to grid and offset from center.
      spawnEl.setAttribute('position', evt.detail.intersection.point);

      // Set components and properties.
      Object.keys(data).forEach((name) => {
        if (name === 'event') { return; }
        AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
      });

      // Append to scene.
      el.sceneEl.appendChild(spawnEl);
    });
  },
});
