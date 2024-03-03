import { IButton } from '../../types/interfaces';
import './Button.css';


function Button({text, isDisabled, clickFunction, typeButton}: IButton) {
    

    return ( 
        <>
        <button onClick={clickFunction} disabled={isDisabled} className={typeButton}>{text}</button>
        </>
     );
}

export default Button;