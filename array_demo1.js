var names=[];
console.log(typeof names);  
console.log("Length:",names.length);
names=["Jiten","Bob","Karim","John","Shakira"]
console.log(names);
console.log("Length:",names.length);

var ids = new Array(3);
ids[0]=101;
ids[1]=102;
ids[2]="103";
console.log(ids);

names.push("Micheal");

console.log(names);

// names.pop() // removes last element from the array
//names.shift(); // removes first element from an array

console.log(names);

for(var n of names){
    console.log("Name is",n);
}

// for (let i=0;i<names.length;i++){
//     console.log("name is",names[i]);
// }

/*for(var n in names){
    console.log("Name is",n);
}*/






