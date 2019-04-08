const loadPenguin = async () => {
  const penguin = await loadModel("./models/penguin");
  scene.add(penguin);
};
loadPenguin();

render();
