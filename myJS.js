"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

let a, b;

for (let i = 1; i < 3; i++) {
  do a = prompt("Один из последних просмотренных фильмов?", "");
  while (a.length === 0 || a.length >= 50);
  b = +prompt("На сколько оцените его?", "");
  personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
