const loadFish3 = async () => {
  const flipped = randSign();
  const boarder = 11;

  const position = [flipped * boarder, randFloat(0.5, 3), randFloat(-5, -1)];
  const scale = 0.1 * randFloat(0.95, 1.05);
  const rotation = [
    flipped * 90 * THREE.Math.DEG2RAD,
    (flipped === 1 ? 180 : 0) * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD
  ];

  const fish3 = await loadModel(
    "models/fish3/fish3.jpg",
    "models/fish3/fish3.obj"
  );

  fish3.position.set(...position);
  fish3.scale.set(scale, scale, scale);
  fish3.rotation.set(...rotation);
  scene.add(fish3);

  const speed = flipped * 0.04 * randFloat(0.8, 1.2);
  const wave = 0.2 * randFloat(0.8, 1.2);
  const freq = randFloat(900, 1100);

  const animation = () => {
    if (Math.abs(fish3.position.x) > boarder) {
      scene.remove(fish3);
      delete fish3;
      return;
    }

    fish3.position.x -= speed;
    fish3.position.y = position[1] + Math.sin(pincrement / freq) * wave;
  };

  animations.push(animation);
};
