import Subtitle from '../Subtitle/Subtitle';
import './Textarea.css'

function Textarea({children } : {children : string}) {
    return ( 
        <>
            <div className="textarea__title">{children }</div>
            <textarea className="textarea" cols={30} rows={10} placeholder="Add your text"></textarea>
        </>
     );
}

export default Textarea;