// Write your code here
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'Out of stock';
    } else if (this.numCopies < 10) {
      return 'Low stock';
    }

    return 'In stock';
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

const HungerGamesBooks = new Book('Hunger Games', 'Suzanne Collins', 123443, 7);
console.log(HungerGamesBooks.getAvailability());

HungerGamesBooks.restock(12);
console.log(HungerGamesBooks.getAvailability());

HungerGamesBooks.sell(19);
console.log(HungerGamesBooks.getAvailability());