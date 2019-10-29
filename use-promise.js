function runAsync() {
  const p = new Promise(function (resolve, reject) {
    //Do some Async
    setTimeout(function () {
      console.log('执行完成');
      resolve('数据');
    }, 2000);
  });
  return p;
}

runAsync().then(
  function (data) {
    // success
    console.log(`成功拿到${data}`);
    //后面可以用传过来的数据做些其他操作
    // ......
  },
  function (error) {
    // failure
    console.log(error);
  }
);

// runAsync()
//   .then(function (data) {
//     console.log('resolved');
//     console.log(data);
//     console.log(somedata); //此处的somedata未定义
//   })
//   .catch(function (error) {
//     console.log('rejected');
//     console.log(error);
//   });
