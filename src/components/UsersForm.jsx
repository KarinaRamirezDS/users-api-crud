import axios from 'axios';
import React, {useState, useEffect} from 'react'

const UsersForm = ({getUsers, userSelect, deselectUser}) => {


    //estados
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //useEffect detectar cada que cambia nuestro estado
    useEffect(() => {
        if(userSelect !== null){
            //SE SETEA EL VALOR 
            setName(userSelect.first_name);
            setLastName(userSelect.last_name);
            setBirthday(userSelect.birthday);
            setEmail(userSelect.email);
            setPassword(userSelect.password);
        }else{
            reset();
        }
        //console.log("el usuario cambio")
    }, [userSelect])

    const submit = e => {
        e.preventDefault();
        const user = {
            first_name: name,
            last_name: lastName,
            birthday,
            email,
            password
        }

        if(userSelect){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, user)
                .then(() => getUsers());
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers());
        }
        reset();
        //console.log(user)
    }

    const reset = () => {
        setName("");
        setLastName("");
        setBirthday("");
        setEmail("");
        setPassword("");
    }


    return (
        <div className='container'>
            <div className='title'> New Users </div>
        <form onSubmit={submit}>
            <div className="user-details">
            <div className="input-box">
                <label className='details' htmlFor='name'>Name</label>
                <input type="text" id='name' value={name} onChange={e => setName(e.target.value)}  placeholder='Examplo'/>
            </div>
            <div className="input-box">
                <label htmlFor='lastName'>LastName</label>
                <input type="text" id='lastName'  value={lastName} onChange={e => setLastName(e.target.value)}  placeholder='Examplo'/>
            </div>
            <div className="input-box">
                <label htmlFor='birthday'>Birthday</label>
                <input type="date" id='birthday'  value={birthday} onChange={e => setBirthday(e.target.value)}  />
            </div>
            <div className="input-box">
                <label htmlFor='email'>Email</label>
                <input type="email" id='email'  value={email} onChange={e => setEmail(e.target.value)}  placeholder='Examplo@examplo.com'/>
            </div>
            <div className="input-box">
                <label htmlFor='password'>Password</label>
                <input type="text" id='password'  value={password} onChange={e => setPassword(e.target.value)}  placeholder='**********'/>
            </div>
            <div className="button">
                <button>Register</button>
               
             
            </div>
            <div className="button">
                
                <button type='button' onClick={deselectUser}>Deseleccionar</button>
             
            </div>
            </div>
        </form>
        </div>
     
    )
}

export default UsersForm
