// Please write the code for the following simple and short scenarios. Please note that, in the questions below, 
// even though a is a small array, your solution should work even if a was a big array of 1 million elements.


// Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4]. 
// The solution should be of the form: 

const arr= [1, 3, 5, 2, 4];

// Scenario 1
const result1 = arr.filter((num) => num % 2 !== 0);
// Output: [1, 5, 4]



// Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, 
// which should be equal to [1, 9, 25, 4, 16]. The solution should be of the form: 

const ar = [1, 3, 5, 2, 4];
// Scenario 2
const result2 = ar.map((num) => num * num);
// Output: [1, 9, 25, 4, 16]


// Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, 
// which should be equal to [1, 25, 16]. The solution should be of the form: 

// Scenario 3
const array = [1, 3, 5, 2, 4];
const result3 = array.filter((num) => num % 2 !== 0).map((num) => num * num);
// Output: [1, 25, 16]



// In scenario 1, the filter method is used to filter out the odd numbers from array arr.

// In scenario 2, the map method is used to square each element in array ar.

// In scenario 3, we chain the filter and map methods together to first filter out the odd numbers and then square each remaining element.

// The resulting arrays are stored in result1, result2, and result3 respectively, as per the given requirements.