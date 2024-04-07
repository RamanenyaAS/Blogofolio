import { useContext } from 'react';
import '../Common.css'
import Title from '../components/Title/Title';
import Error404 from '../image/Error404.svg'
import { ThemeContext } from '../providers/myContext';


function ErrorPage() {

    const [topic] = useContext(ThemeContext);
    
    return ( 
        <>
            <div className="container">
                <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text='Error: 404 Not Found'></Title>
                <img src={Error404} alt="ERROR 404" style={{width: "100%", height: "600px"}} />
            </div>
        </>
    );
}

export default ErrorPage;