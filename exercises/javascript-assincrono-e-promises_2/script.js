const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const thisArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = thisArray.map(number => number * number)
      .reduce((acc, cur) => acc + cur, 0);
    (sum < 8000) ? resolve(sum) : reject();
    console.log(sum);
  });
  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .catch(() => console.log(`XIBLEU =(`));
};

fetchPromise();