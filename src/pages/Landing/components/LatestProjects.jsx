import style from './LatestProjects.module.css';
import Box from '../../UI/Box/Box';
import DB from './../../../database/database.json';
import {MdOpenInBrowser} from 'react-icons/md';

// HELPER FUNCTION - GET DATE TIMESTAMP

const getTimeStamp = dateString => new Date(dateString).getTime();
/* 
    Chain that will sort projects from newest, slice the three most recent and 
    format them as Card Components for render
*/

export default function LatestProjects() {
    const CARDS_TO_DISPLAY = 3;

    const projects = DB.projects
        .sort((a, b) => getTimeStamp(b.date) - getTimeStamp(a.date))
        .slice(0, CARDS_TO_DISPLAY)
        .map(project => (
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
        <Box title="Latest Projects" className={style.latestProjectsContainer} expandPath="#projects">
            {projects}
        </Box>
    );
}
