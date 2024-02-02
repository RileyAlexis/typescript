const user0 = {
    name: "Hayes",
    id: 0
}

interface User { 
    name: string;
    id: number;
}

const user3: User = {
    name: "Hayes",
    id: 0,
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

function getStuff(): User {
    return { name: "function thingy!", id: 530 };
}

const user2: User = new UserAccount("Riley", 1);
console.log("Type Script Running");
console.log(user2);

console.log(getStuff());


//******************** Unions ***************** */
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(argumentThing: string | string[]) {
    if (typeof argumentThing === "string") {
        return [argumentThing];
    }
    return argumentThing;
}

console.log(getLength('this is a string'));
console.log(getLength(['This is an array, "Array2", "Array3']));

//******************** Generics ***************** */


