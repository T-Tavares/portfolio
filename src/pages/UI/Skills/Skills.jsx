import style from './Skills.module.css';
import Box from '../Box/Box';

// ICONS IMPORTS
import {FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaFigma, FaNodeJs} from 'react-icons/fa';
import {IoLogoJavascript, IoLogoReact} from 'react-icons/io5';
import {TbBrandNextjs} from 'react-icons/tb';
import {
    SiSass,
    SiVisualstudiocode,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiFirebase,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiGithubactions,
    SiJest,
    SiPuppeteer,
    SiGnubash,
} from 'react-icons/si';

export default function Skills({expands}) {
    const path = expands ? 'curriculum' : ''; // With an empty path theres no expand button rendered on this component

    return (
        <Box title="Skills & Tools" expandLabel="View Curriculum" expandPath={path} className={style.skillsContainer}>
            <div className={style.skillCard}>
                <IoLogoJavascript className={style.icon} />
                <h1 className={style.title}>Javascript</h1>
            </div>
            <div className={style.skillCard}>
                <SiTypescript className={style.icon} />
                <h1 className={style.title}>Typescript</h1>
            </div>
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
                <SiTailwindcss className={style.icon} />
                <h1 className={style.title}>Tailwind</h1>
            </div>
            <div className={style.skillCard}>
                <IoLogoReact className={style.icon} />
                <h1 className={style.title}>React</h1>
            </div>
            <div className={style.skillCard}>
                <TbBrandNextjs className={style.icon} />
                <h1 className={style.title}>NextJS</h1>
            </div>
            <div className={style.skillCard}>
                <FaNodeJs className={style.icon} />
                <h1 className={style.title}>NodeJS</h1>
            </div>
            <div className={style.skillCard}>
                <SiExpress className={style.icon} />
                <h1 className={style.title}>Express JS</h1>
            </div>
            <div className={style.skillCard}>
                <SiFirebase className={style.icon} />
                <h1 className={style.title}>Firebase</h1>
            </div>
            <div className={style.skillCard}>
                <SiMysql className={style.icon} />
                <h1 className={style.title}>MySQL</h1>
            </div>
            <div className={style.skillCard}>
                <SiMongodb className={style.icon} />
                <h1 className={style.title}>MongoDB</h1>
            </div>
            <div className={style.skillCard}>
                <SiDocker className={style.icon} />
                <h1 className={style.title}>Docker</h1>
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
                <SiGithubactions className={style.icon} />
                <h1 className={style.title}>Github Actions</h1>
            </div>
            <div className={style.skillCard}>
                <SiJest className={style.icon} />
                <h1 className={style.title}>Jest</h1>
            </div>
            <div className={style.skillCard}>
                <SiPuppeteer className={style.icon} />
                <h1 className={style.title}>Puppeteer</h1>
            </div>
            <div className={style.skillCard}>
                <SiGnubash className={style.icon} />
                <h1 className={style.title}>Bash</h1>
            </div>
            <div className={style.skillCard}>
                <SiVisualstudiocode className={style.icon} />
                <h1 className={style.title}>VSCode</h1>
            </div>
        </Box>
    );
}
