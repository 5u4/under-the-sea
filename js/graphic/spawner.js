const spawns = [loadClown, loadBlueTang, loadFish1, loadCichlid];

let countdown = randInt(0, 3);

const spawn = () => {
  if (countdown > 0) {
    countdown--;
    return;
  }

  spawns[randInt(0, spawns.length - 1)]();
  countdown = randInt(60, 300);
};
