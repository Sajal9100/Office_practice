// Immidiatly invoke function Expression(IIFE)

(function chai (){
    console.log("DB Connected");
})();
// HAVE TO END THE FUNCTION AFTER EXECUTION

( ()=> {
    console.log('DB Connected two');
    
})();