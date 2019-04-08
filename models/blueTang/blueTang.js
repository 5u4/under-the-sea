const loadBlueTang = async () => {
  const flipped = randSign();
  const boarder = 15;

  const position = [flipped * boarder, randFloat(0.5, 5), randFloat(-7, 0)];
  const scale = 0.1 * randFloat(0.95, 1.05);
  const rotation = [
    -90 * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD,
    -flipped * 90 * THREE.Math.DEG2RAD
  ];

  const blueTang = await loadModel(
    "models/blueTang/blueTang.jpg",
    "models/blueTang/blueTang.obj"
  );

  blueTang.position.set(...position);
  blueTang.scale.set(scale, scale, scale);
  blueTang.rotation.set(...rotation);
  scene.add(blueTang);

  const speed = flipped * 0.03 * randFloat(0.8, 1.2);
  const wave = 0.3 * randFloat(0.8, 1.2);
  const freq = randFloat(900, 1100);

  const animation = () => {
    if (Math.abs(blueTang.position.x) > boarder) {
      scene.remove(blueTang);
      delete blueTang;
      return;
    }

    blueTang.position.x -= speed;
    blueTang.position.y =
      position[1] + Math.sin(performance.now() / freq) * wave;
  };

  animations.push(animation);
};
