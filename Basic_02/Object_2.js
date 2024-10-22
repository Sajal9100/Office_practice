// const tinderUser = new Object() its a singleton object

const tinderUser = {}
//its a non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sajal singh"
tinderUser.isLoggedIN = false

// console.log(tinderUser.name)

const regularuser = {
   email: 'some@gmail.com',
   fullname: {
    Userfullname:{
        firstName:"Sajal",
        LastName: "Singh"
    }
   }

}
console.log(regularuser.Userfullname.firstName);


