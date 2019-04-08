const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0x111111);
renderer.setSize(window.innerWidth, window.innerHeight);

addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

document.body.appendChild(renderer.domElement);

const render = () => {
  requestAnimationFrame(render);
  pincrement = performance.now();
  spawn();
  renderer.render(scene, camera);
  processAnimations();
};
