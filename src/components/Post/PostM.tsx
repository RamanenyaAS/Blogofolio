import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconMore from '../../image/IconMore.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import {posts} from '../../data'

function PostM() {
    return ( 
        <>
        <div className="postM-container">
            <img className="post-image" src={posts[1].image} alt="Cosmo" />   
            <div className="post-left__date">{posts[1].date}</div>
            <div className="postM-left__title">{posts[1].title}</div>
            <div className="post-block">
                <div className="bottom-left">
                    <img className="post-icon" src={IconLike} alt="Like" />
                    <img className="post-icon" src={IconDislike} alt="Dislike" />
                </div>
                <div className="bottom-right">
                    <img className="post-icon" src={IconFavorites} alt="Favorites" />
                    <img className="post-icon" src={IconMore} alt="More" />
                </div>
            </div>
        </div>   
        </>
     );
}

export default PostM;