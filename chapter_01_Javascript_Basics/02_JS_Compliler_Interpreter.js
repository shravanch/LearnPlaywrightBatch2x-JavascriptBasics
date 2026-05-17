let a = 10;
console.log(a); // interpreter will execute this line and print 10

for (let i = 0; i < 1000000; i++) {
  // compiler will compile this loop and print 999999
  console.log(i);
  print();
}
function print() {
  console.log("Hello");
}
