const loadElephant = async () => {
  const elephant = await loadModel(
    "models/elephant/elephant.jpg",
    "models/elephant/elephant.obj"
  );

  let position, scale, rotation, light, intensity, distance, freq;

  const build = () => {
    position = [randFloat(-3, 0), 0.1, randFloat(-3, -1)];
    scale = 0.3 * randFloat(0.7, 1.3);
    rotation = [
      90 * THREE.Math.DEG2RAD,
      180 * THREE.Math.DEG2RAD,
      randFloat(0, 360) * THREE.Math.DEG2RAD
    ];
    intensity = 3;
    distance = 2;
    freq = randFloat(800, 2200);

    elephant.position.set(...position);
    elephant.scale.set(scale, scale, scale);
    elephant.rotation.set(...rotation);
  };

  const buildLight = () => {
    light = new THREE.PointLight(0x000020, intensity, distance);
    light.position.set(...position);
    scene.add(light);
  };

  build();
  buildLight();
  scene.add(elephant);

  const animation = () => {
    light.intensity = intensity * Math.sin(pincrement / freq) + intensity;
    light.distance = distance * Math.sin(pincrement / freq) + distance;
  };

  animations.push(animation);
};
