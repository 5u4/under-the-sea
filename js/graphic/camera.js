const _ratio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, _ratio, 0.1, 1000);
camera.position.set(0, 1, 3);

const spotLight = new THREE.SpotLight(
  0xffffff,
  1,
  15,
  15 * THREE.Math.DEG2RAD,
  0.5,
  1
);
spotLight.position.set(0, 1, 3);
spotLight.castShadow = true;
spotLightTarget = new THREE.Object3D();
scene.add(spotLightTarget);
spotLight.target = spotLightTarget;

scene.add(spotLight);

addEventListener("mousemove", e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 1;
  camera.lookAt(x, -y, 0);
  spotLightTarget.position.set(x * 9, -y * 5 - 2, 0);
});
