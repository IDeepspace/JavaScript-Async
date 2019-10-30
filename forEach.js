// 生成数据
const getNumbers = () => {
  return Promise.resolve([1, 2, 3]);
};

// 异步处理
const doMulti = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num) {
        resolve(num * num);
      } else {
        reject(new Error('num not specified'));
      }
    }, 2000);
  });
};

// 主函数
const main = async () => {
  console.log('start');
  const nums = await getNumbers();
  nums.forEach(async (x) => {
    const res = await doMulti(x);
    console.log(res);
  });
  console.log('end');
};

// const main = async () => {
//   console.log('start');
//   const nums = await getNumbers();
//   for (const x of nums) {
//     const res = await doMulti(x);
//     console.log(res);
//   }
//   console.log('end');
// };

// 执行
main();
