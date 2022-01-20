import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';


function App() {
  
  const [users, setUsers] = useState([]); 

  //estado para seleccionar uno
  
  const [userSelect, setUserSelected] = useState(null);
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }, [])

  const getUsers = () =>  {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }
  
 //seleccionar users
 const selectUser = user => setUserSelected(user);

 const deselectUser = () => setUserSelected(null);
 //console.log(userSelect)


  return (
    
    <div >

      <h1 className='titulo'>Users</h1> 
      <div  className="separador">
      <div className="users">
      
      <UsersList 
         users={users}
         selectUser={selectUser}
         getUsers={getUsers}
      />
      </div>

      <div className="user">
      <UsersForm 
          getUsers={getUsers}
          userSelect={userSelect}
          deselectUser = {deselectUser}
      />

      </div>

      </div>

     

    
    
    </div>
  
  );
}

export default App;
