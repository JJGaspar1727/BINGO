console.log("Nyaaa!!!");

generateNumber(30);

function generateNumber (max) {
    // addition = +
    // subtraction = -
    // multiplication = *
    // divition = /
    // remainder = %
    let randomNumber = Math.floor(Math.random() * max) + 1;

    //if... else if... else
    //Gt >, Gte > = , Lt <,  Lte < =, Eq =, Neq ! =, And &&, or || 
    if (randomNumber <= 15) {
        console.log('The number is in B.');
    } else if (randomNumber >= 16 && randomNumber <= 30){
        console.log('The number is in I');
    } else {
        console.log('The number is invalid!');
    } 

    return console.log(randomNumber);
}