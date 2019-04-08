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

const corals = [loadCoral];

const totalFishes = 30;
const totalCorals = 3;

const spawn = () => {
  for (let i = 0; i < totalFishes; i++) {
    fishes[randInt(0, fishes.length - 1)]();
  }

  for (let i = 0; i < totalCorals; i++) {
    corals[randInt(0, corals.length - 1)]();
  }
};
