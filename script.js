const numberOfFilms=+prompt("Сколько фильмов вы посмотрели");
const personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let a=prompt("Один из последних фильмов?");
let b=prompt("на сколько оцените его?");
let c=prompt("Один из последних фильмов?");
let d=prompt("на сколько оцените его?");


personalMovieDB.movies[a]=b
personalMovieDB.movies[c9]=d

console.log(personalMovieDB)