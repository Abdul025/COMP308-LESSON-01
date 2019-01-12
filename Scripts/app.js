let myGlobalVariable = 0;

//self-executing anonumous function
//IIFE--Immediately Invoke Function Expression
(function(){
    let myFunctionalVariable = 0;

    
    function Start() {
    let myFunctionalVariable = 0;
    console.log('App Started...${myFunctionalVariable}');
    }

    window.addEventListener("load", Start);
})();