const arr = [0, 1, 2, 3, 4, 5]; // declare the array in java script array contain hetrogeneous element also

console.log(arr);

const arr1 = [1, true, "anurag", null, 3.45, -2];
console.log(arr1);
console.log(arr1[2]);

// Array Method

arr1.push(5);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.unshift(9); // add element in start position of array
console.log(arr1);
arr1.shift(); // remove element which are in start position of array

console.log(arr1);

console.log(arr1.indexOf("anurag")); // its tell about the index of the anurag
console.log(arr1.includes(3.45)); // its tell about 3.45 element are in array or not

const newarr = arr1.join(); // join() me thod are use to convert entire array into string form

console.log(newarr);

// slice(startindex , endindex) use to genrate a particular part of a array endindex are not include but startindex include

// splice() end index include hota h aur original array manupulate ho jata h 
