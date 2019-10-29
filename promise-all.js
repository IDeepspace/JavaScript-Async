function runAsync1() {
  const p = new Promise(function (resolve, reject) {
    //Do some Async
    setTimeout(function () {
      console.log('执行完成1');
      resolve('数据1');
    }, 2000);
  });
  return p;
}

function runAsync2() {
  const p = new Promise(function (resolve, reject) {
    //Do some Async
    setTimeout(function () {
      console.log('执行完成2');
      resolve('数据2');
    }, 5000);
  });
  return p;
}

function runAsync3() {
  const p = new Promise(function (resolve, reject) {
    //Do some Async
    setTimeout(function () {
      console.log('执行完成3');
      resolve('数据3');
    }, 1000);
  });
  return p;
}

Promise.all([runAsync1(), runAsync2(), runAsync3()]).then(function (results) {
  console.log(results);
});

// 执行完成1
// 执行完成2
// 执行完成3
// [ '数据1', '数据2', '数据3' ]
