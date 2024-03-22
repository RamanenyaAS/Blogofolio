import '../Common.css'
import Title from '../components/Title/Title';
import Error404 from '../image/Error404.svg'

function ErrorPage() {
    return ( 
        <>
            <div className="container">
                <Title className='signIn' text='Error: 404 Not Found'></Title>
                <img src={Error404} alt="ERROR 404" style={{width: "100%", height: "600px"}} />
            </div>
        </>
    );
}

export default ErrorPage;