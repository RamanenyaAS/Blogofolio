import './Success.css'
import '../../Common.css'
import '../../components/Subtitle/Subtitle.css'
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import Template from '../../components/Template/Template';
import Button from '../../components/Button/Button';
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function Success() {

  const [topic] = useContext(ThemeContext);


  return (
    <>
      <div className="container">
        <Link to="/" className="link">
          <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Back to home"></Subtitle>
          <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="Success"></Title>
        </Link>
        <div className="template-container">
          <Template className={topic === 'light' ? 'template' : 'template_dark'} text={`Email confirmed.\nYour registration is now completed`} />
          <Button typeButton="button-primary" isDisabled={false} text="Go to home"></Button>
        </div>
      </div>
    </>
  );
}

export default Success;