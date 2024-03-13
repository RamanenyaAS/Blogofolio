import './Title.css'

function Title({text} : {text:string}) {
    return ( 
        <>
        <div className="signIn">{text}</div>
        </>
    );
}

export default Title;