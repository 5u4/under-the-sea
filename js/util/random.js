const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randFloat = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const randSign = () => {
  return randInt(0, 1) === 0 ? 1 : -1;
};
