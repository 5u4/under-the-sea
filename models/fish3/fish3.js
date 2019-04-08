const loadFish3 = async () => {
  const fish3 = await loadModel(
    "models/fish3/fish3.jpg",
    "models/fish3/fish3.obj"
  );

  let position, scale, rotation, speed, wave, freq;

  const build = () => {
    flipped = randSign();
    position = randPosition(flipped);
    scale = randScale(0.1);
    rotation = [
      flipped * 90 * THREE.Math.DEG2RAD,
      (flipped === 1 ? 180 : 0) * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD
    ];
    speed = randSpeed(flipped);
    wave = randWave();
    freq = randFreq();

    fish3.position.set(...position);
    fish3.scale.set(scale, scale, scale);
    fish3.rotation.set(...rotation);
  };

  build();
  scene.add(fish3);

  const animation = () => {
    if (Math.abs(fish3.position.x) > boarder) {
      build();
      return;
    }

    fish3.position.x -= speed;
    fish3.position.y = position[1] + Math.sin(pincrement / freq) * wave;
  };

  animations.push(animation);
};
