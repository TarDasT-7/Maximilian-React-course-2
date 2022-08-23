import React , {useState} from "react";

import AddUser from "./components/Users/add-user/AddUser";
import UserList from "./components/Users/list-user/UserList";

const App =()=> {
  
  const [usersList , setUsersList] = useState([])

  const addUserHandler = (uName , uAge) => {

    setUsersList((prevUserList)=>{
      return [...prevUserList , {id:Math.random().toString(),name:uName,age:uAge}];
    })

  }

  return (
    <div>
      
      <AddUser onAddUser={addUserHandler} />

      <UserList users={usersList}/>

    </div>
  );
}

export default App;
