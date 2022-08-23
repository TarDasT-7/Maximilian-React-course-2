import React , {useState} from "react";
import styles from './AddUser.module.scss';

import Card from "../../UI/card/Card";
import Button from "../../UI/button/Button";
import ErrorModal from "../../UI/error/ErrorModal";

const AddUser = props => {

    const [username , setUsername] = useState('');
    const [age , setAge] = useState('');
    const [error , setError] = useState();


    const submitHandler = (event) => {
        event.preventDefault();

        if(username.trim().length === 0 || age.trim().length === 0){
            setError(
                {
                    title:'invalid inputs' ,
                    message:'please enterd a valid name and age (non-empty values).'
                }
            );
            return ;
        }

        if(+age < 1){
            setError(
                {
                    title:'invalid age' ,
                    message:'please enterd a valid age (more than 0).'
                }
            );
            return;
        }

        console.log(username , age);
        props.onAddUser(username , age);
        setUsername('');
        setAge('');
    }

    const changeHandler = (event) =>{

        switch (event.target.id) {
            case 'username':
                setUsername(event.target.value);
                break;

            case 'age':
                setAge(event.target.value);
                break;                
        }
    }

    const errorHandler = ()=> {setError(null);}

    return(
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
            

            <Card className={styles.input}>

                <form onSubmit={submitHandler}>

                    <label htmlFor="username">Username</label>
                    <input id="username" value={username} type="text" onChange={changeHandler} autoComplete="off" />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" value={age} type="number" onChange={changeHandler} autoComplete="off" />

                    <Button type="submit">Add User</Button>

                </form>

            </Card>
        </div>

    );

};

export default AddUser;