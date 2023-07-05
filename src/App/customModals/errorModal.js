import React from "react";

import styles from './styles/errorModal.module.css'

const ErrorModal = ({ title, message, buttonHandler }) => {
    return (
        <div className={styles.backdrop} onClick={buttonHandler}>
            <div className={styles.modal}>
                {/* HEADER */}
                <header className={styles.header}>
                    <h2>{title}</h2>
                </header>

                {/* BODY */}
                <div className={styles.content}>
                    <p>{message}</p>
                </div>

                {/* FOOTER */}
                <footer className={styles.actions}>
                    <button className={styles.button} onClick={buttonHandler}>okay</button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal
