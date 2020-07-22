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


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const aa = +prompt("На сколько оцените его?", "");
const b = prompt("Один из последних просмотренных фильмов?", "");
const bb = +prompt("На сколько оцените его?", "");

personalMovieDB.movies.a = aa;
personalMovieDB.movies.b = bb;

console.log(personalMovieDB.movies)





