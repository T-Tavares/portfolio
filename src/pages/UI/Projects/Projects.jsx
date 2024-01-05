import style from './Projects.module.css';
import Box from '../Box/Box';
import DB from '../../../database/database.json';

import {MdOpenInBrowser} from 'react-icons/md';

// HELPER FUNCTION - GET DATE TIMESTAMP
const getTimeStamp = dateString => new Date(dateString).getTime();

export default function Projects({title, amount, expandPath}) {
    // SORT PROJECTS FROM NEWEST TO OLDEST
    const projectsSortLatest = DB.projects.sort((a, b) => getTimeStamp(b.date) - getTimeStamp(a.date));

    // DISPLAY AMOUNT OF PROJECTS SET ON AMOUNT PROP
    const projectsCut = amount ? projectsSortLatest.slice(0, amount) : projectsSortLatest;

    // MAP THROUGH PROJECTS AND RETURN PROJECT CARD ELEMENTS
    // TODO - BREAK CARDS INTO A DIFFERENT COMPONENT
    const projects = projectsCut.map(project => (
        <Box type="card" key={project.id} className={style.projectBox}>
            <h1 className={style.title}>{project.title}</h1>
            <p className={style.p}>{project.description}</p>
            <div className={style.buttonContainer}>
                <a target="_blank" href={project.source} rel="noreferrer">
                    Source <MdOpenInBrowser />
                </a>
                <a target="_blank" href={project.demo} rel="noreferrer">
                    Demo <MdOpenInBrowser />
                </a>
            </div>
        </Box>
    ));

    return (
        <Box title={title} className={style.latestProjectsContainer} expandPath={expandPath}>
            {projects}
        </Box>
    );
}
