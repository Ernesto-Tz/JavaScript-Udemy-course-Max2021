// const a = 4;
// const b = 5;

// const promise = new Promise(function(resolve, reject) {
//     // do thing, then…
//     console.log("working now...");
//     if (a === b) {
//     resolve("See, it worked!");
//     }
//     else {
//     reject(Error("It broke"));
//     }
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     });

// console.log(promise);

function checkIfEqual(a,b){
    const promise = new Promise(function(resolve, reject) {
        // do thing, then…
        console.log("working now...");
        if (a === b) {
        resolve("See, it worked!");
        }
        else {
        reject(Error("It broke"));
        }
    });
    return promise;
}
  
  
checkIfEqual(5,5)
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });

const add = function(x, y) {
    return new Promise((resolve,reject) => {
      const sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not add the two values!"));
      }
    });
};

const subtract = function(x, y) {
    return new Promise((resolve, reject) => {
        const sum = x - y;
        if (sum) {
        resolve(sum);
        }
        else {
        reject(Error("Could not subtract the two values!"));
        }
    });
};
  
//Starting promise chain
add(2,2)
    .then((added) => {
        // added = 4
        return subtract(added, 3);
        // console.log(added)
    })
    .then((subtracted) => {
        // subtracted = 1
        return add(subtracted, 5);
    })
    .then((added) => {
        // added = 6
        return added * 2;    
    })
    .then((result) => {
        // result = 12
        console.log("My result is ", result);
    })
    .catch((err) => {
        // If any part of the chain is rejected, print the error message.
        console.log(err);
    });
