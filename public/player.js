AFRAME.registerComponent('player', {
  init() {
    console.log('player');
    this.oldPos = new THREE.Vector3();
  },

  tick() {
    const pos = this.el.object3D.position;
    pos.x = Math.round(pos.x * 1000) / 1000;
    pos.y = Math.round(pos.y * 1000) / 1000;
    pos.z = Math.round(pos.z * 1000) / 1000;
    if (pos.equals(this.oldPos)) return;
    Meteor.call('updatePlayer', { position: pos });
    this.oldPos.x = pos.x;
    this.oldPos.y = pos.y;
    this.oldPos.z = pos.z;
  },
});
