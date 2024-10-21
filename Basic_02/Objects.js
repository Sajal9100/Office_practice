// Singleton
// object.create = way to decliar singleton object 


//  Object literls

let mysmy = Symbol("Mykey one")
const JS_USER = {
    name: "sajal",
    fullname: "Sajal singh",
    mysmy: 'MyKey one'
}

// ways to accese
// 1,
   
console.log(JS_USER.mysmy);


JS_USER.greeting = function () {
    console.log('Hello Js_User');
}

JS_USER.greeting = function () {
    console.log(`Hello Js_User, ${this.fullname}`);
}
console.log(JS_USER.greeting());



   