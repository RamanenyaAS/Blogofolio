import './Tabs.css'
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';

function Tabs() {

    const [topic] = useContext(ThemeContext);

    return ( 
        <>
            <div className={`tabs-container ${`tabs-container_${topic}`}`}>
                <div className={`tabs-container__all ${`tabs-container__all_${topic}`}`}>All</div>
                <div className={`tabs-container__favorites ${`tabs-container__favorites_${topic}`}`}>My favorites</div>
                <div className={`tabs-container__popular ${`tabs-container__popular_${topic}`}`}>Popular</div>
            </div>
        </>
    );
}

export default Tabs;