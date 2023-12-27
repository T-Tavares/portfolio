import style from './Navbar.module.css';

// HELPERS 
const characters = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789+-=*/?#@!?-_'.split('')
const getRandomLetter = () => characters[Math.floor(Math.random() * characters.length)]



export default function Navbar() {
    // ---------------------------------------------------------------- //
    // -------------------- NAVBAR HOVER HANDLERS --------------------- //
    // ---------------------------------------------------------------- //

    const mouseOver = e => (e.target.textContent = '>_' + e.target.textContent.slice(1));
    const mouseOut = e => (e.target.textContent = '#' + e.target.textContent.slice(2));

    const logoScrambler = e => {
        //  LOGO SCRAMBLES SETUP VARIABLES
        let count = 0;
        const repetitions = 10;
        const delay = 200;

        // setInterval ID
        const intervalID = setInterval(() => {

            // This Function gets a random letter from the characters string
            e.target.textContent = getRandomLetter() 

            // If repetitions is reached the letter goes back to initial letter (saved as a dataset) and interval is cleared
            if (++count === repetitions) {
                e.target.textContent = e.target.dataset.letter
                window.clearInterval(intervalID)
            }
        }, delay )
    }

    // ------------------------- LOGO RENDER -------------------------- //
    // RENDER LOGO AS INDIVIDUAL H1 TAGS ( Necessary to apply the letter scramble effect)
    const logo = 'Tavares'
        .split('')
        .map((letter, i) => <h1 key={`key-${i}`} data-letter={letter} onMouseOver={logoScrambler}>{letter}</h1>)

    // ---------------------------------------------------------------- //
    // -------------------------- COMPONENT --------------------------- //
    // ---------------------------------------------------------------- //

    return (
        <>
            <nav className={style.navbar}>
                <div className={style.logo}>{logo}</div>
                <ul>
                    <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#home</button></li>
                    <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#projects</button></li>
                    <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#about</button></li>
                    <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#contact</button></li>
                </ul>
            </nav>
        </>
    );
}
