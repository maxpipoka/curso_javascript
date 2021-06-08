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
        return { `${this.title} de ${this.autor} - ${this.year} - ${this.genre}` };
    }
}

const librarySize = 3;

function inputNotEmpty = (textToShow, chars) => {
    let notempty = false;
    let temporalInput;
    while (notempty != true) {
        temporalInput = prompt(`Ingrese el texto para el ${textToShow}.`);
        if ((temporalInput != ' ') & (temporalInput.length > chars)) {
            notempty = true;
        }
    }
    return temporalInput;
}

function checkNumber = (dataYear) => {
    parseInt(dataYear);

}

function dataRequest = (data) => {
    let temporalData;
    let valido = false;
    if (data == "title") {
        temporalData = inputNotEmpty(data, 2);
    }
    if (data == "autor") {
        temporalData = inputNotEmpty(data, 2);
    }
    if (data == "year") {
        temporalData = parseInt(inputNotEmpty(data, 4));
    }
    if (data == "genre") {
        temporalData = inputNotEmpty(data, 5);
    }
    if (valido == true) {
        return temporalData;
    }
}

function enterBook = () => {
    newTitle = dataRequest("title");
    newAutor = dataRequest("autor");
    newYear = dataRequest("year");
    newGenre = dataRequest("genre");

    let newBook = new Book(newTitle, newAutor, newYear, newGenre);

    return newBook;
}

function loadLibrary = (library) => {
    while (let i < librarySize) {
        library.push(enterBook());
    }
    return library;
}

let Library = [];