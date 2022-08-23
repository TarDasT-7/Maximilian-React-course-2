import React from "react";
import styles from './AddUser.module.scss';

import Card from "../../UI/card/Card";
import Button from "../../UI/button/Button";

const AddUser = props => {

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return(
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>

                <label htmlFor="username">Username</label>
                <input id="username" type="text" />

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />

                <Button type="submit">Add User</Button>

            </form>
        </Card>
    );

};

export default AddUser;