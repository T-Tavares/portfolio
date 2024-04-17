import style from './Curriculum.module.css';
import Box from '../UI/Box/Box';
import Skills from '../UI/Skills/Skills';

export default function Curriculum() {
    return (
        <>
            <Box title="Curriculum" className={style.curriculum}>
                <Box title="What I can do for you now">
                    <p>
                        I'm currently studying through Mission Ready in New Zealand. It's been an intensive few last
                        months. Where we went from the basics of HTML, CSS, and JavaScript to React, Node, Express, and
                        MongoDB.
                    </p>
                    <p>To more advanced topics like DevOps and Docker, Github Actions.</p>
                    <p>
                        I am strong on Javascript / Typescript, CSS, and CSS derivates like Tailwind or SASS. However,
                        my interests are inclined to Backend Technologies and tools like DevOps
                    </p>
                </Box>
                <br />
                <br />

                <Skills />
            </Box>
        </>
    );
}
