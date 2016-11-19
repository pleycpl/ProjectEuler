var i = 1;
var j = 2;
var array = [];
while(j < 10) {
    if (j % 2 === 0) {
	array.push(j);
    }
    i = j-i+(j=i);
    j += i;
}

console.log(array);
