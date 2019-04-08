const loadFish1 = async () => {
  const flipped = randSign();
  const boarder = 11;

  const position = [flipped * boarder, randFloat(0.5, 3), randFloat(-5, -1)];
  const scale = 0.1 * randFloat(0.95, 1.05);
  const rotation = [
    -90 * THREE.Math.DEG2RAD,
    -flipped * 90 * THREE.Math.DEG2RAD,
    -flipped * 90 * THREE.Math.DEG2RAD
  ];

  const fish1 = await loadModel(
    "models/fish1/fish1.png",
    "models/fish1/fish1.obj"
  );

  fish1.position.set(...position);
  fish1.scale.set(scale, scale, scale);
  fish1.rotation.set(...rotation);
  scene.add(fish1);

  const speed = flipped * 0.04 * randFloat(0.8, 1.2);
  const wave = 0.2 * randFloat(0.8, 1.2);
  const freq = randFloat(900, 1100);

  const animation = () => {
    if (Math.abs(fish1.position.x) > boarder) {
      scene.remove(fish1);
      delete fish1;
      return;
    }

    fish1.position.x -= speed;
    fish1.position.y = position[1] + Math.sin(performance.now() / freq) * wave;
  };

  animations.push(animation);
};
