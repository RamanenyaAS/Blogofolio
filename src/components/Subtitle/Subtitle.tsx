import './Subtitle.css'

function Subtitle({text, className} : {text:string, className:string}) {
    return ( 
        <>
            <div className={className}>{text}</div>
        </>
     );
}

export default Subtitle;