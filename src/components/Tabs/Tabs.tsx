import './Tabs.css'
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveTab } from '../../slice/blogofolioSlice'

function Tabs() {

  const [topic] = useContext(ThemeContext);
  const dispatch = useDispatch();
  const selectedTab = useSelector((state: any) => state.selectedTab)

  const changeTab = (value: string) => {
    dispatch(changeActiveTab(value))
  }

  return (
    <>
      <div className={`tabs-container ${`tabs-container_${topic}`}`}>
        <div onClick={() => changeTab("All")} className={`tabs-container__all ${`tabs-container__all_${topic}`} ${selectedTab === "All" ? `active_${topic}` : "inactive"}`}>All</div>
        <div onClick={() => changeTab("Favorites")} className={`tabs-container__favorites ${`tabs-container__favorites_${topic}`} ${selectedTab === "Favorites" ? `active_${topic}` : "inactive"}`}>My favorites</div>
        <div onClick={() => changeTab("Popular")} className={`tabs-container__popular ${`tabs-container__popular_${topic}`} ${selectedTab === "Popular" ? `active_${topic}` : "inactive"} `}>Popular</div>
      </div>
    </>
  );
}

export default Tabs;