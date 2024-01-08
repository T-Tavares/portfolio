import style from './Landing.module.css';
import HomeLanding from './components/HomeLanding';
import Projects from '../UI/Projects/Projects';
import Skills from './components/Skills';
import ShortAbout from './components/ShortAbout';

export default function Landing() {
    return (
        <div id={style.landing}>
            <HomeLanding />
            <ShortAbout />
            <Projects title="Latest Projects" amount="3" expandPath="projects" />
            <Skills />
        </div>
    );
}
