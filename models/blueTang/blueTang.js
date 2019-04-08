const loadBlueTang = async () => {
  const blueTang = await loadModel(
    "models/blueTang/blueTang.jpg",
    "models/blueTang/blueTang.obj"
  );

  const scale = 0.1;
  blueTang.position.set(10, 2, -4);
  blueTang.scale.set(scale, scale, scale);
  blueTang.rotation.set(
    -90 * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD,
    -90 * THREE.Math.DEG2RAD
  );
  scene.add(blueTang);

  let speed = 0.03;
  const boarder = 11;
  const originalHeight = 2;

  const animation = () => {
    if (Math.abs(blueTang.position.x) <= boarder) {
      blueTang.position.x -= speed;
      blueTang.position.y =
        originalHeight + Math.sin(performance.now() / 1000) * 0.4;
    } else {
      speed = -speed;
      blueTang.rotation.z = -blueTang.rotation.z;
      blueTang.position.x -= speed;
    }
  };

  animations.push(animation);
};
