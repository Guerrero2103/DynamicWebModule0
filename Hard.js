'use strict';

const themaKnop = document.getElementById('themaKnop');
const body = document.body;

themaKnop.addEventListener("click",() => {
    const isDonker = body.style.backgroundColor === 'black';

    //wissel kleuren
    body.style.backgroundColor = isDonker ? 'white' : 'black';
    body.style.color = isDonker ? 'black' : 'white';

    //verander link kleur
    const links = document.querySelectorAll('a');
    for (let link of links) {
        link.style.color = isDonker ? 'blue' : 'lightblue';
    }


    //update knop tekst
    themaKnop.innerText = isDonker ? 'Donker thema' : 'Licht thema';



});


