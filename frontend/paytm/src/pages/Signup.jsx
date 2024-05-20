
import { useState } from "react";
import { Heading } from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import { InputBox } from "../components/InputBox";
import {Button} from "../components/Button";
import { useNavigate } from "react-router-dom"
import { ButtonWarning } from "../components/ButtonWarning";
import axios from "axios"


export function SignUp( ){
    const [firstName,setFirstname] = useState('')
    const [lastName,setLastname] = useState('')
    const [username,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    return (
        <div className="bg-slate-300 h-screen flex justify-center border-solid border-slate-50">
            <div className="flex flex-col justify-center">
                <Heading label={"Signup"}></Heading>
                <SubHeading label={"enter your information to create account "}></SubHeading>
                <InputBox label={"FirstName:"} placeholder={"john "} onChange={
                    (e) => {
                        setFirstname(e.target.value)
                    }
                }></InputBox>
                 <InputBox label={"LastName:"} placeholder={"doe "} onChange={
                    (e) => {
                        setLastname(e.target.value)
                    }
                }></InputBox>
                 <InputBox label={"Email:"} placeholder={"qwert@gmail.com "} onChange={
                    (e) => {
                        setEmail(e.target.value)
                    }
                }></InputBox>
                 <InputBox label={"Password:"} placeholder={"12345678 "} onChange={
                    (e) => {
                        setPassword(e.target.value)
                    }
                }></InputBox>
                <div className="pt-4">
                <Button label={"Sign Up"} onClick={async () => {
                        const data = { username, firstName, lastName, password };

                        try {
                            const response = await axios.post('http://localhost:3000/api/v1/user/signup', data, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });

                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard");
                        } catch (error) {
                            console.error("Error during sign up:", error);
                        }
                    }}></Button>

                </div>
                <ButtonWarning label={"Already have an account?"} buttonText={"Sign in "} to={"/signin"}></ButtonWarning>
               
               
            </div>
        </div>

    )
}
