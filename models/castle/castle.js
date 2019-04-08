const loadCastle = async () => {
  const castle = await loadModel(
    "models/castle/castle.jpg",
    "models/castle/castle.obj"
  );

  let position, scale, rotation, light, intensity, distance, freq;

  const build = () => {
    position = [randFloat(0, 3), 0.1, randFloat(-4, -2)];
    scale = 0.1 * randFloat(0.7, 1.3);
    rotation = [
      -90 * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD,
      randFloat(0, 360) * THREE.Math.DEG2RAD
    ];
    intensity = 3;
    distance = 2;
    freq = randFloat(800, 2200);

    castle.position.set(...position);
    castle.scale.set(scale, scale, scale);
    castle.rotation.set(...rotation);
  };

  const buildLight = () => {
    light = new THREE.PointLight(0x202000, intensity, distance);
    light.position.set(...position);
    scene.add(light);
  };

  build();
  buildLight();
  scene.add(castle);

  const animation = () => {
    light.intensity = intensity * Math.sin(pincrement / freq) + intensity;
    light.distance = distance * Math.sin(pincrement / freq) + distance;
  };

  animations.push(animation);
};
