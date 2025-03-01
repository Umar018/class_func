class BookList {
    constructor() {
        this.books = [];
        this.favoriteBook = ""; 
    }

    addBook(title, author) {
        this.books.push({ title, author });
    }

    set favoriteBook(title) {
        if (this.books.some(book => book.title === title)) {
            this._favoriteBook = title;
            console.log(`"${title}" sevimliga qoshildi.`);
        } else {
            console.log(`topilmadi: "${title}"`);
        }
    }

    get booksList() {
        this.books.forEach(book => console.log(`${book.title}, author: ${book.author}`));
    }

    get favoriteBook() {
        return this._favoriteBook || "bom bosh";
    }
}

// chatgpt testcaselari
const myBooks = new BookList();
myBooks.addBook("The Great Gatsby", "F. Scott Fitzgerald");
myBooks.addBook("To Kill a Mockingbird", "Harper Lee");

myBooks.booksList();
myBooks.favoriteBook = "The Great Gatsby";
console.log(myBooks.favoriteBook);
