for(let i = 0; i < 10; i++) {
    console.log("This is me, a second devid goggins " + i);
}

let i = 0;

while(i < 5) {
    console.log("It's me " + i);
    i++;
}

let ip = 0;
let house = 10;

while(ip != house) {
    ip++;
    console.log("Step takan " + ip)
}

let patra = "Mettle";
let count = 0;

do {
    console.log("Mettle + patra");
    count++;
}
while(count != 10);



let number = 40;

let guess = 0;

do {
    guess = parseInt(prompt("Guass a number: "));
    if(guess == number) {
        alert("Winner");
        break;
    }
} while(guess != 0);

