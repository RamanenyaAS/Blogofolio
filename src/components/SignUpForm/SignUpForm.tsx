import '../../Common.css'
import '../Subtitle/Subtitle.css'
import './SignUpForm.css'
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/Button';

function SignUp() {
    return ( 
        <>
        <Header></Header>
        <div className="container">
            <Subtitle className="subtitle" text="Back to home"></Subtitle>
            <Title className="signIn" text="Sign Up"></Title>
            <div className="signUp-container">
                <form className="signUp-form">
                    <Input title="Name" type="name" placeholder="Your name" autocomplete= "name"></Input>
                    <Input title="Email" type="email" placeholder="Your email"></Input>
                    <Input title="Password" type="password" placeholder="Your password"></Input>
                    <Input title="Confirm password" type="password" placeholder="Confirm password"></Input>
                    <Button typeButton="button-primary"  isDisabled={false} text="Sign Up"></Button>
                    <div className="subtitle-block">
                        <Subtitle className="subtitle_grey" text="Already have an account?  "></Subtitle>
                        <a className="subtitle-block__link" href="">Sign In</a>
                    </div>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default SignUp;