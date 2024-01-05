import style from './Landing.module.css';
import HomeLanding from './components/HomeLanding';
import Projects from '../UI/Projects/Projects';
import Skills from './components/Skills';
import Box from '../UI/Box/Box';

export default function Landing() {
    return (
        <div id={style.landing}>
            <HomeLanding />
            <Box title="A bit about me">
                <p>
                    I moved overseas five years ago pursuing a better life. Well, life now presents different challenges
                    that I can't label as better or worse. However, I am sure that this journey helped me grow. From a
                    teaching and artistic background, I've ended up following a childhood wish—that was to work with
                    technology. After a couple of years studying and dedicating my time to learning software
                    development, here I am.
                </p>
            </Box>
            <Projects title="Latest Projects" amount="3" expandPath="projects" />
            <Skills />
        </div>
    );
}
