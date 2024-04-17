import style from './HomeLanding.module.css';
import myImage from '../../../assets/images/profile-pic.jpg';
import {textScrambler} from '../../../helpers/textScrambler';

// TODO - Make scroll button clicable out of arrows as well
export default function HomeIntro() {
    const scrollDown = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    };
    const scrambledText = textScrambler('Tavares', style.scrambled);
    return (
        <div className={style.landingContent}>
            <div className={style.landingText}>
                <p>Hi, My name is</p>

                <div>
                    <h1>Thiago</h1>
                    {scrambledText}
                </div>

                <p>I'm a Web Developer</p>
            </div>
            <div className={style.landingImage}>
                <img src={myImage} alt="Profile Image" />
            </div>
            <button onClick={scrollDown} className={style.landingScrollCTA}></button>
        </div>
    );
}
