import '../../Common.css'
import '../../components/Subtitle/Subtitle.css'
import '../SignUpFormPage/SignUpForm.css'
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../providers/myContext';

function SingIn() {
    
   const [topic] = useContext(ThemeContext);


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
         <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Back to home"></Subtitle>
         <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="Sign In"></Title>
         <div className="signUp-container">
            <form className={topic === 'light' ? 'signUp-form' : 'signUp-form_dark'}>
              <Input title="Email" type="email" placeholder="Your email" onChange={handleEmailChange} maxLength={MAX_EMAIL_LENGTH}></Input>
              <Input title="Password" type="password" placeholder="Your password" onChange={handlePasswordChange} maxLength={MAX_PASSWORD_LENGTH}></Input>
              <Link to="/reset" className={`link ${topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'}`} >Forgot password?</Link>
              <Button typeButton="button-primary"  isDisabled={false} text="Sign In"></Button>
              <div className="subtitle-block">
                  <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text="Don’t have an account?  "></Subtitle>
                  <Link to="/signUp" className={topic === 'light' ? 'subtitle-block__link' : 'subtitle-block__link_dark'}>Sign Up</Link>
                  </div>
               </form>
         </div>
      </div>
      </>
     );
}

export default SingIn;