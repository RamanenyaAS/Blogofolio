import '../../Common.css'
import '../Subtitle/Subtitle.css'
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Template from '../Template/Template';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

function Confirm() {
    return ( 
        <>
        <Header></Header>
            <div className="container">
                <Subtitle className="subtitle" text="Back to home"></Subtitle>
                <Title className="signIn" text="Registration Confirmation"></Title>
                <div className="template-container">
                    <Template className="template" text={`Please activate your account with the activation\n link in the email example@gmail.com. \nPlease, check your email`} />
                    <Button typeButton="button-primary"  isDisabled={false} text="Go to home"></Button>
                </div>    
            </div>
        <Footer></Footer>
        </>
    );
}

export default Confirm;