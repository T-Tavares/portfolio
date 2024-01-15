import { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import DesktopNavbar from './components/DesktopNavbar';
import MobileNavbar from './components/MobileNavbar';

export default function Navbar() {
    const [isNavMobile, setIsNavMobile] = useState(false)


    // --------------- NAVBAR MOBILE / DESKTOP TRIGGER ---------------- //
    useEffect(()=> {
        const isNavMobileHandler = () => {
            window.innerWidth < 900 && setIsNavMobile(true)
            window.innerWidth > 900 && setIsNavMobile(false)
        }
        window.addEventListener('load', isNavMobileHandler)
        window.addEventListener('resize', isNavMobileHandler)
        
        // CleanUp function
        return () => window.removeEventListener('resize', isNavMobileHandler)

    }, [])

    // ---------------------------------------------------------------- //
    // -------------------------- COMPONENT --------------------------- //
    // ---------------------------------------------------------------- //

  
    return (
        <>  
        {isNavMobile ? <MobileNavbar/> : <DesktopNavbar/>}
        </>
    );
}
