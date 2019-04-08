const glimmer = new THREE.PointLight(0x111111, 2, 10);
glimmer.position.set(0, 1, 0);
scene.add(glimmer);

const skullLightIntensity = 1;
const skullLightDistance = 2;
const skullLight = new THREE.PointLight(0xaa0000);
skullLight.position.set(-4.8, -1, -3.8);
scene.add(skullLight);

const skullLightAnimation = () => {
  skullLight.intensity =
    skullLightIntensity * Math.sin(pincrement / 1000) + skullLightIntensity;
  skullLight.distance =
    skullLightDistance * Math.sin(pincrement / 1000) + skullLightDistance;
};

animations.push(skullLightAnimation);
