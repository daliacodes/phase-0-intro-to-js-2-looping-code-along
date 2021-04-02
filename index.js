function writeCards(names,event) {
    for (let i = 0; i < writeCards.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return writeCards;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday"); 

function countDown(i) {
    while (i >= 0) {
        console.log(i--);
    }
}

countDown(10)