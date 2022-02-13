Meteor.methods({
  cubesInsert(data) {
    check(data, Object);

    // check if cube exists at this position
    const cube = Cubes.findOne({ position: data.position });
    if (cube) return;

    data.createdAt = new Date();
    data.ownerId = Meteor.userId();
    Cubes.insert(data);
  },
  undoCubeInsert() {
    const cube = Cubes.findOne({ ownerId: Meteor.userId() }, { sort: { createdAt: -1 } });
    if (cube) Cubes.remove(cube._id);
  },
});
