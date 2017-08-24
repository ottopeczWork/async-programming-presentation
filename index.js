const fs = require("fs");

// setImmediate(() => {
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
// });

// setImmediate(() => {
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
// });

// setImmediate(() => {
//
//   setTimeout(() => console.log("second timer cb"), 0);
//
//   process.nextTick(() => console.log("process.nextTick cb"));
//
//   console.log("first timer cb");
// });

// setImmediate(() => {
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
// });

// setImmediate(() => {
//
//   setTimeout(timestamp => {
//
//     console.log("setTimeout1 creating: ", timestamp);
//     console.log("setTimeout1 cb running: ", new Date());
//   }, 0, new Date());
//
//   setTimeout(timestamp => {
//
//     console.log("setTimeout2 creating: ", timestamp);
//     console.log("setTimeout2 cb running: ", new Date());
//   }, 0, new Date());
// });

// setImmediate(() => {
//
//   setImmediate(timestamp => {
//
//     console.log("setImmediate1 creating: ", timestamp);
//     console.log("setImmediate1 cb running: ", new Date());
//   }, new Date());
//
//   setImmediate(timestamp => {
//
//     console.log("setImmediate2 creating: ", timestamp);
//     console.log("setImmediate2 cb running: ", new Date());
//   }, new Date());
// });
