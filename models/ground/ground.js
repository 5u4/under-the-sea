const loadGround = async () => {
  const ground = await loadModel(
    "models/ground/ground.jpg",
    "models/ground/ground.obj"
  );

  const scale = 0.02;
  ground.scale.set(scale, scale, scale);
  scene.add(ground);
};
