import style from './Box.module.css';

export default function Box({title, expandLabel, expandPath, type, className, children}) {
    const typeClass = type ? style[type] : style.section;

    return (
        <div className={`${style.box} ${className} ${typeClass}`}>
            {title && <h1 className={style.boxTitle}>{title}</h1>}
            {expandPath && (
                <a href={expandPath} className={style.boxExpandBtn}>
                    {expandLabel ? expandLabel : 'View All'}
                </a>
            )}
            {children}
        </div>
    );
}
