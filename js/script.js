// const answers = [];
//

// answers[0] = prompt("Как вас называть?", "");
// answers[1] = prompt("Ваша фамилия?", "");
// answers[2] = confirm("Вам есть 18?", "");
//
// if (answers[2] === false){
//     alert("Вам нельзя здесь находиться")
// } if (answers[2] === true){
//     alert("Вcё ок, проходите")
// }



let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = +prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("DONE.")
        } else {
            console.log("ERROR");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }
    if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }
    if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка")
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.private);


function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();



///////////////////////////////////////////////////////////////////////////////////////////////////
// let num = 20;
//
// showFirstMessage = (text) => {
//     console.log(text);
//     console.log(num);
// }
//
// showFirstMessage("Приветик жопка");
// console.log(num);
//
// calc = (a, b) => {
//     return a + b;
// }
//
// console.log(calc(4, 6));
// console.log(calc(2, 7));
// console.log(calc(1, 43));
//
//
//
// const ret = () => {
//     let num = 50;
//     return num;
// }
//
//
// const anotherNum = ret();
// console.log(anotherNum);

// const str = "teSt";
//
// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//
//
// console.log(str);
// // console.log(arr.length)
//
// let fruit = "Some fruit";
//
// console.log(fruit.indexOf("fruit"));
//
//
// const logg = "Hello World";
//
// console.log(logg.slice(6, 11)) // ВЫРЕЗАЕТ ФРАГМЕНТ
//
//
// console.log(logg.substring(6, 11))
//
//
// console.log(logg.substr(6, 5)) // ПЕРВОЕ ЗНАЧЕНИЕ = СТАРТ, ВТОРОЕ СКОЛЬКО СИМОВЛОВ ОТРЕЗАТЬ СПРАВА
//
// const num = 12.2;
// console.log(Math.round(num))
//
// const test = "12.2px"
//
// console.log(parseInt(test))
// console.log(parseFloat(test))























