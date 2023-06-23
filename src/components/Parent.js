import React, { useState } from 'react'

const Parent = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [credentials,setCredentials] = useState({name:"",password:""})

    const Login = () => {
       if(credentials.name !== "" && credentials.password != ""){
        setIsLoggedIn(true);
       } 
    }

    return <div className='parent'>
        <h1>Parent Component</h1>
        {
            (!isLoggedIn)
            ?<div className='child'>
                <label>Username:</label>
                <input onChange={(e)=>setCredentials({...credentials,name:e.target.value})} type='text'/>
                <br/><br/>
                <label>Password:</label>
                <input onChange={(e)=>setCredentials({...credentials,password:e.target.value})} type='password'/>
                <br/><br/>
                <button onClick={Login}>Login</button>
            </div>
            :<div className='child'>
                You are logged in!
            </div>
        }
    </div>
}

export default Parent