import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Subtitle from "../components/Subtitle/Subtitle";
import Title from "../components/Title/Title";
import { useState } from "react";

function ResetPage() {
    
     
    const [emailError, setEmailError] = useState(""); 

    const [email, setEmail] = useState(""); 
    
    const MAX_EMAIL_LENGTH = 30; 

    const handleEmailChange = (ev: any) => { 
        if (ev.target.value.length > MAX_EMAIL_LENGTH) { 
           setEmailError( 
           `Email length should be less the ${MAX_EMAIL_LENGTH} characters.`
           ); 
        } else { 
           setEmailError(""); 
           setEmail(ev.target.value); 
        } 
    }; 


    return ( 
        <>
            <div className="container">
            <Subtitle className="subtitle" text="Back to home"></Subtitle>
            <Title className="signIn" text="Reset password"></Title>
                <form className="signUp-form">
                    <div className="reset-info">You will receive an email <b>example@gmail.com</b> with a link to reset your password!</div>
                    <Input title="Email" type="email" placeholder="example@gmail.com" onChange={handleEmailChange} maxLength={MAX_EMAIL_LENGTH}></Input>
                    <Button typeButton="button-primary"  isDisabled={false} text="Go to home"></Button>
                </form>
        </div>
        </>
);
}

export default ResetPage;