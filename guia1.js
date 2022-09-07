addEventListener("DOMContentLoaded", ()=>{
   
    //1. Escribir un programa que sume, reste, multiplique y divida dos números
    let num1 = Number(prompt("ingrese el numero 1"));
    let num2 = Number(prompt("ingrese el numero 2"));
    console.group(`la suma es  ${num1} + ${num2} = ${num1 + num2}`);
    console.group(`la resta es  ${num1} - ${num2} = ${num1 - num2}`);
    console.group(`la multiplicacion es  ${num1} * ${num2} = ${num1 * num2}`);
    console.group(`la division es  ${num1} / ${num2} = ${num1 / num2}`);
})
    
