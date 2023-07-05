import React from "react";

import styles from './styles/errorModal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            {/* HEADER */}
            <header className={styles.header}>
                <h2>{props?.title}</h2>
            </header>

            {/* BODY */}
            <div className={styles.content}>
                <p>{props?.message}</p>
            </div>

            {/* FOOTER */}
            <footer className={styles.actions}>
                <button className={styles.button} onClick={props?.onClick}>okay</button>
            </footer>
        </div>
    )
};

const ErrorModal = ({ title, message, buttonHandler }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={buttonHandler} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
                <ModalOverlay
                    title={title}
                    message={message}
                    onClick={buttonHandler}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModal
