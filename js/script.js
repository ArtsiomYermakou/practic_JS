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



for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = +prompt("На сколько оцените его?", "");
    if( a != null && b != null && a != "" && b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("DONE.")
    } else {
        console.log("ERROR");
        i--;
    }
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
        break;
    } if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
        break;
    } if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка")
    }

}

console.log(personalMovieDB.movies)





