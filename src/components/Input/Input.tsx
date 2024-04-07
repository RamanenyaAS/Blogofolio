import './Input.css'
import { useContext, useState } from "react";
import { IInput } from '../../types/interfaces';
import { ThemeContext } from '../../providers/myContext';

function Input({title, type, placeholder, autocomplete, onChange, maxLength} : IInput) {
// можно ли сделать без передачи maxLength в пропсы
    const [hasError, setHasError] = useState(false);
    const [topic] = useContext(ThemeContext)

    function handleChange(e: any): void {
        if (onChange) {
            onChange(e);
        }
        if(e.target.value.length > maxLength){
            setHasError(true)
        } else {
            setHasError(false)
        }
    }
    

    return ( 
        <>
            <div className={topic === 'light' ? 'input__title' : 'input__title_dark'}>{title}</div>
            <input className="input" type={type} placeholder={placeholder} autoComplete={autocomplete} onChange={handleChange}  style={{border: hasError ? "1px solid red" : "none"}}/>
        </>
     );
}

export default Input;