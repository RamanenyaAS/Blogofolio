import '../../Common.css'
import '../Subtitle/Subtitle.css'
import '../SignUpForm/SignUpForm.css'
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/Button';

function SingIn() {
    return ( 
        <>
        <Header></Header>
        <div className="container">
            <Subtitle className="subtitle" text="Back to home"></Subtitle>
            <Title className="signIn" text="Sign In"></Title>
            <div className="signUp-container">
                <form className="signUp-form">
                    <Input title="Email" type="email" placeholder="Your email"></Input>
                    <Input title="Password" type="password" placeholder="Your password"></Input>
                    <Subtitle className="subtitle" text="Forgot password?"></Subtitle>
                    <Button typeButton="button-primary"  isDisabled={false} text="Sign In"></Button>
                    <div className="subtitle-block">
                        <Subtitle className="subtitle_grey" text="Don’t have an account?  "></Subtitle>
                        <a className="subtitle-block__link" href="">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
     );
}

export default SingIn;