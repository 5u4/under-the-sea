const fishes = [
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

const groundObj = [loadCoral, loadLog];

const totalFishes = 30;
const totalGroundObj = 3;

const spawn = () => {
  for (let i = 0; i < totalFishes; i++) {
    fishes[randInt(0, fishes.length - 1)]();
  }

  for (let i = 0; i < totalGroundObj; i++) {
    groundObj[randInt(0, groundObj.length - 1)]();
  }
};
