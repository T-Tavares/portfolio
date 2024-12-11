import ss from './Modal.module.css';
import {createPortal} from 'react-dom';
const Modal = ({isModalOpen, closeModal, message, title}) => {
    const closeModalBackdropClick = e => {
        e.preventDefault();
        console.log(e.target.classList);

        const isBackdrop = e.target.classList.contains(ss.backdrop);
        if (isBackdrop) closeModal();
    };

    return (
        <>
            {isModalOpen &&
                createPortal(
                    <div className={ss.backdrop} onClick={closeModalBackdropClick}>
                        <div className={ss.modal}>
                            <h2>{title}</h2>
                            <p>{message}</p>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>,
                    document.getElementById('modal')
                )}
        </>
    );
};

export default Modal;
