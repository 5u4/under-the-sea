const loadCoral = async () => {
  const coral = await loadModel(
    "models/coral/coral.jpg",
    "models/coral/coral.obj"
  );

  let position, scale, rotation;

  const build = () => {
    position = [randFloat(-3, 3), 0.1, randFloat(-5, 0)];
    scale = 0.01 * randFloat(0.7, 1.3);
    rotation = [
      -90 * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD,
      randFloat(0, 360) * THREE.Math.DEG2RAD
    ];

    coral.position.set(...position);
    coral.scale.set(scale, scale, scale);
    coral.rotation.set(...rotation);
  };

  build();
  scene.add(coral);
};
