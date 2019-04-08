const loadGround = async () => {
  const ground = await loadModel(
    "./models/ground/ground.jpg",
    "./models/ground/ground.obj"
  );

  const scale = 0.02;
  ground.scale.set(scale, scale, scale);
  ground.position.set(0, 0, 0);
  scene.add(ground);
};
