const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randFloat = (min, max) => Math.random() * (max - min + 1) + min;

const randSign = () => (randInt(0, 1) === 0 ? 1 : -1);

const boarder = 11;

const randPosition = flipped => [
  flipped * boarder,
  randFloat(0.5, 3),
  randFloat(-5, -1)
];

const randScale = scale => scale * randFloat(0.95, 1.05);

const randSpeed = flipped => flipped * 0.04 * randFloat(0.7, 1.3);

const randWave = () => 0.4 * randFloat(0.7, 1.3);

const randFreq = () => randFloat(700, 1300);

let pincrement = performance.now();
