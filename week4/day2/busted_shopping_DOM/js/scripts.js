'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');


    document.generateList.addEventListener('click', function () {
        const inputItems = document.querySelector('input');
        const listElement = document.createElement('ul');

        inputItems.forEach(function (inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            listElements.append(listItem);
        });

    });
})