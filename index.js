// Code your solutions in this file
const newArray = [];

function writeCards(arrayOfNames, stringOfEvent) {
    for (let i = 0; i < arrayOfNames.length; i++) {
    newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${stringOfEvent} gift!`);
    };
    return newArray;
};
writeCards(arrayOfNames, stringofEvent);

function countDown() {
    let number = 10;
    while (number >= 0){
        console.log(number--);
    }
}
