import style from './Curriculum.module.css';
import Box from '../UI/Box/Box';
import Skills from '../UI/Skills/Skills';
import CV from '../../assets/Tavares CV - 2024.pdf';
import {useEffect} from 'react';

export default function Curriculum() {
    // Scroll back to top on component mount
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <Box title="Curriculum" className={style.curriculum}>
                <Box title="Download my CV" className={style.cvBox}>
                    <a href={CV} download="Thiago Tavares - CV" className={style.cvButton}>
                        Thiago Tavares - Curriculum Vitae
                    </a>
                </Box>

                <Box title="What I can do for you">
                    <p>Most of my relevant experience is from Mission Ready.</p>
                    <p>
                        I've built front-end and back-end applications using Typescript, React, Next JS, Tailwind, SASS, NodeJS, Express
                        JS, MongoDB and MySQL.
                    </p>
                    <p> Also had a good foundation on DevOps with Docker, and some Cloud experience with Google Cloud.</p>
                    <p>
                        The intense training and the projects I've built gave me a good foundation to work on any project. I became
                        comfortable to navigate through Documentations, Stackoverflow and Chat GPT to solve problems.
                    </p>
                    <p>
                        {' '}
                        I also have a solid understanding of the AGILE methodology and Project Management tools such as Jira and Trello,
                        as my biggest projects were built on top of them.
                    </p>
                    <p>
                        I'll drop below a list of tools and technologies I feel very comfortable working. But I'm always open to learning
                        new things and I'm confident that I can adapt to new tools and methodologies quickly.
                    </p>
                </Box>
                <br />

                <Skills />
            </Box>
        </>
    );
}
