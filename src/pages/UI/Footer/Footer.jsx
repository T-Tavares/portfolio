import style from './Footer.module.css';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
export default function Footer() {
    return (
        <footer id={style.footer}>
            <div className={style.socials}>
                <a href="https://github.com/T-Tavares" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ttavaresf/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/dateuspulo/" target="_blank">
                    <FaInstagram />
                </a>
            </div>
            <p>
                Tavares <br /> 2024
            </p>
        </footer>
    );
}
