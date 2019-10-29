const p = new Promise(function (resolve, reject) {
  //Do some Async
  setTimeout(function () {
    console.log('执行完成');
    resolve('数据');
  }, 2000);
});
