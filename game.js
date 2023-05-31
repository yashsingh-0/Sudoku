const gridItem = document.querySelectorAll(".grid-item > input");

// Generate Random Numbers
const generateRandomNum = ()  => {
    const randomNum = Math.floor(Math.random() * 9) + 1;
    return randomNum;
}

const checkingSmallSuqare = () => {
    let sumOfSmallSquares = 0;
    randomNum = generateRandomNum();
    for( let i = 0; i <= 8; i++) {
        sumOfSmallSquares += gridItem[i].value;
        // Check if Duplicate Values Exist in small squares and replace
        if(gridItem[i].value != "") {
            let valuesMap = new Map();
            valuesMap.set(i,gridItem[i].value);
            console.log(valuesMap.get(i));

            // if(gridItem[i].value == gridItem[i+1].value) {
            //     gridItem[i].value = randomNum;
            //     console.log(gridItem[i].value);
            // } 
        }       
    }
}
// Changing Values of Random Input Values
const injectingValuesToInput = () => {
    for(i = 0; i <= 30; i++) {
        randomNum = generateRandomNum();
        const randPosition = Math.floor(Math.random() * 80) + 1;
        gridItem[randPosition].value = randomNum;
    }
    checkingSmallSuqare();
}

injectingValuesToInput();
