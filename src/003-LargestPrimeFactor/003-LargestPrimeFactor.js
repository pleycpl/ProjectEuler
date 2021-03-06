var number = 13195;
var array = [];
function isPrime(a) {
  for(var j = 2; j <= (a / 2); j++) {
    if (a % j === 0) {
      return false;
    }
  }
  return true;
}
for(var i = 2; i <= (number / 2); i++) {
  if (number % i === 0 && isPrime(i)) {
    array.push(i); // adding prime number to array
  }
}
if (array == 0) {
  array.push(number); // if number is prime, adding itself
}
console.log("All prime factors => " + array);
array.sort(function(x, y){return y-x}); // sorting biggest value
console.log("The Largest prime factor => " + array[0]);
