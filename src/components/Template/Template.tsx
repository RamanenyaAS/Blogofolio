import './Template.css'

function Template({text} : {text: string}) {
    return ( 
        <>
        <div className="template">{text}</div>
        </>
    );
}

export default Template;