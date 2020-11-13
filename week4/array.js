//Array Methods Exercise

var fruit =["banana", "apple","orange","watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// 1
vegetables.pop()
console.log(vegetables);

//2

console.log(fruit.shift());

//3

console.log(fruit[1]);

//4

console.log(fruit.push(1));

//5

console.log(vegetables.length);

//6

console.log(vegetables.push(3))

//7
var food = fruit.concat(vegetables);
console.log(food);

//8
var change = food.splice(4,2);
console.log(food)

//9
console.log(food.reverse())

//10
console.log(food.toString)