import './Input.css'
import { useState } from "react";
import { IInput } from '../../types/interfaces';

function Input({title, type, placeholder, autocomplete, onChange, maxLength} : IInput) {
// можно ли сделать без передачи maxLength в пропсы
    const [hasError, setHasError] = useState(false);

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
            <div className="input__title">{title}</div>
            <input className="input" type={type} placeholder={placeholder} autoComplete={autocomplete} onChange={handleChange}  style={{border: hasError ? "1px solid red" : "none"}}/>
        </>
     );
}

export default Input;