import React from "react";
import styles from './ErrorModal.module.scss';

import Card from "../card/Card";
import Button from "../button/Button";

const ErrorModal = props => {
    return(
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm} />
            <Card className={`${styles.modal}`}>
                    
                    <header className={styles.header}>
                        <h2>{props.title}</h2>
                    </header>
                    
                    <div className={styles.content}>
                        <p>{props.message}</p>
                    </div>

                    <footer className={styles.actions}>
                        <Button onClick={props.onConfirm}> Okay</Button>
                    </footer>

            </Card>
        </div>
    );
};

export default ErrorModal;