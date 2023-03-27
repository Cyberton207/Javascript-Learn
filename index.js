console.log("Arrays Delete Methods");
let arr1 = [1,2,3,4,5,6];
let arr2 =  [11,12,13,14,15,16];
let arr3 =[21,22,23,24,25,26];
let compareAsc = (a,b) =>
  {
    return a-b;
  }
let compareDsc = (a,b) =>
  {
    return b-a;
  }
// console.log(arr.push(7));
// console.log(arr.pop());
// console.log(arr);
// delete arr[0];
console.log(arr1);
let newArr = arr1.concat(arr2,arr3);
console.log(newArr);

// Sort Methods
// For Ascending sort we have to give function as argument
newArr.sort(compareAsc);
console.log(newArr);

// Sort Functions for Descending Order
newArr.sort(compareDsc);
console.log(newArr);

// Reverse Functions = Reverse the arrays
console.log(newArr.reverse());

// Splice Functions  = remove some ele and add some ele on that position 
// Splice(a,b,c) = It Takes 3 Arguments
// 1)a =  Index from where to remove ele
// 2)b =  How many elements you want to remove
// 3)c = Which ele you want to add in an array
newArr.splice(2,4,1023,1024,1025,1026);
console.log(newArr);

// Slice(a) = Make the new Array of idx to len(arr)
// Slice doesn't modify the original array it makes new array after modification
console.log(newArr.slice(5));