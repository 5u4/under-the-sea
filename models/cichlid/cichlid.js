const loadCichlid = async () => {
  const cichlid = await loadModel(
    "models/cichlid/cichlid.jpg",
    "models/cichlid/cichlid.obj"
  );

  const scale = 0.4;
  cichlid.position.set(-4, 3, -2);
  cichlid.scale.set(scale, scale, scale);
  cichlid.rotation.set(
    -90 * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD,
    0 * THREE.Math.DEG2RAD
  );
  scene.add(cichlid);
};
