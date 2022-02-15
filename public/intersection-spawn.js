AFRAME.registerComponent('intersection-spawn', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse,
  },

  init() {
    const { data } = this;
    const { el } = this;

    el.addEventListener(data.event, evt => {
      const { point } = evt.detail.intersection;
      // stick to the grid
      const snap = { x: 0.5, y: 0.5, z: 0.5 };
      const offset = { x: 0.25, y: 0.25, z: 0.25 };
      point.x = Math.floor(point.x / snap.x) * snap.x + offset.x;
      point.y = Math.floor(point.y / snap.y) * snap.y + offset.y;
      point.z = Math.floor(point.z / snap.z) * snap.z + offset.z;

      Meteor.call('cubesInsert', { position: point, color: '#666' });
    });
  },
});
