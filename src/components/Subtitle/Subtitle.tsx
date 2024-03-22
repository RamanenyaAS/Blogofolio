import { Link } from 'react-router-dom';
import './Subtitle.css'
import '../../Common.css'

function Subtitle({text, className} : {text:string, className:string}) {
    return ( 
        <>
            <Link to="/" className="link">
                <div className={className}>{text}</div>
            </Link>
        </>
     );
}

export default Subtitle;