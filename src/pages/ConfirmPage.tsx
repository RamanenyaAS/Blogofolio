import '../Common.css'
import '../components/Subtitle/Subtitle.css'
import Subtitle from '../components/Subtitle/Subtitle';
import Title from '../components/Title/Title';
import Template from '../components/Template/Template';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import { ThemeContext } from '../providers/myContext';
import { useContext } from 'react';


function Confirm() {


    const [topic] = useContext(ThemeContext);


    return ( 
        <>
            <div className="container">
                <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Back to home"></Subtitle>
                <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="Registration Confirmation"></Title>
                <div className="template-container">
                    <Template className={topic === 'light' ? 'template' : 'template_dark'} text={`Please activate your account with the activation\n link in the email example@gmail.com. \nPlease, check your email`} />
                    <Button typeButton="button-primary"  isDisabled={false} text="Go to home"></Button>
                </div>    
            </div>
        </>
    );
}

export default Confirm;