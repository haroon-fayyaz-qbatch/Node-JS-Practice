const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(Error('Promise Rejected'));
resolve(1);
  },2000);
});


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(Error('Promise Rejected'));
resolve(9);
  },1000);
});


Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});

