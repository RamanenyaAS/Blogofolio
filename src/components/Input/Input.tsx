import './Input.css'
import { useState } from "react";


function Input({title, type, placeholder, autocomplete} : {title: string, type: string, placeholder: string, autocomplete?: string}) {

    const [hasError, setHasError] = useState(false);

    function handleChange(e: any): void {
        if(e.target.value.length > 5){
            setHasError(true)
        } else {
            setHasError(false)
        }
    }

    return ( 
        <>
            <div className="input__title">{title}</div>
            <input className="input" type={type} placeholder={placeholder} autoComplete={autocomplete} onChange={(e) => handleChange(e)}  style={{border: hasError ? "1px solid red" : "none"}}/>
        </>
     );
}

export default Input;