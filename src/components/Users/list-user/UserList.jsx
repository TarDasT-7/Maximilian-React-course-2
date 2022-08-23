import React from "react";
import styles from './UserList.module.scss';

import Card from "../../UI/card/Card";

const UserList = props => {

    return(
        <Card className={`${styles.users} ${props.className}`}>
            <ul>
                {props.users.map(user => <li key={user.id}> {user.name} ( {user.age} Years old ) </li>)}
            </ul>
        </Card>

    );

}

export default UserList;