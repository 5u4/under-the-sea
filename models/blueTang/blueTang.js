const loadBlueTang = async () => {
  const blueTang = await loadModel(
    "models/blueTang/blueTang.jpg",
    "models/blueTang/blueTang.obj"
  );

  const scale = 0.1;
  blueTang.position.set(2, 2, -4);
  blueTang.scale.set(scale, scale, scale);
  blueTang.rotation.set(
    -90 * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD,
    -90 * THREE.Math.DEG2RAD
  );
  scene.add(blueTang);
};
