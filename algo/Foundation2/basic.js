// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeBig(arr) {
    var pos = arr[i];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return pos
}


// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
// [ 5,3,6,10,-1]
function lowhigh(arr) {
    max = arr[0];
    min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min, max;
}


// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function secondtolast(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 !== 0)
            return (arr[i])
    }
}


// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doubleVision(arr) {
    var double = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
        double.push(arr[i]);
    }
    return double
}


// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function positive(arr) {
    var pos = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++;
        }
        (arr[arr.length - 1]) = pos;
    }
    return arr;
}
console.log(positive([-1, 1, 1, 3]))

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evenandodd(arr) {
    var oddcounter = 0;
    var evencounter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddcounter++;
            if (oddcounter >= 3) {
                console.log("That's odd!");
                var oddcounter = 0;
            }
        }
        else (arr[i] % 2 == 0); //why is this ; not {
        evencounter++
        if (evencounter >= 3) {
            console.log("Even more so!");
            var evencounter = 0;
        }
    }
}

console.log(evenandodd([4, 6, 8, 10, 1, 3, 5, 8, 2, 4]))
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function increment(arr);
for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        i++;
        console.log(i);
    }
    return arr
}

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previous(arr){
    for( var i = arr.length - 1; i >= 0; i--){
        arr[i] = string //what is string length?
    }
}


// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function seven(arr) {
    var addSeven = 7;
    for (var i = 0; i < arr.length; i++) {
        arr[i] += addSeven;

    }
    return arr;
}
console.log(seven([1, 2, 3]))
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
//[2,4,6,1,3]
function reverseArray(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverseArray([2, 4, 6, 1, 3, 9])) //what happens when the array length is 2.5?

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] *= -1;
        }
    }
    return arr
}
console.log(negative([1, -3, 5]))

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function hungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] = "food") {
            arr[i] = "yummy";
        }
        else (arr[i] = "I'm hungry");
    }
}

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swap(arr){
    for (i = 0; i < arr.length / 2; i++){
        if (i % 2 == 0){
            var temp = arr[i];
            arr[i] = arr[arr.length - (i + 1)];
            arr[arr.length - (i + 1)] - temp;
        }
    }
    return arr
}

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scale(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}
