function addtocartprice(...num1) {
    return num1
}

console.log(addtocartprice(200,400,500));


const user = {
   username: 'Sajal singh',
   prise: 1500
}

function handleobject (anyobject)  {
    console.log(`Username is ${anyobject.username} and prise is ${anyobject.prise}`);
    
}

// handleobject(user)
handleobject({
    username: "Saloni",
    prise: 1600
})