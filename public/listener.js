const velocity = new THREE.Vector3(0, 0.001, 0.001);
let rotVel = 0;

AFRAME.registerComponent('listener-right', {
  init() {
    // console.log('listener');
    const { el } = this;
    this.rig = document.getElementById('rig');
    el.addEventListener('thumbstickmoved', this.logThumbstick.bind(this));
    el.addEventListener('thumbstickdown', this.thumbstickdown.bind(this));
  },

  tick(time, delta) {
    velocity.multiplyScalar(0.97);
    rotVel *= 0.97;

    // Get movement vector and translate position.
    // this.rig.object3D.position.add(velocity);

    this.rig.object3D.position.add(this.getMovementVector(delta));
    this.rig.object3D.rotation.y -= rotVel;

    if (this.rig.object3D.position.y < 1.7) {
      this.rig.object3D.position.y = 1.7;
    }
  },

  logThumbstick(evt) {
    velocity.add(new THREE.Vector3(evt.detail.x * 0.001, 0, evt.detail.y * 0.001));
  },

  getMovementVector: (function () {
    const directionVector = new THREE.Vector3(0, 0, 0);
    const rotationEuler = new THREE.Euler(0, 0, 0, 'YXZ');

    return function (delta) {
      const rotation = this.rig.getAttribute('rotation');
      directionVector.copy(velocity);
      directionVector.multiplyScalar(delta);

      // Absolute
      if (!rotation) { return directionVector; }

      // Transform direction relative to heading.
      rotationEuler.set(THREE.Math.degToRad(rotation.x), THREE.Math.degToRad(rotation.y), 0);
      directionVector.applyEuler(rotationEuler);
      return directionVector;
    };
  }()),

  thumbstickdown() {
    velocity.multiplyScalar(0.2);
  },

});

AFRAME.registerComponent('listener-left', {
  init() {
    // console.log('listener');
    const { el } = this;
    this.rig = document.getElementById('rig');
    el.addEventListener('thumbstickmoved', this.logThumbstick.bind(this));
    // el.addEventListener('triggerdown', this.triggerdown.bind(this));
    el.addEventListener('thumbstickdown', this.thumbstickdown.bind(this));
    el.addEventListener('surfacedown', this.surfacedown.bind(this));
    el.addEventListener('xbuttondown', this.xbuttondown.bind(this));
    el.addEventListener('ybuttondown', this.ybuttondown.bind(this));
  },

  logThumbstick(evt) {
    velocity.add(new THREE.Vector3(0, -evt.detail.y * 0.001, 0));
    // rotation
    rotVel += evt.detail.x * 0.001;
    rotVel = Math.max(-0.1, Math.min(0.1, rotVel));
  },

  thumbstickdown() {
    velocity.y *= 0.2;
    rotVel *= 0.2;
  },

  surfacedown() {
    // log('surfacedown');
  },

  xbuttondown() {
    app.menu.toggle();
  },

  ybuttondown() {
    Meteor.call('undoCubeInsert');
  },
});
