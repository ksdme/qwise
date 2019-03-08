const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const nonRecurringRandIntGenerator = (start, end) => {
  const array = [];

  const fillSamples = () => {
    for (let l = start; l <= end; l++)
      array.push(l);
  };

  return () => {
    if (array.length < 1)
      fillSamples();

    const vector = array.slice(randInt(0, array.length - 1), 1);
    return vector[0];
  };
};

export default {
  randInt,
  nonRecurringRandIntGenerator,
}
