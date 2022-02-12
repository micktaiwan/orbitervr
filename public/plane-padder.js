AFRAME.registerComponent('plane-padder', {
  schema: {
    addPadding: {
      type: 'boolean',
      default: false,
    },
    padding: {
      type: 'number',
      default: 0.01,
    },
  },
  init() {
    this.el.setAttribute('plane-padder', 'addPadding: false');
  },
  update() {
    const { data } = this;
    const { el } = this;
    if (Object.keys(data).length === 0) return;

    if (data.addPadding === true) {
      el.getObject3D('mesh').geometry = new THREE.PlaneGeometry(
        el.components.geometry.data.width + el.components['plane-padder'].data.padding,
        el.components.geometry.data.height + el.components['plane-padder'].data.padding,
      );
      /**
       * Remove planepadder attribute so that its padding can be
       * changed in the future by adding the attribute again
       */
      this.el.removeAttribute('plane-padder');
    }
  },
  tick(time, delta) {
    const { el } = this;
    /**
     * Check if the width is not NaN, padding hasn't already been
     * added i.e `addPadding` schema attribute is false and that the
     * plane's width is same as the text's width which means padding
     * hasn't been added yet
     */
    if (!Number.isNaN(el.components.geometry.data.width) && el.components['plane-padder'].data.addPadding === false && el.components.geometry.data.width === el.components.text.data.width) {
      // Set the schema attribute `addPadding` to true so that the padding can be added
      el.setAttribute('plane-padder', 'addPadding: true');
    }
  },
});
