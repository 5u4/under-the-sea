const loadCoral = async () => {
  const coral = await loadModel(
    "models/coral/coral.jpg",
    "models/coral/coral.obj"
  );

  let position, scale, rotation, light, intensity, distance, freq;

  const build = () => {
    position = [randFloat(-3, 3), 0.1, randFloat(-5, 0)];
    scale = 0.01 * randFloat(0.7, 1.3);
    rotation = [
      -90 * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD,
      randFloat(0, 360) * THREE.Math.DEG2RAD
    ];
    intensity = 2;
    distance = 1;
    freq = randFloat(800, 2200);

    coral.position.set(...position);
    coral.scale.set(scale, scale, scale);
    coral.rotation.set(...rotation);
  };

  const buildLight = () => {
    light = new THREE.PointLight(0x100010, intensity, distance);
    light.position.set(...position);
    light.position.y += 0.2;
    scene.add(light);
  };

  build();
  buildLight();
  scene.add(coral);

  const animation = () => {
    light.intensity = intensity * Math.sin(pincrement / freq) + intensity;
    light.distance = distance * Math.sin(pincrement / freq) + distance;
  };

  animations.push(animation);
};
