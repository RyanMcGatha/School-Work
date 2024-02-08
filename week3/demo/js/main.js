'use strict';

document,addEventListener('DOMContentLoaded', function () {
    console,console.log('content loaded');
    const greeting = document.createElement('h1');
    const root = document.querySelector('#root');

    greeting.textContent = 'hello world';
    root.append(greeting);

    fetch('https://api.discogs.com/artists/66852')
        .them(function (response) {
            console.log(response)
            return response.json();

        })
        .them 
});





