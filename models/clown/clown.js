const loadClown = async () => {
  const clown = await loadModel(
    "models/clown/clown.jpg",
    "models/clown/clown.obj"
  );

  const scale = 0.03;
  clown.position.set(1.5, 0.5, -1);
  clown.scale.set(scale, scale, scale);
  clown.rotation.set(-90 * THREE.Math.DEG2RAD, 0, 0);
  scene.add(clown);
};
