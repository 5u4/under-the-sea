const _ratio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, _ratio, 0.1, 1000);
camera.position.set(0, 1, 3);

addEventListener("mousemove", e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 1;
  camera.lookAt(x, -y, 0);
});
