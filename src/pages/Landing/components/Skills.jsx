import style from './Skills.module.css';
import Box from '../../UI/Box/Box';

// ICONS IMPORTS
import {FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaFigma} from 'react-icons/fa';
import {IoLogoJavascript, IoLogoReact} from 'react-icons/io5';
import {SiAdobephotoshop, SiAdobeillustrator, SiBlender, SiSass, SiVisualstudiocode} from 'react-icons/si';
export default function Skills() {
    return (
        <Box
            title="Skills & Tools"
            expandLabel="View Curriculum"
            expandPath="#curriculum"
            className={style.skillsContainer}
        >
            <div className={style.skillCard}>
                <FaHtml5 className={style.icon} />
                <h1 className={style.title}>HTML</h1>
            </div>
            <div className={style.skillCard}>
                <FaCss3Alt className={style.icon} />
                <h1 className={style.title}>CSS</h1>
            </div>
            <div className={style.skillCard}>
                <SiSass className={style.icon} />
                <h1 className={style.title}>SASS</h1>
            </div>
            <div className={style.skillCard}>
                <IoLogoJavascript className={style.icon} />
                <h1 className={style.title}>JS</h1>
            </div>
            <div className={style.skillCard}>
                <IoLogoReact className={style.icon} />
                <h1 className={style.title}>React</h1>
            </div>
            <div className={style.skillCard}>
                <FaGitAlt className={style.icon} />
                <h1 className={style.title}>Git</h1>
            </div>
            <div className={style.skillCard}>
                <FaGithub className={style.icon} />
                <h1 className={style.title}>Github</h1>
            </div>
            <div className={style.skillCard}>
                <SiVisualstudiocode className={style.icon} />
                <h1 className={style.title}>VSCode</h1>
            </div>
            <div className={style.skillCard}>
                <FaFigma className={style.icon} />
                <h1 className={style.title}>Figma</h1>
            </div>
            <div className={style.skillCard}>
                <SiAdobephotoshop className={style.icon} />
                <h1 className={style.title}>PS</h1>
            </div>
            <div className={style.skillCard}>
                <SiAdobeillustrator className={style.icon} />
                <h1 className={style.title}>IL</h1>
            </div>
            <div className={style.skillCard}>
                <SiBlender className={style.icon} />
                <h1 className={style.title}>HTML</h1>
            </div>
        </Box>
    );
}
