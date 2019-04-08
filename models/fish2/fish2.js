const loadFish2 = async () => {
  const fish2 = await loadModel(
    "models/fish2/fish2.jpg",
    "models/fish2/fish2.obj"
  );

  let position, scale, rotation, speed, wave, freq;

  const build = () => {
    flipped = randSign();
    position = randPosition(flipped);
    scale = randScale(0.02);
    rotation = [
      -90 * THREE.Math.DEG2RAD,
      -flipped * 90 * THREE.Math.DEG2RAD,
      -flipped * 90 * THREE.Math.DEG2RAD
    ];
    speed = randSpeed(flipped);
    wave = randWave();
    freq = randFreq();

    fish2.position.set(...position);
    fish2.scale.set(scale, scale, scale);
    fish2.rotation.set(...rotation);
  };

  build();
  scene.add(fish2);

  const animation = () => {
    if (Math.abs(fish2.position.x) > boarder) {
      build();
      return;
    }

    fish2.position.x -= speed;
    fish2.position.y = position[1] + Math.sin(pincrement / freq) * wave;
  };

  animations.push(animation);
};
