import { useContext, useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Subtitle from "../components/Subtitle/Subtitle";
import Title from "../components/Title/Title";
import { ThemeContext } from "../providers/myContext";
import { Link } from "react-router-dom";


function NewPasswordPage() {
    
    const [topic] = useContext(ThemeContext);


    const [passwordError, setPasswordError] = useState(""); 
 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
 
    const MAX_PASSWORD_LENGTH = 40; 
    
    const handlePasswordChange = (ev: any) => { 
        if (ev.target.value.length > MAX_PASSWORD_LENGTH) { 
           setPasswordError( 
           `Password length should be less the ${MAX_PASSWORD_LENGTH} characters.` 
           ); 
        } else { 
           setPasswordError(""); 
           setPassword(ev.target.value); 
        } 
     };
    
    const handleConfirmPasswordChange = (ev: any) => {
        setConfirmPassword(ev.target.value);
        // Проверяем, совпадает ли пароль с подтверждением
        if (ev.target.value !== password) {
            setPasswordError("Passwords do not match.");
        } else {
            setPasswordError(""); 
        }
    }



    return ( 
        <>
        <div className="container">
            <Link to="/" className="subtitle-block">
                <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Back to home"></Subtitle>
            </Link>
            <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="New password"></Title>
                <form className={topic === 'light' ? 'signUp-form' : 'signUp-form_dark'}>
                    <Input title="Password" type="password" placeholder="Your password" onChange={handlePasswordChange} maxLength={MAX_PASSWORD_LENGTH}></Input>
                    <Input title="Confirm password" type="password" placeholder="Confirm password" onChange={handleConfirmPasswordChange} maxLength={MAX_PASSWORD_LENGTH}></Input>
                    <Button typeButton="button-primary"  isDisabled={false} text="Set password"></Button>
                </form>
        </div>
        </>
    );
    
}

export default NewPasswordPage;