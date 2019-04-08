const loadFish1 = async () => {
  const fish1 = await loadModel(
    "models/fish1/fish1.png",
    "models/fish1/fish1.obj"
  );

  const scale = 0.1;
  fish1.position.set(5, 1.6, -3);
  fish1.scale.set(scale, scale, scale);
  fish1.rotation.set(
    -90 * THREE.Math.DEG2RAD,
    -90 * THREE.Math.DEG2RAD,
    -90 * THREE.Math.DEG2RAD
  );
  scene.add(fish1);
};
