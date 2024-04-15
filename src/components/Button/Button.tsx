import { IButton } from '../../types/interfaces';
import './Button.css';


function Button({ text, isDisabled, typeButton }: IButton) {
  return (
    <>
      <button disabled={isDisabled} className={typeButton}>{text}</button>
    </>
  );
}

export default Button;