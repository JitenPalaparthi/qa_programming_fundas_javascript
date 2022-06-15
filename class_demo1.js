class Person{
    constructor(name,age,address){
        this.name =name
        this.age = age
        this.address = address
    }

    Display(){  
        console.log("Name:",this.name,"Age:",this.age,"Address:",this.address);
    }
}

var p1 = new Person("Jiten",38,"Bangalore,India")
p1.Display();

p1.ID=1001;
console.log(p1.ID);

var names = ["Bob", "Ken", "Linda"];

data = JSON.stringify(names);

console.log("Before stringify",typeof names, "after stringify",typeof data)
console.log(data);

var person = { firstName: "Bob", surname: "Smith", age:21 }

data = JSON.stringify(person)

console.log("Before stringify",typeof person, "after stringify",typeof data)
console.log(data);

