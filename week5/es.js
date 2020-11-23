//1

const manName = "John";
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for(let i = 0; i < pets.length; i++){
        let pet = {type: pets[i]}
        if (pets[i] === "cat"){
            name = "fluffy"
        }else{
            name = "spot"
        }
        console.log("pet name:", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name:", manName)
    return petObjects;
}
runForLoop(["cat", "dog"])


//2

const carrots = [ "bright orange", "ripe", "rotten"]

mapVegetables = arr => {
    return arr.map(function(carrot){
        return {type: "carrot", name: carrot}
    })
}
console.log(carrots);

//3

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly:true
    },
    {
        name: "Mario",
        friendly:true
    },
    {
        name: "Browser",
        friendly:false
    }
]

filterForFriendly = arr => {
    return arr.filter(function(person){
        return person.friendly
    })
}
console.log(filterForFriendly(people));

//4

doMathSum = (a,b) => a + b;{
    console.log(doMathSum(1,2));
}

produceProduct = (a,b) => a * b;{
    console.log(produceProduct(5,2))
}

//5

function printString(firstName, lastName, age){
    firstName = "Jane";
    lastName = "Doe";
    age = 100;
    return ("Hi" + " " + firstName + " " + lastName + "," + "how does it feel to be 40");
}
console.log(printString());

//6

function printString(firstName, lastName,age){
    firstName = "Jane"
    lastName = "Doe"
    age = 100;
    return (`Hi ${firstName} ${lastName}, How does it feel to be ${age}`);

}
console.log(printString());

//7

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

filterForDogs = arr => arr.filter( animal => (animal.type === "dog") ? true: false);
console.log(filterForDogs([
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
]));

//8

function templateString(location,name) {
    return (`Hi ${name}!, \n Welcome to ${location}. \n I hope you enjoy your stay. Please ask the president of Hawaii if you need anything`)
}
console.log(templateString("Hawaii", "Janice"))