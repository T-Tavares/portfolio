import { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import DesktopNavbar from './components/DesktopNavbar';
import MobileNavbar from './components/MobileNavbar';

export default function Navbar() {
    const [isNavMobile, setIsNavMobile] = useState(false)


    // --------------- NAVBAR MOBILE / DESKTOP TRIGGER ---------------- //
    useEffect(() => {
        const isNavMobileHandler = () => {
            setIsNavMobile(window.innerWidth < 900);
        };

        // Set the initial state and listen for resizing
        isNavMobileHandler();
        window.addEventListener('resize', isNavMobileHandler);

        return () => {
            window.removeEventListener('resize', isNavMobileHandler);
        };
    }, []);

    // ---------------------------------------------------------------- //
    // -------------------------- COMPONENT --------------------------- //
    // ---------------------------------------------------------------- //

  
    return (
        <>  
        {isNavMobile ? <MobileNavbar/> : <DesktopNavbar/>}
        </>
    );
}
