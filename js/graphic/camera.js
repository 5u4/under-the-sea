const _ratio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(50, _ratio, 0.1, 1000);
camera.position.set(0, 1, 3);
