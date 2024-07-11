import React, { useState } from "react";
import ReducerComponent from "./ReducerComponent";


function FormComponent() {
    const [name,setName] = useState('')
    const[password,setPassword] = useState('')
    const handleClick = (e) => {
        e.preventDefault();
        console.log("hi")
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
        
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <>
        <p>Form Component</p>
        <form>
        <label>Username:</label>
        <input type="text" onChange={handleChange} value={name}/> <br></br>
        <br></br>
        <label>Password:</label>
        <input type ="text" onChange={handlePasswordChange} value={password}/>
        <br></br> <br></br>
        <button onClick={handleClick}>Click here</button>
        </form>
        <ReducerComponent />
        </>
    )

}
export default FormComponent;