console.log("Hello The Testing Academy");


function add(a, b) {
  return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
  result = add(i, i+1);
 // console.log(result); // prints the result of adding i and i+1 for each iteration, which will be 1, 3, 5, ..., 19999
}
console.log("After 10000 lines, Final result: ", result); // This will print the final result of the last addition, which is 19999.