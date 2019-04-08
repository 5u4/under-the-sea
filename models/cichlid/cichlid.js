const loadCichlid = async () => {
  const cichlid = await loadModel(
    "models/cichlid/cichlid.jpg",
    "models/cichlid/cichlid.obj"
  );

  let position, scale, rotation, speed, wave, freq;

  const build = () => {
    flipped = randSign();
    position = randPosition(flipped);
    scale = randScale(0.04);
    rotation = [
      flipped * 90 * THREE.Math.DEG2RAD,
      (flipped === 1 ? 180 : 0) * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD
    ];
    speed = randSpeed(flipped);
    wave = randWave();
    freq = randFreq();

    cichlid.position.set(...position);
    cichlid.scale.set(scale, scale, scale);
    cichlid.rotation.set(...rotation);
  };

  build();
  scene.add(cichlid);

  const animation = () => {
    if (Math.abs(cichlid.position.x) > boarder) {
      build();
      return;
    }

    cichlid.position.x -= speed;
    cichlid.position.y = position[1] + Math.cos(pincrement / freq) * wave;
  };

  animations.push(animation);
};
