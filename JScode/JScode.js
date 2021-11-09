//задание 1

const friendYear = Number(prompt("Сколько лет твоему другу?"))
const userYear = Number(prompt("сколько тебе лет?"));

if (userYear === friendYear){
    alert("Вы одногодки");
}
else if (userYear > friendYear) {
alert ("Ты старше друга");
}
else if  (userYear < friendYear) {
alert("Ты младше друга=)");
}

//задание 2
const numberOne = Number(prompt("Веедите первое число"))
const equationMath = (prompt("Введите знак"))
const numberTwo = Number(prompt("Введите второе число"));

switch (equationMath){
    case "+":
        alert(numberOne + numberTwo);
        break;
    case "-":
        alert(numberOne - numberTwo);
        break;
    case "*":
        alert(numberOne * numberTwo);
        break;
    case "/":
        alert(numberOne / numberTwo);
        break;
}

//задание 3


const visitorAge = Number(prompt("Сколько тебе лет?"));
const teenagerMin = 12;
const teenagerMax = 18;
const pensionMin = 60;
const pensionMax = 80;

if 
((visitorAge >= teenagerMin && visitorAge <= teenagerMax)||(visitorAge >= pensionMin && visitorAge <= pensionMax)){
    const isWithParents = confirm("Вы с взрослыми?");
if (isWithParents){
    alert("Вход разрешен");
} else{
    alert("Вход запрещен");
}
}
 else if
(visitorAge < teenagerMin || visitorAge > pensionMax){
    alert ("Вход запрещен");
} else{
    alert("Вход разрешен");
}
