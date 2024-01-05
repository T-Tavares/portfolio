import style from './LetsChat.module.css';
import Box from '../../UI/Box/Box';
import {FaInstagram, FaLinkedin} from 'react-icons/fa';
export default function LetsChat() {
    return (
        <Box title="Let's Chat" className={style.letsChatContainer} expandLabel="View About" expandPath="about">
            <form className={style.form} action="mailto:thiago.tavares.freire@gmail.com">
                <input type="text" name="name" placeholder="Your Name" autoComplete="off" required />
                <input type="text" name="name" placeholder="Your Email" autoComplete="off" required />
                <input type="text" name="subject" placeholder="Subject" autoComplete="off" required />
                <textarea
                    name="message"
                    cols="50"
                    rows="8"
                    placeholder="Your Message"
                    autoComplete="off"
                    required
                ></textarea>
                <input type="submit" />
            </form>
            <div className={style.socials}>
                <h1>
                    or give me a call <br />
                    +64 0 210 246 3540
                </h1>

                <div>
                    <h1>I am also on some social media.</h1>
                    <br />
                    <a href="https://www.instagram.com/dateuspulo/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/ttavaresf/" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </Box>
    );
}
