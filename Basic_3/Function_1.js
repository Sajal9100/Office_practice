function SayMyName () {
    console.log('s');
    console.log('a');
    console.log('j');
    console.log('a');
    console.log('l');   
}

// SayMyName()

// function addTwoNumbers (number1 , number2){
//     console.log(number1 + number2);    
// }

// function addTwoNumbers (number1 , number2){
//     let result = number1 + number2
//     return result   
// }

// const result = addTwoNumbers(3,4)

// console.log("Result: " , result);

function loginUserMessage(Username) {
    if (Username === undefined) {
        console.log("Please enter a valid username")
        return
    }

    return `${Username} just logged in`
}

console.log
 (loginUserMessage())
