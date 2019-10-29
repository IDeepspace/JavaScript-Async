const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

function* ascReadFile() {
  yield readFile('./a.txt');
  yield readFile('./b.txt');
  yield readFile('./c.txt');
}

let g = ascReadFile();
g.next().value.then(data => {
  console.log(data.toString());
  return g.next().value;
}).then(data => {
  console.log(data.toString());
  return g.next().value;
}).then(data => {
  console.log(data.toString());
});
