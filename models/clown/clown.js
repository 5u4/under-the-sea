const loadClown = async () => {
  const flipped = randSign();
  const boarder = 20;

  const position = [flipped * boarder, randFloat(0.5, 3.5), randFloat(-6, -1)];
  const scale = 0.03 * randFloat(0.95, 1.05);
  const rotation = [
    -90 * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD,
    (flipped === 1 ? 0 : 180) * THREE.Math.DEG2RAD
  ];

  const clown = await loadModel(
    "models/clown/clown.jpg",
    "models/clown/clown.obj"
  );

  clown.position.set(...position);
  clown.scale.set(scale, scale, scale);
  clown.rotation.set(...rotation);
  scene.add(clown);

  const speed = flipped * 0.03 * randFloat(0.8, 1.2);
  const wave = 0.3 * randFloat(0.8, 1.2);
  const freq = randFloat(900, 1100);

  const animation = () => {
    if (Math.abs(clown.position.x) > boarder) {
      scene.remove(clown);
      delete clown;
      return;
    }

    clown.position.x -= speed;
    clown.position.y = position[1] + Math.sin(performance.now() / freq) * wave;
  };

  animations.push(animation);
};
