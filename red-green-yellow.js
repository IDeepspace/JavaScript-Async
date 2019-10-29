function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

const light = function (timmer, color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      color();
      resolve();
    }, timmer);
  });
};

const step = function () {
  Promise.resolve()
    .then(function () {
      return light(3000, red);
    })
    .then(function () {
      return light(2000, green);
    })
    .then(function () {
      return light(1000, yellow);
    })
    .then(function () {
      step();
    });
};

step();
