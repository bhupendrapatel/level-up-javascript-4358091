// Write your code here
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  get overview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }
}

const HarryPotter = new Movie('Harry Potter', 'J.K.Rowlings', 'Magic', 2000, 4);
console.log(HarryPotter);
console.log(HarryPotter.overview);

const Inception = new Movie('Inception', 'Christopher Nolan', 'Sci-fi', 2013, 4.5);
console.log(Inception.overview);

const Oppenheimer = new Movie('Oppenheimer', 'Christopher Nolan', 'Sci-fi/Epic', 2023, 4.7);
console.log(Oppenheimer.overview);