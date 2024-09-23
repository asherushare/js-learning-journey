function sayHello() {
    console.log("hello");
}


const sayBye = () => {
    console.log("Bye");
}

sayBye();
sayHello();

const add = (a, b) => {
    return a + b;
}

let sum = 0;
const addUnlimited = (...adding) => {
    for(let i = 0; i < adding.length; i++) {
        sum += adding[i];
    }
    console.log(sum);
}

const minus = (a, b) => a - b;

console.log(add(23, 43));

addUnlimited(23, 44, 32, 322, 3);

mettle();

function mettle() {
    console.log("I'm your buddy!");
}

const obj = {
    value: 23,
    func: function THIS() {
        console.log(this.value + 23);
    }
}

console.log(obj.func);