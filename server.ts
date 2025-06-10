function checkCar(name?: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!name) {
        resolve(`car is ${name}`);
      } else {
        reject('name is required');
      }
    }, 1000);
  });
}

// console.log('----------START-------------');
// checkCar('Poyals car')
//   .then((result) => {
//     console.log(result);
//     return checkCar('Silvers car');
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// console.log('----------END-------------');

// .then((result2) => {
//   console.log(result2);
//   return checkCar();
// })
//   .then((result2) => {
//     console.log(result2);
//     return checkCar();
//   })

checkCar()
  .then((result) => {
    console.log(result);
    return checkCar('Silvers car');
  })
  .then((result) => {
    console.log('result2', result);
  })
  .catch((error) => {
    console.error(error);
  });

checkCar()
  .then((result) => {
    console.log(result);
    checkCar('Silvers car')
      .then((result) => {
        console.log('result2', result);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });

function carPrinter(name?: string) {
  return new Promise((resolve, reject) => {
    if (!!name) {
      resolve(`car is ${name}`);
    } else {
      reject('name is required');
    }
  });
}

carPrinter('Poyal Car').then((result) => console.log(result));
console.log('why now me?');
