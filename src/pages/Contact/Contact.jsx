import style from './Contact.module.css';
import Box from '../UI/Box/Box';
import emailjs from '@emailjs/browser';
import {validateInput} from '../../helpers/emailInputValidation';
import {FaLinkedin, FaInstagram, FaWhatsapp, FaGithub} from 'react-icons/fa';
import {useEffect} from 'react';

export default function Contact() {
    // ------------------------ EMAIL HANDLER ------------------------- //
    const sendEmailHandler = e => {
        e.preventDefault();
        const formChildrenEl = [...e.target.children];

        // -------------------- INPUTS PARAMS BUILDER --------------------- //
        // validateInput will return false for any invalid input
        const params = {
            from_name: validateInput(formChildrenEl[0], style.error),
            from_email: validateInput(formChildrenEl[1], style.error),
            subject: validateInput(formChildrenEl[2], style.error),
            message: validateInput(formChildrenEl[3], style.error),
        };

        // Will only send email if all the params fields have truthy values.
        if (!Object.values(params).includes(false)) {
            console.log('pass!');

            // ------------------------ EmailJS MAGIC ------------------------- //

            emailjs
                .send(
                    import.meta.env.VITE_YOUR_SERVICE_ID,
                    import.meta.env.VITE_YOUR_TEMPLATE_ID,
                    params,
                    import.meta.env.VITE_YOUR_PUBLIC_KEY
                )
                .then(
                    result => {
                        formChildrenEl.forEach(el => (el.value = ''));
                        console.log('SUCCESS', result.text);
                    },
                    err => console.error('FAILED', err.text)
                );
        }
    };

    // Scroll back to top on component mount
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <Box title="Digital Places to Find Me" className={style.socials}>
                <a href="https://www.linkedin.com/in/ttavaresf/" target="_blank">
                    <FaLinkedin />
                    <p>ttavaresf</p>
                </a>
                <a href="https://www.instagram.com/dateuspulo/" target="_blank">
                    <FaInstagram />
                    <p>dateuspulo</p>
                </a>
                <a href="https://wa.me/642102463540?text=Hi%20there%20,%20my%20name%20is%20" target="_blank">
                    <FaWhatsapp />
                    <p>+64 210 246 3540</p>
                </a>
                <a href="https://github.com/T-Tavares" target="_blank">
                    <FaGithub />
                    <p>T-Tavares</p>
                </a>
            </Box>
            <Box title="Send Me an Email">
                <form onSubmit={sendEmailHandler} className={style.form}>
                    <input type="text" name="user_name" placeholder="Your Name" autoComplete="off" />
                    <input type="email" name="user_email" placeholder="Your Email" autoComplete="off" />

                    <input type="text" name="subject" placeholder="Subject" autoComplete="off" />
                    <textarea name="message" placeholder="Your Message" rows={5} autoComplete="off" />
                    <input type="submit" value="Send" />
                </form>
            </Box>
        </>
    );
}
