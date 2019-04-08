const loadBlueTang = async () => {
  const blueTang = await loadModel(
    "models/blueTang/blueTang.jpg",
    "models/blueTang/blueTang.obj"
  );

  let position, scale, rotation, speed, wave, freq;

  const build = () => {
    flipped = randSign();
    position = randPosition(flipped);
    scale = randScale(0.025);
    rotation = [
      -90 * THREE.Math.DEG2RAD,
      0 * THREE.Math.DEG2RAD,
      -flipped * 90 * THREE.Math.DEG2RAD
    ];
    speed = randSpeed(flipped);
    wave = randWave();
    freq = randFreq();

    blueTang.position.set(...position);
    blueTang.scale.set(scale, scale, scale);
    blueTang.rotation.set(...rotation);
  };

  build();
  scene.add(blueTang);

  const animation = () => {
    if (Math.abs(blueTang.position.x) > boarder) {
      build();
      return;
    }

    blueTang.position.x -= speed;
    blueTang.position.y = position[1] + Math.sin(pincrement / freq) * wave;
  };

  animations.push(animation);
};
