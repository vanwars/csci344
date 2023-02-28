// Q1. Your code here:






// When you have implemented your solution, 
// uncomment out the following code to test it:
// console.log('\n\n**********\nQuestion 1\n**********');
// console.log("Expected: 6, Actual:", addNums([1, 2, 3]));
// console.log("Expected: 221, Actual:", addNums([1, 4, 77, 12, 88, 33, 6]));




// Q2. Your code here:

function addNums1(theArray) {
    // function aggregator (sum, nextValInArray) {
    //     return sum + nextValInArray;
    // }
    // // return a number
    // return theArray.reduce(aggregator);

    return theArray.reduce((sum, nextValInArray) => {
        return sum + nextValInArray;
    });

}


// When you have implemented your solution, 
// uncomment out the following code to test it:
console.log('\n\n**********\nQuestion 2\n**********');
console.log("Expected: 6, Actual:", addNums1([1, 2, 3]));
console.log("Expected: 221, Actual:", addNums1([1, 4, 77, 12, 88, 33, 6]));