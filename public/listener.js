AFRAME.registerComponent("listener", {
    init: function () {
      console.log("listener");
      var el = this.el;
      this.box = document.getElementById('box').object3D;
      this.rig = document.getElementById('rig');
  
      var self = this;
      el.addEventListener("thumbstickmoved", this.logThumbstick.bind(this));
      el.addEventListener("xbuttondown", function (evt) {
        self.box.visible = !self.box.visible;
      });
    },
  
    logThumbstick: function (evt) {
      if (evt.detail.y > 0.95) {
        console.log("DOWN");
      }
      if (evt.detail.y < -0.95) {
        console.log("UP");
        //this.rig.setAttribute('position', {x: 1, y: 2, z: -3});
      }
      if (evt.detail.x < -0.95) {
        console.log("LEFT");
        // var pos = rig.object3D.position;
        // pos.x -= 0.01;
        // this.rig.setAttribute('position', pos);
      }
      if (evt.detail.x > 0.95) {
        console.log("RIGHT");
      }
    },
  });
  