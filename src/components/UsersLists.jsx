import React from 'react';
import axios from 'axios';

const UsersList = ({users, selectUser, getUsers}) => {
    const deleteUsers = id => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
          .then(() => getUsers());
      }
    return (
       <ul>
           {
               users.map(user => (
                   <li  key={user.id}><i className="fas fa-user"></i>  
                      <strong> Usuario: {user.first_name} {user.last_name} </strong>
                      <ul>
                       
                          <li><i className="fas fa-birthday-cake" ></i> Birthday: {user.birthday}</li>
                          <li><i className="fas fa-envelope"></i> Email: {user.email}</li>
                          <li><i className="fas fa-key"></i> Password: {user.password}</li>
                          <button onClick={() => selectUser(user)}><i className="fas fa-edit" style={{ color: 'green' }}></i></button>
                          <button onClick={() => deleteUsers(user.id)}><i className="fas fa-trash-alt" style={{ color: 'red' }} size="6x"></i></button>
                      </ul>
                   </li>
               ))
           }
       </ul>
    )
}

export default UsersList
