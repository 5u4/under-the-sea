const spawns = [
  loadClown,
  loadBlueTang,
  loadCichlid,
  loadFish2,
  loadFish2,
  loadFish2,
  loadFish3,
  loadFish3,
  loadFish3
];

const totalFishes = 30;

const spawn = () => {
  for (let i = 0; i < totalFishes; i++) {
    spawns[randInt(0, spawns.length - 1)]();
  }
};
