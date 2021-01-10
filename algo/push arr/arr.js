/* 
Create a function that, given an array and a value,
adds a new val to back of arr without using .push, 
Hint: when you reassign the length property of an 
array to a new number it will re-size the array.
*/

var arr = [3, 4, 5]

function pushback(arr, value){
  arr[arr.length] = value;
}
console.log(pushback(arr, value))


function pushFront(arr, value){
for(var i = 0; i < arr.length; i++)
    arr[0] = value;
    arr[i] = arr[i-1];
return arr;

}


for(var i = arr.length; i > 0; i--){
  arr[i] = arr[i - 1];
}


/* 
Array: Push Front (function)
Given an array and an additional value, insert this value 
at the beginning of the array. Do this without using any 
built-in array methods except push. ex. arr.push(7)
*/


var arr = [3, 4, 5, 6]
pushFront(arr, 2)

console.log(arr)
// [2, 3, 4, 5, 6]

arr = [1,2,3,4]
var front = 5

function pushfront(arr, value) {
    for (i = arr.length-1; i >= 0; --i) {
        arr[i + 1] = arr[i];
    }
    arr[0] = value;
    return arr;
}
console.log(pushfront([1,2,3], 4));

arr[0] = front
}
console.log(arr)
