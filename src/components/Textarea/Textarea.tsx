import './Textarea.css'

function Textarea() {
    return ( 
        <>
            <div className="textarea-title">Text</div>
            <textarea className="textarea" cols={30} rows={10} placeholder="Add your text"></textarea>
        </>
     );
}

export default Textarea;