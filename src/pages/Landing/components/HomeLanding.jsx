import style from './HomeLanding.module.css';
import myImage from './../../../assets/images/profile-pic.jpg';

export default function HomeIntro() {
    const scrollDown = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    };
    // TODO - APPLY LETTERS SCRUMBLING TO "TAVARES" SPAN
    return (
        <div className={style.landingContent}>
            <div className={style.landingText}>
                <p>Hi, My name is</p>
                <h1>
                    Thiago <span>Tavares</span>
                </h1>
                <p>I'm a Web Developer</p>
            </div>
            <div className={style.landingImage}>
                <img src={myImage} alt="" />
            </div>
            <button onClick={scrollDown} className={style.landingScrollCTA}></button>
        </div>
    );
}
