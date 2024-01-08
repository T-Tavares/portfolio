import style from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { textScrambler } from '../../../helpers/textScrambler';
import { Link } from 'react-router-dom';

const getScreen = () => {
    if (window.innerWidth < 900) return 'mobile'
    return 'desktop'
}

export default function Navbar() {
    const [navType, setNavType] = useState(getScreen())

    // -------------------- NAVBAR HOVER HANDLERS --------------------- //

    const mouseOver = e => (e.target.textContent = '>_' + e.target.textContent.slice(1));
    const mouseOut = e => (e.target.textContent = '#' + e.target.textContent.slice(2));

    // ------------------- SCRAMBLED TEXT GENERATOR ------------------- //

    const logo = textScrambler('Tavares', style.logo)

    // ---------------------------------------------------------------- //
    // -------------------------- COMPONENT --------------------------- //
    // ---------------------------------------------------------------- //

    return (
        <>
            <nav className={navType === 'mobile' ? style.navbarMobile : style.navbar}>
                <Link to="/">{logo}</Link>
                <ul>
                    <Link to='/'>
                        <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#home</button></li>
                    </Link>
                    <Link to='projects'>
                        <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#projects</button></li>
                    </Link>
                    <Link to='about'>
                        <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#about</button></li>
                    </Link>
                    <Link to='contact'>
                        <li><button onMouseOver={mouseOver} onMouseOut={mouseOut}>#contact</button></li>
                    </Link>
                </ul>
            </nav>
        </>
    );
}
