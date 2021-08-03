// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Create an instance of a db object for us to store the open database
let db;

window.onload = function() {
    // open our database; it is created if it doesn't already exists
    let request = window.indexedDB.open('notes_db', 1);

    // onerror handler signifies that the database didn't open successfully
    request.onerror = function() {
        console.log('Database failed top open');
    };

    // onsuccess handler signifies that the database opened successfully
    request.onsuccess = function () {
        console.log('Database opened successfully');

        // store opened database object in the db variable. This is used a lot below
        db = request.result;

        // run the displayData() function to display the notes already in the IDB
        displayData();
    };
};