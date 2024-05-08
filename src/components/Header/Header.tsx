import './Header.css'
import User from '../User/User';
import IconSearch from '../../image/IconSearch.svg'
import IconBurger from '../../image/IconBurger.svg'
import IconUser from '../../image/IconUser.svg'
import IconClose from '../../image/IconClose.svg'
import IconMoon from '../../image/IconMoon.svg'
import IconMoonActive from '../../image/IconMoonActive.svg'
import IconSunActive from '../../image/IconSunActive.svg'
import IconSun from '../../image/IconSun.svg'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { ThemeContext } from '../../providers/myContext';
import { useDispatch } from 'react-redux';
import { searchResult } from '../../slice/blogofolioSlice';


function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchText,setSearchText] = useState("");
  const [topic, setTopic] = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch()<any>;

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleTopic = () => {
    setTopic(topic === "light" ? "dark" : "light");
  }
  const darkTopic = () => {
    setTopic("dark");
  }
  const lightTopic = () => {
    setTopic("light");
  }
  
  const changeSearchText = (event: any) => {
    setSearchText(event.target.value);
  }
  const enter =(event: any) => {
    if(event.key === "Enter"){
      navigate("/search");
      dispatch(searchResult(searchText))
    }
  }





  return (
    <header data-testid="cypress-header" className="header">
      <div className="header-block">
        {isOpen === false ? <img data-testid="cypress-header-burger" className="header-burger" onClick={toggleDropdown} src={IconBurger} alt="Burger" /> : <img data-testid="cypress-header-burger" className="header-close" onClick={toggleDropdown} src={IconClose} alt="Cross" />}
        {isOpen && (
          <div className="dropdown-block">
            <ul className="dropdown-block-list">
              <User username="Artem Malkin"></User>
              <div className="header__navigation">
                <Link to="/" className="link">Home</Link>
              </div>
              <div className="header__navigation">
                <Link data-testid="cypress-header-burger-add-post-button" to="/add" className="link">Add post</Link>
              </div>
              <div className="theme-block">
                {topic === "light" ? <img className="theme-block__image" src={IconSunActive} alt="Icon Sun Active" /> : <img className="theme-block__image" src={IconSun} alt="Icon Sun" onClick={lightTopic} />}
                {topic === "light" ? <img className="theme-block__image" src={IconMoon} alt="Icon Moon" onClick={darkTopic} /> : <img className="theme-block__image" src={IconMoonActive} alt="Icon Moon Active" />}
              </div>
              <Button typeButton="button-secondary2" isDisabled={false} text="Log out"></Button>
            </ul>
          </div>
        )}
      </div>
      {isVisible && (
        <input className="header-search__input" type="text" value={searchText} onChange={(e) => changeSearchText(e)} onKeyDown={(e) => enter(e)} placeholder="Search..." />
      )}
      <div className="header-block">
        <img className="header-search" src={IconSearch} alt="Search" onClick={toggleVisible} />
        <User username="Artem Malkin"></User>
        {/* <img className="header-user" src={IconUser} alt="User"></img> */}
      </div>
    </header>
  );
}

export default Header;