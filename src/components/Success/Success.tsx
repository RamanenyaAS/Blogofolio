import './Success.css'
import '../../Common.css'
import '../Subtitle/Subtitle.css'
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Template from '../Template/Template';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

function Success() {
    return ( 
        <>
            <div className="container">
                <Subtitle className="subtitle" text="Back to home"></Subtitle>
                <Title className="signIn" text="Success"></Title>
                <div className="template-container">
                    <Template className="template" text={`Email confirmed.\nYour registration is now completed`} />
                    <Button typeButton="button-primary"  isDisabled={false} text="Go to home"></Button>
                </div>    
            </div>
        </>
     );
}

export default Success;