const numberOfFilms=+prompt("Сколько фильмов вы посмотрели");
const personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


// let c=prompt("Один из последних фильмов?");
// let d=prompt("на сколько оцените его?");



// personalMovieDB.movies[c9]=d

for(let i=0;i<2;i++){
    let a=prompt("Один из последних фильмов?");
    let b=prompt("на сколько оцените его?");
  
    if(a !=null && b!==null && a!=""&& b!="" && a.length<50){
        personalMovieDB.movies[a]=b
        console.log("dane")
    }else{
        console.log("error")
        i--;
    }
}
if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов")
}else if(personalMovieDB.count>10 && personalMovieDB.count<30 ){
    console.log("вы классный зритель")
}else if(personalMovieDB.count>30){
    console.log(" Киноман")
}else{
    console.log("произошла ошибка")
}
console.log(personalMovieDB)