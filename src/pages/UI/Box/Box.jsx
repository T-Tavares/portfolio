import style from './Box.module.css';
import {Link} from 'react-router-dom';

export default function Box({title, expandLabel, expandPath, type, className, children}) {
    const typeClass = type ? style[type] : style.section;

    return (
        <div className={`${style.box} ${className} ${typeClass}`}>
            {title && <h1 className={style.boxTitle}>{title}</h1>}
            {expandPath && (
                <Link to={expandPath} className={style.boxExpandBtn}>
                    {expandLabel ? expandLabel : 'View All'}
                </Link>
            )}
            {children}
        </div>
    );
}
