function makeSquare (num) {
var num = 5,
    i, j;

for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
        print("*");
    }
    println("");
} console.log(makeSquare(num))