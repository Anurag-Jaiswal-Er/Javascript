const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // resolve to connect karna padega .then se tb promise consumed wala kam krega
  }, 1000);
}); // make promies
// bluebird libary es4 mai use hota tha explore mdndocumentation

// now conumse the promies

promiseOne.then(function () {
  console.log("Promise Consumed");
}); // resolve ka connection .then() ke sath h

new Promise(function (
  resolve,
  reject // one part mai pura promise ho gya h ismai
) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise consumed 2");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "anurag", email: "anurag@gmail.com" }); // data intilized
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // data output hoga
});

// const promiesFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error)
//         {
//             resolve({username:"anurag" , password:"123"})
//         }else{
//             reject("something went wrong")
//         }
//     },1000)
// })

//  const userName = promiesFour.then((user) => {
//    console.log(user);
//    return user.username

// })
// console.log(userName) // error aayega data nikalen ke liye ye ni kr skte h

const promiesFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "anurag", password: "123" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

// promiesFour.then((user) => {
//    console.log(user);
//    return user.username
// }).then((username) => {   // yeah hum .then ka chaining kr rahai h hum jitni chahe utni bar .then laga skte h
//     console.log(username)
// }) ye bhi error aayega because hmne .catch use ni kiya error ke liye

promiesFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // yeah hum .then ka chaining kr rahai h hum jitni chahe utni bar .then laga skte h
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise are either resolved or not resolved ");
  }); // error output mai aayega now hum error ko false kreke output dekenge then output mai error ni aayega

// const promiesFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// new syntax for handel promise

// async function ConsumePromiseFive() {
//    try {
//     const resopnse = await promiesFive
//     console.log(resopnse)
//    } catch (error) {
//     console.log(error)
//    }
// }
// ConsumePromiseFive() // error handel krne ke liye try catch use krte h

// async function getAllUser() { // no output will come because of start 2 and 3 line  code is perfectly
//      try {
//         const res = await fetch("https://ipapi.co/json")
//      const data = await res.json() // ye bhi time lega data lane mai to yeha bhi await lagana hoga
//      console.log(data)
//      } catch (error) {
//         console.log("Error : " , error)
//      }
// }
// getAllUser()

fetch("https://ipapi.co/json") // ab bhi hamara data aa raha h aur ye code bhi bauth chota h aur yeaha try catch handel ni krna pad raha h bs .then ka chaining krna h aur error ke liye catch krna bs
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
