function married() {
    console.log("patra + Mettle");
}

married();
married();
married();

// function add(a, b) {
//     console.log(a + b);
// }

function add(a, b) {
    let sum = (a + b);
    return sum;
}

let ans = add(23, 4);
console.log("Sum of two numbers is: ", ans);


function unlimitedAdd(...addings) {
    let sum = 0;
    for(let adding of addings) {
        sum += adding;
    }
    return sum;
}

let answers = unlimitedAdd(23, 33, 2, 3);
console.log(answers);


function unlimitedMultiply() {
    let mul = 1;
    for(let i = 0; i < arguments.length; i++) {
        mul *= arguments[i];
    }
    return mul;
}

let result = unlimitedMultiply(23, 3, 2);
console.log(result);