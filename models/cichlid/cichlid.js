const loadCichlid = async () => {
  const flipped = randSign();
  const boarder = 11;

  const position = [flipped * boarder, randFloat(0, 4.5), randFloat(-15, 0)];
  const scale = [0.4, 0.4, 0.4];
  const rotation = [
    flipped * 90 * THREE.Math.DEG2RAD,
    (flipped === 1 ? 180 : 0) * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD
  ];

  const cichlid = await loadModel(
    "models/cichlid/cichlid.jpg",
    "models/cichlid/cichlid.obj"
  );

  cichlid.position.set(...position);
  cichlid.scale.set(...scale);
  cichlid.rotation.set(...rotation);
  scene.add(cichlid);

  const speed = flipped * 0.03 * randFloat(0.8, 1.2);
  const wave = 0.3 * randFloat(0.8, 1.2);
  const freq = randFloat(900, 1100);

  const animation = () => {
    if (Math.abs(cichlid.position.x) > boarder) {
      scene.remove(cichlid);
      delete cichlid;
      return;
    }

    cichlid.position.x -= speed;
    cichlid.position.y =
      position[1] + Math.cos(performance.now() / freq) * wave;
  };

  animations.push(animation);
};
