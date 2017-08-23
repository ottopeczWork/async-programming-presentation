const fs = require("fs");

// setTimeout(() => {
//
//   const promise = new Promise(resolve => {
//
//     console.log("resolving promise");
//     resolve();
//   });
//
//   promise.then(() => console.log("promise success handler"));
//
//   process.nextTick(() => console.log("process.nextTick cb"));
//
//   console.log("timer cb");
// }, 0);

// setTimeout(() => {
//
//   const promise = new Promise(resolve => {
//
//     fs.readFile("README.md", (err, result) => {
//
//       if (err) {
//         console.log("rejecting the promise");
//         return reject(err);
//       }
//
//       console.log("resolve the promise");
//       resolve(result);
//     });
//   });
//
//   promise.then(() => console.log("promise success handler"));
//
//   process.nextTick(() => console.log("process.nextTick cb"));
//
//   console.log("timer cb");
// }, 0);

// setTimeout(() => {
//
//   setTimeout(() => console.log("second timer cb"), 0);
//
//   process.nextTick(() => console.log("process.nextTick cb"));
//
//   console.log("first timer cb");
// }, 0);

// setTimeout(() => {
//
//   setTimeout(timestamp => {
//
//     console.log("setTimeout creating: ", timestamp);
//     console.log("setTimeout cb running: ", new Date());
//   }, 0, new Date());
//
//   setImmediate(timestamp => {
//
//     console.log("setImmediate creating: ", timestamp);
//     console.log("setImmediate cb running: ", new Date());
//   }, new Date());
// }, 0);
