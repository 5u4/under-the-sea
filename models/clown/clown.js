const loadClown = async () => {
  const clown = await loadModel(
    "models/clown/clown.jpg",
    "models/clown/clown.obj"
  );

  let position, scale, rotation, speed, wave, freq;

  const build = () => {
    flipped = randSign();
    position = randPosition(flipped);
    scale = randScale(0.015);
    rotation = [
      -90 * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD,
      (flipped === 1 ? 0 : 180) * THREE.Math.DEG2RAD
    ];
    speed = randSpeed(flipped);
    wave = randWave();
    freq = randFreq();

    clown.position.set(...position);
    clown.scale.set(scale, scale, scale);
    clown.rotation.set(...rotation);
  };

  build();
  scene.add(clown);

  const animation = () => {
    if (Math.abs(clown.position.x) > boarder) {
      build();
      return;
    }

    clown.position.x -= speed;
    clown.position.y = position[1] + Math.sin(pincrement / freq) * wave;
  };

  animations.push(animation);
};
