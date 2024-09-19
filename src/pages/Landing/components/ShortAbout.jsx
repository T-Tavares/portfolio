import {TbSTurnLeft} from 'react-icons/tb';
import Box from '../../UI/Box/Box';
import style from './HomeLanding.module.css';

export default function ShortAbout() {
    return (
        <Box title="A bit about me" expandLabel="More About Me" expandPath="/about">
            <p className={style.summary}>
                The moment I discovered Mission Ready was when I took a serious step toward my tech career. I graduated as a Full Stack
                Developer, mastering skills like TypeScript, SASS, Node.js, React, and more.
                <br />
                <br />
                One of the biggest surprises in my journey came when Mission Ready reached out and asked if I wanted to join their team as
                an Assistant Trainer. It was a happy and unexpected turn, allowing me to give back to the same community that helped
                launch my tech career.
                <br />
                <br />
                Now, I'm diving deeper into Python while continuing to build projects in React. These projects and studies became more
                than just work. They're part of who I am and where I find real joy in exploring technology. I'm excited to see where this
                journey takes me next.
            </p>
        </Box>
    );
}
