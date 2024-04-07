import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconLikeDark from '../../image/IconLikeDark.svg'
import IconDislike from '../../image/IconDislike.svg';
import IconDislikeDark from '../../image/IconDislikeDark.svg';
import IconMore from '../../image/IconMore.svg';
import IconMoreDark from '../../image/IconMoreDark.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import IconFavoritesDark from '../../image/IconFavoritesDark.svg';
import { IPost } from '../../types/interfaces';
// import {posts} from '../../data'
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';


function PostM({post} : {post: IPost}) {
    
    const [topic] = useContext(ThemeContext);
    

    return ( 
        <>
        <div className="postM-container">
            <img className="postM-image" src={post.image} alt="Cosmo" />   
            <div className="post-left__date">{post.date}</div>
            <div className={topic === 'light' ? 'postM-left__title' : 'postM-left__title_dark'}>{post.title}</div>
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

export default PostM;