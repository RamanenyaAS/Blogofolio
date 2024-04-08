import '../../Common.css'
import '../../components/Subtitle/Subtitle.css'
import './SignUpForm.css'
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../providers/myContext';

function SignUp() {
    
   const [topic] = useContext(ThemeContext);

   const [emailError, setEmailError] = useState(""); 
   const [passwordError, setPasswordError] = useState(""); 
   const [userNameError, setUserNameError] = useState(""); 

   const [userName, setUserName] = useState(""); 
   const [password, setPassword] = useState(""); 
   const [confirmPassword, setConfirmPassword] = useState(""); 
   const [email, setEmail] = useState(""); 

   const MAX_EMAIL_LENGTH = 30; 
   const MAX_PASSWORD_LENGTH = 40; 
   const MAX_NAME_LENGTH = 20; 


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

   const handleUserNameChange = (ev: any) => { 
      if (ev.target.value.length > MAX_NAME_LENGTH) { 
         setUserNameError( 
         `Name length should be less the ${MAX_NAME_LENGTH} characters.` 
         ); 
      } else { 
         setUserNameError(""); 
         setUserName(ev.target.value); 
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

   const handleConfirmPasswordChange = (ev: any) => {
      setConfirmPassword(ev.target.value);
      // Проверяем, совпадает ли пароль с подтверждением
      if (ev.target.value !== password) {
         setPasswordError("Passwords do not match.");
      } else {
         setPasswordError(""); 
      }
   };

    
    return ( 
        <>
        <div className="container">
            <Link to="/" className="subtitle-block">
               <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Back to home"></Subtitle>
            </Link>
            <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="Sign Up"></Title>
            <div className="signUp-container">
                <form className={topic === 'light' ? 'signUp-form' : 'signUp-form_dark'}>
                    <Input title="Name" type="name" placeholder="Your name" autocomplete= "name" onChange={handleUserNameChange} maxLength={MAX_NAME_LENGTH}></Input>
                    <Input title="Email" type="email" placeholder="Your email" onChange={handleEmailChange} maxLength={MAX_EMAIL_LENGTH}></Input>
                    <Input title="Password" type="password" placeholder="Your password" onChange={handlePasswordChange} maxLength={MAX_PASSWORD_LENGTH}></Input>
                    <Input title="Confirm password" type="password" placeholder="Confirm password" onChange={handleConfirmPasswordChange} maxLength={MAX_PASSWORD_LENGTH}></Input>
                    <Button typeButton="button-primary"  isDisabled={false} text="Sign Up"></Button>
                    <div className="subtitle-block subtitle-block_center">
                        <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text="Already have an account?  "></Subtitle>
                        <Link to= "/signIn" className={topic === 'light' ? 'subtitle-block__link' : 'subtitle-block__link_dark'}>Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default SignUp;