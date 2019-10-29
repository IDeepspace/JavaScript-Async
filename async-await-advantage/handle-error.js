const makeRequest = () => {
  try {
    getJSON().then(result => {
      // JSON.parse可能会出错
      const data = JSON.parse(result);
      console.log(data);
    });
    // 取消注释，处理异步代码的错误
    // .catch((err) => {
    //   console.log(err)
    // })
  } catch (err) {
    console.log(err);
  }
};


// 使用 async/await 
// const makeRequest = async () => {
//   try {
//     // JSON.parse可能会出错
//     const data = JSON.parse(await getJSON());
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
