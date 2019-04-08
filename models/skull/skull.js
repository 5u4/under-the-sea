const loadSkull = async () => {
  const skull = await loadModel(
    "models/skull/skull.jpg",
    "models/skull/skull.obj"
  );

  const scale = 0.1;
  skull.position.set(-5, -0.2, -4);
  skull.scale.set(scale, scale, scale);
  skull.rotation.set(
    -90 * THREE.Math.DEG2RAD,
    -10 * THREE.Math.DEG2RAD,
    60 * THREE.Math.DEG2RAD
  );
  scene.add(skull);
};
