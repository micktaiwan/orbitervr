/**
 * Set random color on material.
 */

function getRandomColor() {
  const letters = '123456789';
  let color = '#';
  const r = Math.floor(Math.random() * 9);
  for (let i = 0; i < 6; i++) {
    color += letters[r];
  }
  return color;
}

AFRAME.registerComponent('random-color', {
  dependencies: ['material'],

  init() {
    this.el.setAttribute('material', 'color', getRandomColor());
  },
});
