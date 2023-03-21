import React from "react";
import { useState } from "react";

const Form = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    return (
        <div className="something">
            <form className="form1">
                <div class="mb-3">
                    <label class="form-label">First Name</label>
                    <input type="text" name="firstName" class="form-control" onChange={handleFirstName}></input>
                        
                </div>
                <div class="mb-3">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control" name="lastName" onChange={handleLastName}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label" >Email</label>
                    <input type="text" class="form-control" name="email" onChange={handleEmail}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label" >Password</label>
                    <input type="password" class="form-control" name="password" onChange={handlePassword}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label" >Confirm Password</label>
                    <input type="password" class="form-control" name="confirmPassword" onChange={handleConfirmPassword}></input>
                </div>
            </form>

            <h1>Here</h1>
            <p>First Name:  {firstName}</p>
            <p>Last Name:  {lastName}</p>
            <p>Email:  {email}</p>
            <p>Password:  {password}</p>
            <p>Confirm Password:  {confirmPassword}</p>
        </div>

    )
}

export default Form