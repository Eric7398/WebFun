
// Array: Min to Front
// Given an array of comparable values, move the lowest 
// element to array’s front, shifting backward any elements 
// previously ahead of it. Do not otherwise change the array’s 
// order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and 
// return min. As always, do this without using built-in functions. 

function findMin(arr) {
    var min = arr[0];
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        if (arr[i] < min) {
            min = arr[i]
        }
        if (newArr.push(arr[i])){
            if (newArr = min){
                newArr.pop;
            }
        }
    }
    return [min, newArr]
}

console.log(findMin([4,2,0,1,3,3,5,5]))


