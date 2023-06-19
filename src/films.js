// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const ArrayAllDirectors = movies.map(movie => movie.director);
  ArrayAllDirectors.forEach(director => {
    console.log('%c- ' + '- ' + director, 'color: green;');
  });
  return ArrayAllDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let moviesFromDirector = movies.filter(movie => movie.director === director);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const arrayMoviesByDirector = getMoviesFromDirector(movies, director);
  const totalRate = arrayMoviesByDirector.reduce((accumulator, movie) => accumulator + parseFloat(movie.score || 0), 0);
  const averageRate = totalRate / arrayMoviesByDirector.length;
  return parseFloat(averageRate.toFixed(2));
} 

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const sortByTitle = movies.map((movies) => movies.title).sort().slice(0, 20);
  sortByTitle.forEach(title => {
    console.log('%c- ' + title, 'color: purple;')
  });
  return sortByTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortByYear =  [...movies].sort((a, z) => {
    if (a.year === z.year) {
      return a.title.localeCompare(z.title)
    }
    return a.year - z.year
  })
  return sortByYear
  }

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const moviesByGenre = movies.filter(movie => movie.genre.includes(genre) && movie.score !== '');
  const totalScore = moviesByGenre.reduce((accumulator, movie) => accumulator + parseFloat(movie.score || 0), 0);
  const averageScore = totalScore / moviesByGenre.length;
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
