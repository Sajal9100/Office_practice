const user = {
    username:'Sajal singh',
    price: 999,

    welcomeMessage:  function (){
        console.log(`${this.username} ,Welcome to this website`);
    }
}

user.welcomeMessage()
user.username = "Rishi"
user.welcomeMessage()