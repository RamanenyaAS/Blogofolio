import '../../Common.css'
import '../Subtitle/Subtitle.css'
import '../SignUpForm/SignUpForm.css'
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SingIn() {
    
    const [emailError, setEmailError] = useState(""); 
    const [passwordError, setPasswordError] = useState(""); 

    const [password, setPassword] = useState(""); 
    const [email, setEmail] = useState(""); 
    
    const MAX_EMAIL_LENGTH = 30; 
    const MAX_PASSWORD_LENGTH = 40; 

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

    return ( 
        <>
        <div className="container">
            <Subtitle className="subtitle" text="Back to home"></Subtitle>
            <Title className="signIn" text="Sign In"></Title>
            <div className="signUp-container">
                <form className="signUp-form">
                    <Input title="Email" type="email" placeholder="Your email" onChange={handleEmailChange} maxLength={MAX_EMAIL_LENGTH}></Input>
                    <Input title="Password" type="password" placeholder="Your password" onChange={handlePasswordChange} maxLength={MAX_PASSWORD_LENGTH}></Input>
                    <Subtitle className="subtitle" text="Forgot password?"></Subtitle>
                    <Button typeButton="button-primary"  isDisabled={false} text="Sign In"></Button>
                    <div className="subtitle-block">
                        <Subtitle className="subtitle_grey" text="Don’t have an account?  "></Subtitle>
                        <Link to="/signUp" className="subtitle-block__link">Sign Up</Link>
                        {/* <a className="subtitle-block__link" href="">Sign Up</a> */}
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}

export default SingIn;