import style from './MobileNavbar.module.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function MobileNavbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const NavButton = () => {
        const openMobileNav = () => setIsNavbarOpen(true);

        return (
            <>
                <div className={style.mobileNavClosed}>
                    <Link to="/">
                        <h1 className={style.mobileLogo}>&nbsp;Tt</h1>
                    </Link>
                    <button onClick={openMobileNav} className={style.openBtn}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </>
        );
    };

    const NavOpen = () => {
        const closeMobileNav = () => setIsNavbarOpen(false);
        return (
            <ul onClick={closeMobileNav} className={style.navOpen}>
                <Link to="/">
                    <li>
                        <button>#home</button>
                    </li>
                </Link>
                <Link to="projects">
                    <li>
                        <button>#projects</button>
                    </li>
                </Link>
                <Link to="about">
                    <li>
                        <button>#about</button>
                    </li>
                </Link>
                <Link to="contact">
                    <li>
                        <button>#contact</button>
                    </li>
                </Link>
            </ul>
        );
    };

    return <>{isNavbarOpen ? <NavOpen /> : <NavButton />}</>;
}
