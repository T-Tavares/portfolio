import Box from '../UI/Box/Box';
import style from './About.module.css';
import {useEffect} from 'react';

import img1 from '../../assets/images/sculptures/digital--alien-01.jpg';
import img2 from '../../assets/images/sculptures/digital--alien-02.jpg';
import img3 from '../../assets/images/sculptures/traditional--minotaur.jpg';
import img4 from '../../assets/images/sculptures/traditional--lioness.jpg';

export default function About() {
    // Scroll back to top on component mount
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <Box title="About Me">
            <article className={style.articles}>
                <h2>A Little Bit About Me</h2>
                <article>
                    <h3>Who Am I?</h3>

                    <p>
                        Who are you? 🤪 <br />
                        <br /> I am one of the many who decided to try life overseas. I came to New Zealand five years ago to study and
                        learn English. Life happened in a way that I am now a resident here.
                        <br />
                        <br />
                        I am a very easy-going person and prefer hiking over crowded parties. Some of my hobbies include gardening,
                        cooking, and any sort of traditional art. (Curious fact) Back in Brazil, I used to be an art teacher and sculptor.
                        I love all sorts of artistic expressions but decided to have it as a hobby rather than as my everyday job.
                        <br />
                        <br />
                        The tech world always fascinated me. Since I was a kid, I've always been very active on computers and the
                        internet. But I was always reluctant to invest time and money in programming.
                        <br />
                        <br />
                        That changed a couple of years ago when I decided to give it a go. In the end, I loved the whole thing
                        <br />
                        <br />
                        When I came to New Zealand, I wasn't building any expectations. I was just here to learn English. But life has a
                        way of surprising you and after six years of challenges, perseverance, and growth, I became a Permanent Resident.
                        <br />
                        <br />
                        Refocusing on my career, I graduated in Digital Marketing through NZIE, but the pandemic threw a wrench in those
                        plans. Even so, I kept my “I'm not giving up” mindset. Once things settled, I immersed myself in web development,
                        starting with a year of self-study in JavaScript.
                        <br />
                        <br />
                        Then, I discovered Mission Ready, where I took a serious step toward my tech career. I graduated as a Full Stack
                        Developer, mastering skills like TypeScript, SASS, Node.js, React, and more.
                        <br />
                        <br />
                        One of the biggest surprises in my journey came when Mission Ready reached out and asked if I wanted to join their
                        team as an Assistant Trainer. It was a happy and unexpected turn, allowing me to give back to the same community
                        that helped launch my tech career.
                        <br />
                        <br />
                        Now, I'm diving deeper into Python while continuing to build projects in React. These projects and studies became
                        more than just work. They're part of who I am and where I find real joy in exploring technology. I'm excited to
                        see where this journey takes me next.
                    </p>
                </article>

                <article>
                    <h3>Why Did I Choose Software Development?</h3>
                    <p>
                        I love understanding how things work and how to fix them (when broken). The early days weren't easy for my parents
                        when I used to disassemble my desktop computers just out of curiosity to know what was going on inside them. I
                        ended up breaking a lot of stuff and giving my dad a few headaches until I got a decent knowledge about it
                        (eventually...). <br />
                        <br />
                        Now my days of breaking appliances are long gone, but I am still very curious about how things work and very
                        excited to apply my problem-solving skills to any challenge.
                    </p>
                </article>

                <article>
                    <h3>I am Methodical</h3>

                    <p>
                        I have this urge to create methods and improve them for any task I put my mind on. Even on simple daily tasks,
                        like clearing a path in my garden, I tend to think of all the steps I'll take to achieve it. In a work
                        environment, I don't mind not having things done my way, as long as the team is following a conscientious method
                        and flow.
                        <br />
                        <br />
                        On a side note, I believe that a lot of this came from my sculpture process. I always divide things into at least
                        three distinctive steps: structure, blocking (overall volume/idea), and refining. And it makes the process and the
                        results better.
                    </p>
                </article>

                <h2>Hobbies</h2>

                <article>
                    <h3>Sculptures</h3>
                    <p>I've talked a few times about it, but I'll show you a bit of that part of my life/skills.</p>
                    <div className={style.gallery}>
                        <img src={img3} alt="Minotaur Sculpture" />
                        <img src={img1} alt="Alien Sculpture" />
                        <img src={img4} alt="Lioness Sculpture" />
                        <img src={img2} alt="Alien Sculpture" />
                    </div>
                    <p>
                        I haven't given up on my artistic side; I just chose not to have it as my career. Instead, I want it to be an
                        escape from those hard days we all have where we need to recharge our energy.
                    </p>
                </article>
                <article>
                    <h3>Gardening</h3>
                    <p>
                        Although I have almost no clue about what I am doing with my plants, I do like them very much, and I love to
                        dedicate time to see them thriving and blooming.
                    </p>
                </article>

                <h2>What I Am Up To These Days</h2>
                <article>
                    <h3>Mission Ready</h3>
                    <p>
                        I am in the middle of a Full Stack Accelerator course (Web Development) at Mission Ready. And I am very grateful
                        that I ended up there. It's been an intense and fun learning process with some amazing people. <br />
                        <br />
                        After that, I want to gain some experience working and build my career as a Web Developer. And eventually, I will
                        pursue my own projects and software ideas.
                    </p>
                </article>
            </article>
        </Box>
    );
}
