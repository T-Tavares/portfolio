import style from './Landing.module.css';
import HomeLanding from './components/HomeLanding';
import LatestProjects from './components/LatestProjects';
import Skills from './components/Skills';
import TalkToMe from './components/LetsChat';

export default function Landing() {
    return (
        <div id={style.landing}>
            <HomeLanding />
            <LatestProjects />
            <Skills />
            <TalkToMe />
        </div>
    );
}
