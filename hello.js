function hello(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var calvin = { firstname: "Calvin", lastname: "Hobbes" };
var chris = { firstname: "Chris", lastname: "" };
console.log(hello(calvin));
console.log(hello(chris));
