var user0 = {
    name: "Hayes",
    id: 0
};
var user3 = {
    name: "Hayes",
    id: 0,
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
function getStuff() {
    return { name: "function thingy!", id: 530 };
}
var user2 = new UserAccount("Riley", 1);
console.log("Type Script Running");
console.log(user2);
console.log(getStuff());
function getLength(argumentThing) {
    if (typeof argumentThing === "string") {
        return [argumentThing];
    }
    return argumentThing;
}
console.log(getLength('this is a string'));
console.log(getLength(['This is an array, "Array2", "Array3']));
// declare const backpack: Backpack<string>;
// const object = backpack.get();
// backpack.add('23');
var message = "This is a string";
// message();
//Error since property doesnt exist
// user2.location; 
function greet(person, date) {
    console.log("Helo ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Riley", new Date());
