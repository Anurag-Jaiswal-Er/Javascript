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


const marvel_heros = ["thor" , "ironman" , "hulk" , "strange"]
const dc_heros = ["superman" , "flas" , "batman" , "aquaman" , "wonder woman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) // entire dc_heros array take a one element


const all_heros = marvel_heros.concat(dc_heros) // concate then array are join and form a new entire array
console.log(all_heros)


// spred operator are always use to combine two or more than two array
// in spred case all element are like individual element 
const Name = ["anurag" , "ragni" , "abhishek"]
const cast = ["jaiswal","chaudhary","kushwaha"]
const fullName = [...Name, ...cast]
console.log(fullName)


// looping on array 

const coding = ["java" , "javascript" , "python" , "cpp" , "c#"]
coding.forEach( function (items) {
      console.log(items)
}) // callback function use forEach
  console.log("change the line")
coding.forEach((val) => {
   console.log(val)
})





