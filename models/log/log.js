const loadLog = async () => {
  const log = await loadModel("models/log/log.jpg", "models/log/log.obj");

  let position, scale, rotation;

  const build = () => {
    position = [randFloat(-3, 3), 0.1, randFloat(-5, 0)];
    scale = 0.02 * randFloat(0.7, 1.3);
    rotation = [
      -90 * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD,
      randFloat(0, 360) * THREE.Math.DEG2RAD
    ];
    intensity = 2;
    distance = 1;
    freq = randFloat(800, 2200);

    log.position.set(...position);
    log.scale.set(scale, scale, scale);
    log.rotation.set(...rotation);
  };

  build();
  scene.add(log);
};
