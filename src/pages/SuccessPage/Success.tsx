import './Success.css'
import '../../Common.css'
import '../../components/Subtitle/Subtitle.css'
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import Template from '../../components/Template/Template';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

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