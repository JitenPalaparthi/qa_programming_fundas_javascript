function Greet() {
    console.log("Hello World!");
}

Greet(); // To call the function

function GreetByName(name) {
    if (typeof name == "string") {
        console.log("Hello " + name);
    } else {
        //console.log("This works only for strings")
        console.log("Hello World!")
    }
}
GreetByName("Folks!");
var n; // This is undefined
GreetByName(n);

GreetByName(1234);

GreetByName(null);

function GreetReturn(name) {
    if (typeof name == "string") {
        return "Hello " + name;
    } else {
        return "Hello World!"
    }
}

let greet = GreetReturn("Minds!")
console.log(greet);


function AddNumbers(max) {
    if (typeof max != "number") {
        return 0;
    }
    
    let sum = 0;
    for (let i = 1; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(AddNumbers(10));

console.log(AddNumbers(10.10));

console.log(AddNumbers("hello"));