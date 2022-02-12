const velocity = new THREE.Vector3(0, 0.1, 0);

AFRAME.registerComponent('listener-right', {
  init() {
    // console.log('listener');
    const { el } = this;
    this.rig = document.getElementById('rig');
    el.addEventListener('thumbstickmoved', this.logThumbstick.bind(this));
  },

  tick() {
    velocity.multiplyScalar(0.95);
    this.rig.object3D.position.add(velocity);
    if (this.rig.object3D.position.y < 1.7) {
      this.rig.object3D.position.y = 1.7;
    }
  },

  logThumbstick(evt) {
    velocity.add(new THREE.Vector3(evt.detail.x * 0.01, 0, evt.detail.y * 0.01));
  },
});

AFRAME.registerComponent('listener-left', {
  init() {
    // console.log('listener');
    const { el } = this;
    this.rig = document.getElementById('rig');
    el.addEventListener('thumbstickmoved', this.logThumbstick.bind(this));
    el.addEventListener('triggerdown', this.triggerdown.bind(this));
    el.addEventListener('triggertouchstart', this.triggertouchstart.bind(this));
    el.addEventListener('surfacedown', this.surfacedown.bind(this));
    el.addEventListener('xbuttondown', this.xbuttondown.bind(this));
  },

  logThumbstick(evt) {
    velocity.add(new THREE.Vector3(0, -evt.detail.y * 0.01, 0));
    // rotation
    this.rig.object3D.rotation.y -= evt.detail.x * 0.02;
  },

  triggerdown() {
    log('triggerdown');
  },

  triggertouchstart() {
    log('triggertouchstart');
  },

  surfacedown() {
    log('surfacedown');
  },

  xbuttondown() {
    log('xbuttondown');
    app.menu.toggle();
  },
});
