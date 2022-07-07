"use strict";

let numberOfFilms;

function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
//detectPersonalLevel();

let a, b;

function rememberMyFilms() {
  for (let i = 1; i < 3; i++) {
    do {
      a = prompt("Один из последних просмотренных фильмов?", "");
      b = prompt("На сколько оцените его?", "");
    } while (a === null || b === null || a.length === 0 || a.length >= 50);
    personalMovieDB.movies[a] = b;
  }
}
//rememberMyFilms();

function showMyDB(param) {
  if (!param) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `What's your favorite genre number ${i}`,
      ""
    );
  }
  console.log(genres);
}

writeYourGenres();
