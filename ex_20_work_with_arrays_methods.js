const films = [
    { name: 'Titanic', rating: 9, id: 0 },
    { name: 'Die hard 5', rating: 5, id: 1 },
    { name: 'Matrix', rating: 8, id: 2 },
    { name: 'Some bad film', rating: 4, id: 3 }
];

// проверка массива на рейтинг фильмов, который больше или равен 8;

function showGoodFilms(arr) {
   let newArr = [];
   arr.map(film => {
       if(film.rating >= 8) {
           newArr.push(film);
       }
   });
   return newArr;
}

console.log(showGoodFilms(films));

//возврат строки с названиями фильмов из массива;

function showListOfFilms(arr) {
   let nameFilm = arr.map(film => film.name);
   return nameFilm.join(', ');
}

console.log(showListOfFilms(films));

//добавление елемента id к каждому объекту массива;

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

console.log(tranformedArray);

//проверка массива на то, что в каждом объекте есть id;

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0);
}

console.log(checkFilms(tranformedArray));



