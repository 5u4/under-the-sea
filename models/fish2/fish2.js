const loadFish2 = async () => {
  const flipped = randSign();
  const boarder = 11;

  const position = [flipped * boarder, randFloat(0.5, 3), randFloat(-5, -1)];
  const scale = 0.02 * randFloat(0.95, 1.05);
  const rotation = [
    -90 * THREE.Math.DEG2RAD,
    -flipped * 90 * THREE.Math.DEG2RAD,
    -flipped * 90 * THREE.Math.DEG2RAD
  ];

  const fish2 = await loadModel(
    "models/fish2/fish2.jpg",
    "models/fish2/fish2.obj"
  );

  fish2.position.set(...position);
  fish2.scale.set(scale, scale, scale);
  fish2.rotation.set(...rotation);
  scene.add(fish2);

  const speed = flipped * 0.04 * randFloat(0.8, 1.2);
  const wave = 0.2 * randFloat(0.8, 1.2);
  const freq = randFloat(900, 1100);

  const animation = () => {
    if (Math.abs(fish2.position.x) > boarder) {
      scene.remove(fish2);
      delete fish2;
      return;
    }

    fish2.position.x -= speed;
    fish2.position.y = position[1] + Math.sin(pincrement / freq) * wave;
  };

  animations.push(animation);
};
