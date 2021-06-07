/* 
- Crea una clase Libro
- La clase libro tendrá título, autor, año y género.
- Crea un método que devuelva toda la información del libro
- Pide 3 libros y guárdalos en un array
- Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
- Validar que los campos no se introduzcan vacíos
- Validar que el año sea un número y que tenga 4 dígitos
- Validar que el género sea: aventuras, terror o fantasía
- Crea una función que muestre todos los libros
- Crea una función que muestre los autores ordenados alfabéticamente
- Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

class Book {
    constructor(title, autor, year, genre) {
        this.title = title;
        this.autor = autor;
        this.year = year;
        this.genre = genre;
    }

    infoLibro() {
        return { `${this.title} de ${this.autor} - ${this.year} - ${this.genre}` }
    }
}

const booksCount = 3;

function enterBook() {
    let newBook = new Book
}

function loadLibrary(library) => {
    while (let i < booksCount) {
        library.push(enterBook());
    }
    return library;
}

let arrayLibrary = [];