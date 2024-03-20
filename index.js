console.log("Nyaaa!!!");

//generateNumber(75);

let isB = false,
    isI = false,
    isN = false,
    isG = false,
    isO = false;

    let BNumber, INumber, NNumber, GNumber, ONumber;
    
    
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
        BNumber = randomNumber;
        isB = true;
        console.log(`The number ${randomNumber} is in B.`);
    }
    else if (randomNumber >= 16 && randomNumber <= + 30){
        INumber = randomNumber;
        isI = true;
        console.log(`The number ${randomNumber} is in I.`);
    } 
    else if (randomNumber >= 31 && randomNumber <= + 45){
        NNumber = randomNumber;
        isN = true;
        console.log(`The number ${randomNumber} is in N.`);
    } 
    else if (randomNumber >= 46 && randomNumber <= + 60){
        GNumber = randomNumber;
        isG = true;
        console.log(`The number ${randomNumber} is in G.`);
    } 
    else if (randomNumber >= 61 && randomNumber <= + 75){
        ONumber = randomNumber;
        isO = true;
        console.log(`The number ${randomNumber} is in O.`);
    } 
    else {
        console.log('The number is invalid!');
    } 

    if (isB = true && isI == true && isN == true && isG == true && isO == true) {
        console.log('Wow BINGOOOO!!!');
        console.table({
            B:BNumber,
            I:INumber,
            N:NNumber,
            G:GNumber,
            O:ONumber,
        })
    }
    //return console.log(randomNumber);
}

let counter = 10;

while (
    isB == false ||
    isI == false ||
    isN == false ||
    isG == false ||
    isO == false 
    )
    {
generateNumber(75);
    }