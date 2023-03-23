import React from "react";
import { useState } from "react";

const Form = (props) => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");

    const[entryError, setEntryError] = useState("");
    const[username, setUsername] = useState("");
    

    const createUser = (e) =>{
        e.preventDefault();

        const newUser = {username, email, password};
        console.log("welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");

        setHasBeenSubmitted(true);

    };

    // let thankYou = 'red'

    const formMessage = () =>{
        if(hasBeenSubmitted){
            // thankYou='green';
            return "Thank you for submitting the form!"
        } else{
            // thankYou='blue';
            return "Welcome, please submit the form";
        }
    };

    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters!")
        }else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) =>{
        setLastName(e.target.value)
        if(e.target.value.length < 2 ){
            setLastNameError("Last Name must be at least 2 characters!")
        }else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
        if(e.target.value.length < 2){
            setEmailError("Email must be at least 2 characters!");
        }else{
            setEmailError("");
        }
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 8 ){
            setPasswordError("Password must be at least 8 characters!");
        }else{
            setPasswordError("");
        }
    }

    const handleConfirmPassword =(e) =>{
        // console.log(setPassword)
        setConfirmPassword(e.target.value)
        if(e.target.value !== password){
            setConfirmPasswordError("Passwords must match!");
        }else{
            setConfirmPasswordError("")
        }
    }


    return (
        <div className="something">
            <form className="form1" onSubmit={createUser}>
                
                <div class="mb-3">
                
                    <label class="form-label">Username</label>
                    <input value={firstName} type="text" name="username" class="form-control" onChange={handleFirstName}></input>
                    {
                        firstNameError?
                        <h6 style={{color: 'red'}}>{firstNameError}</h6>:
                        ''
                    }
                        
                </div>
                <div class="mb-3">
                
                <label class="form-label">Username</label>
                <input value={lastName} type="text" name="username" class="form-control" onChange={handleLastName}></input>
                {
                    lastNameError?
                    <h6 style={{color: 'red'}}>{lastNameError}</h6>:
                    ''
                }
                    
            </div>
                <div class="mb-3">
                    <label class="form-label" >Email</label>
                    <input value={email} type="text" class="form-control" name="email" onChange={handleEmail}></input>
                    {
                        emailError?
                        <h6 style={{color: 'red'}}>{emailError}</h6>:
                        ''
                    }
                </div>
                <div class="mb-3">
                    <label class="form-label" >Password</label>
                    <input value={password} type="password" class="form-control" name="password" onChange={handlePassword}></input>
                    {
                        passwordError?
                        <h6 style={{color: 'red'}}>{passwordError}</h6>:
                        ""
                    }
                </div>
                <div class="mb-3">
                    <label class="form-label" >Confrim Password</label>
                    <input value={confirmPassword} type="password" class="form-control" name="password" onChange={handleConfirmPassword}></input>
                    {
                        confirmPasswordError?
                        <h6 style={{color: 'red'}}>{confirmPasswordError}</h6>:
                        ""
                    }
                </div>
                <div class="mb-3">
                    {
                        confirmPasswordError?
                        <input type="submit" value="Create User" disabled/>:
                        <input type="submit" value="Create User" />
                    }
                </div>
                
                {
                    hasBeenSubmitted ?
                    <h3 style={{color: 'green'}}>{formMessage()}</h3>:
                    <h3 style={{color: 'red'}}>{formMessage()}</h3>
                }
                
                {/* <h3 style={{color: thankYou}}>{formMessage()}</h3> */}
            </form>


        </div>

    )
}

export default Form