const gridItem = document.querySelectorAll(".grid-item > input");

// Generate Random Numbers
const generateRandomNum = ()  => {
    const randomNum = Math.floor(Math.random() * 9) + 1;
    return randomNum;
}

// Changing Values of Random Input Values

const injectingValuesToInput = () => {
    for(i = 0; i <= 30; i++) {
        randomNum = generateRandomNum();
        const randPosition = Math.floor(Math.random() * 80) + 1;
        gridItem[randPosition].value = randomNum;
        // for(j=0; j<=81; j++) {
        //     if(gridItem[j] == gridItem[j+1]) {

        //     }
        // }
    }
    
}
injectingValuesToInput();