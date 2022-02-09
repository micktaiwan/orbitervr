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
  },

  logThumbstick(evt) {
    velocity.add(new THREE.Vector3(0, -evt.detail.y * 0.01, 0));
  },
});
