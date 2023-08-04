// Rule:
// fibo40 = fibo39 + fibo38;
let fibo = [0, 4, 4];
for (i = 3; i <= 16; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);