import {TbSTurnLeft} from 'react-icons/tb';
import Box from '../../UI/Box/Box';
import style from './HomeLanding.module.css';

export default function ShortAbout() {
    return (
        <Box title="A bit about me" expandLabel="More About Me" expandPath="/about">
            <p className={style.summary}>
                I'm a curious and easy-going tech enthusiast who moved from Brazil to New Zealand eight years ago to
                study English, and life has since led me to become a Permanent Resident.
                <br />
                <br />
                My background includes art and teaching, but my fascination with technology eventually led me to pursue
                web development, learning JavaScript, TypeScript, Node.js, React, and more through self-study and the
                Mission Ready program, where I also had the chance to serve as an Assistant Trainer. Today, I work at
                Westpac as a Help Desk Support specialist, exploring adjacent technologies, building automations, and
                improving workflows with VBA, PowerShell, and Power BI.
                <br />
                <br />
                Outside of work, I enjoy hiking, gardening, cooking, traditional art, and currently learning C++ through
                personal projects—sailing through life as the good winds present themselves.
            </p>
        </Box>
    );
}
