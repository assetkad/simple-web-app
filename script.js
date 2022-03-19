"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const isLastWatchedFim = prompt('Один из последних просмотренных фильмов?', '');
const isLiked = prompt('На сколько оцените его?', '');
personalMovieDB.movies[isLastWatchedFim] = isLiked;
console.log(personalMovieDB);