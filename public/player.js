const equals = (a, b) => a.x === b.x && a.y === b.y && a.z === b.z;

AFRAME.registerComponent('player', {
  init() {
    this.oldPos = new THREE.Vector3();
    this.oldRot = new THREE.Vector3();
  },

  tick() {
    const pos = this.el.object3D.position;
    pos.x = Math.round(pos.x * 1000) / 1000;
    pos.y = Math.round(pos.y * 1000) / 1000;
    pos.z = Math.round(pos.z * 1000) / 1000;
    const rot = this.el.object3D.rotation;
    rot.x = Math.round(rot.x * 1000) / 1000;
    rot.y = Math.round(rot.y * 1000) / 1000;
    rot.z = Math.round(rot.z * 1000) / 1000;
    if (equals(pos, this.oldPos) && equals(rot, this.oldRot)) return;
    this.oldPos.copy(pos);
    this.oldRot.copy(rot);
    Meteor.call('updatePlayer', { position: pos, rotation: { x: THREE.Math.radToDeg(rot.x), y: THREE.Math.radToDeg(rot.y), z: THREE.Math.radToDeg(rot.z) } });
  },
});

AFRAME.registerComponent('player-head', {
  init() {
    // this.oldPos = new THREE.Vector3();
    this.oldRot = new THREE.Vector3();
  },

  tick() {
    // const pos = this.el.object3D.position;
    // pos.x = Math.round(pos.x * 1000) / 1000;
    // pos.y = Math.round(pos.y * 1000) / 1000;
    // pos.z = Math.round(pos.z * 1000) / 1000;
    const rot = this.el.object3D.rotation;
    rot.x = Math.round(rot.x * 1000) / 1000;
    rot.y = Math.round(rot.y * 1000) / 1000;
    rot.z = Math.round(rot.z * 1000) / 1000;
    // if (pos.equals(this.oldPos) && rot.equals(this.oldRot)) return;
    if (equals(rot, this.oldRot)) return;
    // this.oldPos.copy(pos);
    this.oldRot.copy(rot);
    // Meteor.call('updatePlayer', { 'head.position': pos, 'head.rotation': { x: THREE.Math.radToDeg(rot.x), y: THREE.Math.radToDeg(rot.y), z: THREE.Math.radToDeg(rot.z) } });
    Meteor.call('updatePlayer', { 'head.rotation': { x: THREE.Math.radToDeg(rot.x), y: THREE.Math.radToDeg(rot.y), z: THREE.Math.radToDeg(rot.z) } });
  },
});
