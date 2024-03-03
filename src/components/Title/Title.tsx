import './Title.css'

function Title({username}: {username: string}) {
    
    let initial = username.split(" ").reduce(((res, item) => res + item[0]), "");
    
    return ( 
        <>
            <div className='container'>
                <div className="container__initial">{initial}</div>
                <div className="container__name">{username}</div>
            </div>
        </>
    );
}

export default Title;