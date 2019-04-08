const light = new THREE.PointLight(0xffffff, 1, 50);
light.position.set(1, 1, 1);
scene.add(light);

ambientLight = new THREE.AmbientLight(0x111111);
scene.add(ambientLight);
