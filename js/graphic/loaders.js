const _textureLoader = new THREE.TextureLoader();
const _objLoader = new THREE.OBJLoader();

const loadModel = async (texturePath, objectPath) => {
  const material = await _loadTexture(texturePath);
  const object = await _loadObject(objectPath);
  _addMaterial(object, material);
  return object;
};

const _loadTexture = async path =>
  new Promise(resolve => {
    _textureLoader.load(path, texture =>
      resolve(
        new THREE.MeshPhongMaterial({
          map: texture
        })
      )
    );
  });

const _loadObject = async path =>
  new Promise(resolve => {
    _objLoader.load(path, object => resolve(object));
  });

const _addMaterial = (object, material) => {
  object.traverse(child => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });
};
