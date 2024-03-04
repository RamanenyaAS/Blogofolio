import './Input.css'
import { useState } from "react";


function Input() {

    const [hasError, setHasError] = useState(false);

    function handleChange(e: any): void {
        if(e.target.value.length > 5){
            setHasError(true)
        } else {
            setHasError(false)
        }
    }

    return ( 
        <div className="input-block">
            <div className="input-block__inputs">INPUTS</div>
            <div className="input-block__title">Title</div>
            <input className="input-block__input" type="text" placeholder="Placeholder" onChange={(e) => handleChange(e)}  style={{border: hasError ? "1px solid red" : "none"}}/>
        </div>
     );
}

export default Input;