import './Footer.css'
import '../../Common.css'
import { useContext } from 'react';
import { ThemeContext } from '../../providers/myContext';

function Footer() {

    const [topic] = useContext(ThemeContext)

    return ( 
        <footer className="footer">
            <div className="footer-container">
                <div className={topic === 'light' ? 'footer-block' : 'footer-block_dark'}>
                    <div className="footer-block__caption">©2022 Blogfolio</div>
                    <div className="footer-block__caption">All rights reserved</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;