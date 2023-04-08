function sum(){
    var num1= Number(document.getElementById('number-1').value) 
    var num2= Number(document.getElementById('number-2').value)
    var sum = num1 + num2

    document.getElementById('result').value = sum
    
}

function diff(){

   var num1= Number(document.getElementById('number-1').value) 
   var num2= Number(document.getElementById('number-2').value)

   var diff = num1 - num2  
   document.getElementById('result').value = diff
}

function prod()
{
    var num1= Number(document.getElementById('number-1').value) 
    var num2= Number(document.getElementById('number-2').value)
    var prod = num1 * num2 
    document.getElementById('result').value = prod
}

function divi(){
    
    var num1= Number(document.getElementById('number-1').value) 
    var num2= Number(document.getElementById('number-2').value)
    var divi = num1 / num2
    document.getElementById('result').value = divi
}

function mod(){
    var num1= Number(document.getElementById('number-1').value) 
    var num2= Number(document.getElementById('number-2').value)
    var mod = num1 % num2
    document.getElementById('result').value= mod 
}