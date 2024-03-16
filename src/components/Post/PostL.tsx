import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconPostL from '../../image/IconPostL.svg';
import IconMore from '../../image/IconMore.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import {posts} from '../../data'


function PostL() {
    
    const [{id, image, text, date, lesson_num, title, description, author}] = posts
    return ( 
        <>
        <div className="post-container">
            <div className="post-block">
            <div className="postL-left">
                <div className="postL-left__date">{posts[0].date}</div>
                <div className="postL-left__title">{posts[0].title}</div>
                <div className="postL-left__text">{posts[0].text}</div>     
            </div>
            <div className="postL-right">
                <img src={IconPostL} alt="Cosmo" />
                <img src={IconFavorites} alt="Favorites" />
                <img src={IconMore} alt="More" />
            </div>
        </div>
        <div className="post-block">
        <img src={IconLike} alt="Like" />
        <img src={IconDislike} alt="Dislike" />
    </div>
        </div>
    </>
    );
}

export default PostL;