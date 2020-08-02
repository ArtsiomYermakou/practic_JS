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


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
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
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.private = !personalMovieDB.private;
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === "" || genre === null) {
                console.log(" Не корректные данные");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

            personalMovieDB.genres[i - 1] = genre;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
}


// function first() {
//     setTimeout(function () {
//         console.log(1)
//     }, 500);
// }
//
//
// function second() {
//     console.log(2)
// }
//
// first();
// second();
//
// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
//
// function done() {
//     console.log("Я прошёл этот урок")
// }
//
// learnJS("JavaScript", done);


// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     }
// };

// console.log(options.name);
//
// delete options.name;
//
// console.log(options);

// for (let key in options){
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
// }

// const arr = [1,2,3,4,5,6,7,32];
//
// arr.forEach( (item, i, arr) => {
//
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// } )

// const obg = {
//     a: 5,
//     b: 1,
//     c: {
//         a: 421,
//         b: 65234
//     }
// };
//
// const copy = {
//     ...obg,
//     a: 321,
//     b: 432,
//     c: {
//         ...obg.c,
//         a: "694234236234",
//         b: "sdifhdupig"
//     }
//
// }
//
// console.log(obg)
// console.log(copy)


// const numbers = {
//     a: 2,
//     b: 6,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(numbers);
//
// newNumbers.a = 10;
//
// let log = (a,b,c) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num  = [2, 5, 7];
//
// log(...num);

// const a = [5432,5, 542,]
//
// console.log(a);