var arithmetics = require('arithmetics');
var doAddition = function(){
   var value1 = document.getElementById("number1").value,
       value2 = document.getElementById("number2").value,
       result = document.getElementById("result"),
       number1 = parseInt(value1, 10),
       number2 = parseInt(value2, 10);
    console.log(arithmetics.addition(number1, number2));
    result.value= arithmetics.addition(number1, number2)
};
