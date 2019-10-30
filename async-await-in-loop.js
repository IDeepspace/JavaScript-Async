const fetch = require('node-fetch');
const bluebird = require('bluebird');

const getZhihuColumn = async (id) => {
  await bluebird.delay(1000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
};

// const showColumnInfo = async () => {
//   console.time('showColumnInfo');

//   const names = ['feweekly', 'toolingtips'];

//   for (const name of names) {
//     const column = await getZhihuColumn(name);
//     console.log(`Name: ${column.title} `);
//     console.log(`Intro: ${column.intro} `);
//   }

//   console.timeEnd('showColumnInfo');
// };

// do better
const showColumnInfo = async () => {
  console.time('showColumnInfo');

  const names = ['feweekly', 'toolingtips'];

  const promises = names.map(name => getZhihuColumn(name));

  for (const promise of promises) {
    const column = await promise;
    console.log(`Name: ${column.title} `);
    console.log(`Intro: ${column.intro} `);
  }

  console.timeEnd('showColumnInfo');
};

showColumnInfo();
