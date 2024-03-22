import './Header.css'
import User from '../User/User';
import IconSearch from '../../image/IconSearch.svg'
import IconBurger from '../../image/IconBurger.svg'
import IconUser from '../../image/IconUser.svg'
import IconClose from '../../image/IconClose.svg'

// выпадающая часть через useState

function Header() {
    return ( 
        <header className="header">
            <div className="header-block">
                {/* <img className='header-close' src={IconClose} alt="Close" /> */}
                <img className="header-burger" src={IconBurger} alt="Burger" />
            </div>
            <div className="header-block">
                <img className="header-search" src={IconSearch} alt="Search" />
                <User username="Artem Malkin"></User>
                {/* <img className="header-user" src={IconUser} alt="User"></img> */}
            </div>
        </header>
     );
}

export default Header;