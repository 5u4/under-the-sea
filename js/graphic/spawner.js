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

let countdown = randInt(0, 3);

const spawn = () => {
  if (countdown > 0) {
    countdown--;
    return;
  }

  spawns[randInt(0, spawns.length - 1)]();
  countdown = randInt(30, 160);
};
