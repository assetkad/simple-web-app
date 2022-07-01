"use strict";

const personalMovieDB = {
    count: '',
    start() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB() {
        if (this.privat == false) {this.privat = true;}
        if (this.privat == true) {this.privat = false;}
    },
    showMyDB(isHidden) {
        if (!isHidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {

        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
    
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();