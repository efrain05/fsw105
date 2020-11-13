// //String Exercise

function capitalizeAndLowercase(str){
   var uppperAndLower = str.toUpperCase() + str.toLowerCase()
   return uppperAndLower
}
console.log(capitalizeAndLowercase("Hello"));


function findMiddleIndex(str){
 var middleOfTheString = Math.floor(str.length /2);
 return middleOfTheString;
}

console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));


function firstHalf(str) {
   var FindFirst = str.slice(0,str.length /2);
   return FindFirst;
}
console.log(firstHalf( "Hello"));
console.log(firstHalf("Hello World"));

function cap(str){
   var first = (str.length /2);
   var second = str.slice(0,first);
   var third = str.slice(first);
   var hope = second.toUpperCase() + third.toLowerCase();
   return hope
}
 
console.log(cap("Hello"))
console.log(cap("Hello World"))

