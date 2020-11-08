function addTwoNumbers(num1,num2){
    return (num1 + num2)
}

// var sum = addTwoNumbers(10,20)
// console.log(sum)

function addThreeNumbers(number1,number2,number3){
    return (Math.max(number1,number2,number3))
}

// var large = addThreeNumbers(3,5,7)
// console.log(large)


function evenOrOdd(string) {
	if (string % 2 === 0)
		return "even";
	else
		return "odd";
}


// var large = evenOrOdd(4)
// console.log(large)

function sentence(string){
    if (string.length < 20){
        return string + " " + string
    }else{
        return string.slice(0, string.length / 2)
    }
}

// console.log(sentence("I am doing this right?"))



