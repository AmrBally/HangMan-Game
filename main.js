// Letters 
const Letters = 'abcdefghijklmnopqrstuvwxyz';
// Get Array From Letters
let lettersArray = Array.from(Letters);
// Select Letters Container
let lettersContainer = document.querySelector('.letters');

// Generate Letters
lettersArray.forEach(letter => {
    // Create SPan
    let span = document.createElement('span');
    // Create Letter Text Node
    let theLetter = document.createTextNode(letter);
    // append The letter text Node
    span.appendChild(theLetter);
    // Add Class On Span
    span.className = 'letter-box';
    // Append Span To The Letter Container
    lettersContainer.appendChild(span);
})

// Opject Of Words + Categores 
const words = {
    programing: ['php','javascript','go','scala','fortran','r','mysql','python'],
    moves: ['Prestige','inception','Parasite','Interstellar','Wiplash','Spiderman','Coco','Up'],
    people: ['Albert Einstein','Adel Emam','Mohamed Salah','Abu Treka','Bally'],
    countries: ['Syria','Palestine','Yemen','Qatar','Egypt','Bahrain'],
}

// Random Property
let allKeys = Object.keys(words);

// Random Number Depend On Keys Lenght
let randomPropNumber = Math.floor(Math.random() * (allKeys.length -1) )

// Category
let randomPropName = allKeys[randomPropNumber];
// let randomPropName = allKeys[0];

// Category Words
let randomPropValues = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * (randomPropValues.length -1) );

// THe Chosen Word
let randomValueValue = randomPropValues[randomValueNumber];
// let randomValueValue = randomPropValues[0];

// Set Category Info
document.querySelector('.container .category span').innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector('.letters-guess')


// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);
console.log(lettersAndSpace);

// Create Spans Depened On Word
lettersAndSpace.forEach(character => {

    // Create Empty Span
    let span = document.createElement('span');

    // If Span has Space
    if (character === ' ') {
        // Add Class To Span
        span.className = 'with-space'
    }

// Append Span To The Letter Guess Container
lettersGuessContainer.appendChild(span);

});

// Select Guess Spans
let guessSpans = document.querySelectorAll('.letters-guess span');
console.log(guessSpans);
// Set Wrong Attempts
let wrongAttempts = 0;
// Select The Drow Element
let theDrow = document.querySelector('.hangman-drow');

// Handel Clicking On Letters
lettersContainer.addEventListener('click', (e) => {

    console.log('dssad');
    // Set The Chose Status
    
    // console.log(guessSpans[0].innerText , 'guessSpans');

    let theStatus = false;
    // console.log(theStatus);
    if (e.target.className === 'letter-box') {
        e.target.classList.add('clicked')
        // Get Clicked Letter
        let theClickedLetter = e.target.innerText.toLowerCase();

    
        // The Chosen Word
        let TheChosenWord = Array.from(randomValueValue.toLowerCase())
        console.log(TheChosenWord);
        // TheChosenWord.forEach((wordLetter , wordIndex) => {
            
        //     if (theClickedLetter == wordLetter) {
        //         // Set Status To Correct
        //         theStatus = true;
        //         // Loop On All Guess Spans
        //         guessSpans.forEach((span , spanIndex) => {
        //             if (spanIndex === wordIndex) {
        //                 span.innerHTML = theClickedLetter
        //             }
        //         });
        //     }
        // });

        console.log(theClickedLetter); // "p"
        console.log(TheChosenWord, 'TheChosenWord');

        // TheChosenWord =  ['p','h','p']

        // guessSpans = ['<span></span>','<span></span>','<span></span>']

        for (let i = 0; i < TheChosenWord.length; i++) {

            if (theClickedLetter == TheChosenWord[i]) { // 'p' == "p"
                
                    console.log(i); // 0
                    
                    theStatus = true;

                    guessSpans[i].innerText = theClickedLetter

                    // 
                    // for (let j = 0; j < guessSpans.length; j++) {
                    //     if (i === j) {
                    //         guessSpans[j].innerText = theClickedLetter
                    //     }
                    // }
                }
                
            }


            let empty_spans = 0;
            let full_spans = 0;

            for (let j = 0; j < guessSpans.length; j++) {

                if (guessSpans[j].innerText == '' && guessSpans[j].className == "") { // <span></span> != ""
                    empty_spans++
                }else {
                    full_spans++

                }
            }

            console.log(guessSpans);
            if (full_spans == guessSpans.length) {
                success()
            }

            console.log(empty_spans, 'empty_spans');
            console.log(full_spans, 'full_spans');
            console.log(guessSpans.length, 'length of spans');


        // If Letter Is Wrong
        if (theStatus !== true) {

            // Increase The Wrong Attempts
            wrongAttempts++;

            // Add Class Wrong On The Drow Element
            theDrow.classList.add(`wrong-${wrongAttempts}`)

            if (wrongAttempts === 8) {

                endGame()

                lettersContainer.classList.add('finished')
            }
        }
    }
})



function endGame() {
    // create Popup Div
    let div = document.createElement('div');
    // Create Text
    let divText = document.createTextNode(`Game Over, The Word Is (${randomValueValue})`);
    // Append Text To Div
    div.appendChild(divText);
    // Add Class On Div
    div.className = 'popup';
    // Append To The Body
    document.body.appendChild(div);
}


function success() {
    // create Popup Div
    let div = document.createElement('div');
    // Create Text
    let divText = document.createTextNode(`Very Good`);
    // Append Text To Div
    div.appendChild(divText);
    // Add Class On Div
    div.className = 'popup-succes';
    // Append To The Body
    document.body.appendChild(div);


}
