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
        return (`${this.title} de ${this.autor} - ${this.year} - ${this.genre}`);
    }
}

function inputNotEmpty(textToShow, chars) {
    let notEmpty = false;
    let temporalInput;
    while (notEmpty != true) {
        temporalInput = prompt(`Ingrese el texto para el ${textToShow}.`);
        if ((temporalInput != ' ') & (temporalInput.length >= chars)) {
            notEmpty = true;
        }
        if ((temporalInput == ' ') || (temporalInput < chars)) {
            alert(`Valor ingresado inválido, ingrese el texto para el ${textToShow}`);
        }
    }
    return temporalInput;
}

function checkNumber(dataYear) {
    if (isNaN(dataYear)) {
        return false;
        console.log("no es numero")
    }
    console.log("es un numero")
    return true;
}

function dataRequest(data) {
    let validated = false;
    let tempDataRequest;
    while (validated != true) {
        if (data == 'title') {
            tempDataRequest = inputNotEmpty(data, 3);
            validated = true;
        }
        if (data == 'autor') {
            tempDataRequest = inputNotEmpty(data, 3);
            validated = true;
        }
        if (data == 'year') {
            tempDataRequest = inputNotEmpty(data, 4);

        }

    }
    return tempDataRequest;
}

function enterBook() {
    let newTitle = dataRequest("title");
    let newAutor = dataRequest("autor");
    let newYear = dataRequest("year");
    let newGenre = dataRequest("genre");

    let newBook = new Book(newTitle, newAutor, newYear, newGenre);
    return newBook;
}

function loadLibrary(library) {
    let i = 0;
    while (i < librarySize) {
        library.push(enterBook());
        i += 1;
    }
    return library;
}

// Main

let library = [];

const librarySize = prompt(`Ingrese la cantidad de libros a cargar en la biblioteca: `);

loadLibrary(library);