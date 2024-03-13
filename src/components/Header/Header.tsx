import './Header.css'
import User from '../User/User';
import IconSearch from '../../image/IconSearch.svg'
import IconBurger from '../../image/IconBurger.svg'

function Header() {
    return ( 
        <header className="header">
            {/* <div className="header-left"> */}
                <img className="header-burger" src={IconBurger} alt="Burger" />
            {/* </div> */}
            <div className="header-block">
                <img className="header-search" src={IconSearch} alt="Search" />
                <User username="Artem Malkin"></User>
            </div>
        </header>
     );
}

export default Header;