import React , {useState , useRef} from "react";
import styles from './AddUser.module.scss';

import Card from "../../UI/card/Card";
import Button from "../../UI/button/Button";
import ErrorModal from "../../UI/error/ErrorModal";
import Wrapper from "../../helpers/wrapper/Wrapper";

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [error , setError] = useState();


    const submitHandler = (event) => {
        event.preventDefault();

        const username = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        

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

        props.onAddUser(username , age);
        nameInputRef.current.value = '';
        ageInputRef.current.value  = '';
    }

    const errorHandler = ()=> {setError(null);}

    return(
        <Wrapper>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
            
            <Card className={styles.input}>

                <form onSubmit={submitHandler}>

                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} autoComplete="off" />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} autoComplete="off" />

                    <Button type="submit">Add User</Button>

                </form>

            </Card>
        </Wrapper>

    );

};

export default AddUser;