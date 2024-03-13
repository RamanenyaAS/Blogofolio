import Subtitle from '../Subtitle/Subtitle';
import './Textarea.css'

function Textarea() {
    return ( 
        <>
            <Subtitle className="subtitle subtitle_black" text="Title"></Subtitle>
            <textarea className="textarea" cols={30} rows={10} placeholder="Add your text"></textarea>
        </>
     );
}

export default Textarea;