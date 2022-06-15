var person = new Object();

person.no = 101;
person.name="Jiten";
person.isMarried=false;
person.address = "Bangalore, India";

console.log(person);

var student = {};

student.ID = 10001
student.Name= "Karthik"
student.Address= {"City":"Bangalore","Street":"Brady Street","Pincode":560086};

console.log(student);

var employee = {"FirstName":"Aadya",LastName:"Jiten" ,"Address":{"City":"Bangalore","Street":"Brady Street","Pincode":560086},ID:50004}


employee.Department ="Information Technology";

console.log(employee);

var fullname = function(){
    return this.FirstName+" "+this.LastName;
}

employee.FullName = fullname;/*function(){
    return this.FirstName+" "+this.LastName;
}*/

console.log("Full Name:",employee.FullName());

var e1 = employee;

e1.Address ="London, UK";
console.log(employee);

for(e in employee){
    console.log(e,typeof e);
    console.log(employee[e]);

if(typeof employee[e]=="function"){
    console.log(employee[e]());
}
    console.log(typeof employee[e]);
}

console.log(employee["Address"])



