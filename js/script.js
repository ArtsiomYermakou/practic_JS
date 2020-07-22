const answers = [];

let df = 5;
answers[0] = prompt("Как вас называть?", "");
answers[1] = prompt("Ваша фамилия?", "");
answers[2] = confirm("Вам есть 18?", "");

if (answers[2] === false){
    alert("Вам нельзя здесь находиться")
} if (answers[2] === true){
    alert("Вcё ок, проходите")
}






