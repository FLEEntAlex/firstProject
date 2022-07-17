"use strict";

let numberOfFilms;

function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
//start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },

  rememberMyFilms: function () {
    let a, b;
    for (let i = 1; i < 3; i++) {
      do {
        a = prompt("Один из последних просмотренных фильмов?", "").trim();
        b = prompt("На сколько оцените его?", "").trim();
      } while (a === null || b === null || a.length === 0 || a.length >= 50);
      personalMovieDB.movies[a] = b;
    }
  },

  showMyDB: function (param) {
    if (!param) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(
        `What's your favorite genre number ${i}`,
        ""
      ).toLocaleLowerCase();
      if (genres.length === 0 || genres == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB.genres.forEach((el, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${el}`);
    });
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

personalMovieDB.writeYourGenres();
