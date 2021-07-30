const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(Error('Promise Rejected'));
resolve('Resolved');
  },1000);
});

promise.then((res) => {
  console.log(res);
});

promise.catch((err) => {
  alert(err);
})
