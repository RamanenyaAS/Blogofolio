import './Header.css'
import User from '../User/User';
import IconSearch from '../../image/IconSearch.svg'
import IconBurger from '../../image/IconBurger.svg'
import IconUser from '../../image/IconUser.svg'
import IconClose from '../../image/IconClose.svg'
import IconMoon from '../../image/IconMoon.svg'
import IconSun from '../../image/IconSun.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


function Header() {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
    };





    return ( 
        <header className="header">
            <div className="header-block">
                {/* <img className='header-close' src={IconClose} alt="Close" /> */}
                <img className="header-burger"  onClick={toggleDropdown} src={IconBurger} alt="Burger" />
                {isOpen && (
        <div className="dropdown-block">
          <ul>
            <User username="Artem Malkin"></User>
            <div className="header__navigation">
              <Link to="/" className="link">Home</Link>
            </div>
            <div className="header__navigation">
              <Link to="/add" className="link">Add post</Link>
            </div>
            <div className="theme-block">
              <img className="theme-block__image" src={IconSun} alt="Icon Sun"/>
              <img className="theme-block__image" src={IconMoon} alt="Icon Moon" />
            </div>
            <Button  typeButton="button-secondary2"  isDisabled={false} text="Log out"></Button>
          </ul>
        </div>
      )}
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