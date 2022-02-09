AFRAME.registerComponent("collider-check", {
    dependencies: ["raycaster"],
  
    init: function () {
      this.el.addEventListener("raycaster-intersection", function (evt) {
        console.log("Player hit something!");
        evt.detail.els.forEach((obj) => {
          obj.object3D.visible = false;
        });
      });
    },
  });
  console.log('test');