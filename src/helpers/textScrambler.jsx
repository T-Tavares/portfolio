// const CHARACTERS = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789+-=*/?#@!?-_∑⨋⩝⨱⟠⧦⧧ΩƔþⱬƥ$€£'.split('');
const CHARACTERS = 'abcdefghijklmnopqrstuvxyz'.split('');
const CHARACTERSCAPS = 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789'.split('');

const REPETITIONS = 10;
const DELAY = 200;

const getRandomLetter = letter => {
    // return upper or lower case according to the initial input.
    // This adjust was made to keep the text size consistent.

    if (letter.toUpperCase() === letter) return CHARACTERSCAPS[Math.floor(Math.random() * CHARACTERSCAPS.length)];
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
};

const textScramblerHandler = e => {
    //  LOGO SCRAMBLES SETUP VARIABLES
    let count = 0;

    // setInterval ID
    const intervalID = setInterval(() => {
        // This Function gets a random letter from the characters string

        e.target.textContent = getRandomLetter(e.target.textContent); // Passed the target letter in to check if it's upper or lower case

        // If repetitions is reached the letter goes back to initial letter (saved as a dataset) and interval is cleared
        if (++count === REPETITIONS) {
            e.target.textContent = e.target.dataset.letter;
            window.clearInterval(intervalID);
        }
    }, DELAY);
};

/**
 * This function generates a div with h1's that scramble the letters when user hover through them.
 *
 * @param {string} text Text to be scrambled
 * @param {string} className Class to style the text
 * @returns Returns A div with each letter being an h1.
 */

export const textScrambler = (text, className) => {
    const Element = text.split('').map((letter, i) => (
        <h1 key={`key-${i}`} data-letter={letter} onMouseOver={textScramblerHandler}>
            {letter}
        </h1>
    ));

    return <div className={className}>{Element}</div>;
};
