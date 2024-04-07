import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconLikeDark from '../../image/IconLikeDark.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconDislikeDark from '../../image/IconDislikeDark.svg';
import IconPostL from '../../image/IconPostL.svg';
import IconMore from '../../image/IconMore.svg';
import IconMoreDark from '../../image/IconMoreDark.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import IconFavoritesDark from '../../image/IconFavoritesDark.svg';
import {posts} from '../../data'
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';


function PostL() {
    
    const [{id, image, text, date, lesson_num, title, description, author}] = posts;
    const [topic] = useContext(ThemeContext);

    

    return ( 
        <>
        <div className="post-container">
            <div className="post-block">
                <div className="postL-left">
                    <div className="postL-left__date">{posts[0].date}</div>
                    <div className={topic === 'light' ? 'postL-left__title' : 'postL-left__title_dark'}>{posts[0].title}</div>
                    <div className="postL-left__text">{posts[0].text.slice(0,400)}</div>     
                </div>
                <div className="postL-right">
                   <img src={IconPostL} alt="Cosmo" />   
                </div>
            </div>
            <div className="post-block">
                <div className="bottom-left">
                    {topic === "light" ? <img className="post-icon" src={IconLike} alt="Icon Like"/> : <img className="post-icon" src={IconLikeDark} alt="Icon Like"/> }
                    {topic === "light" ? <img className="post-icon" src={IconDislike} alt="Icon Dislike"/> : <img className="post-icon" src={IconDislikeDark} alt="Icon Dislike"/> }
                </div>
                <div className="bottom-right">
                    {topic === "light" ? <img className="post-icon" src={IconFavorites} alt="Icon Favorites"/> : <img className="post-icon" src={IconFavoritesDark} alt="Icon Favorites"/> }
                    {topic === "light" ? <img className="post-icon" src={IconMore} alt="Icon More"/> : <img className="post-icon" src={IconMoreDark} alt="Icon More"/> }
                </div>
            </div>
        </div>
    </>
    );
}

export default PostL;