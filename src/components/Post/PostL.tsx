import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconPostL from '../../image/IconPostL.svg';
import IconMore from '../../image/IconMore.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import {posts} from '../../data'


function PostL() {
    
    const [{id, image, text, date, lesson_num, title, description, author}] = posts;
    return ( 
        <>
        <div className="post-container">
            <div className="post-block">
                <div className="postL-left">
                    <div className="postL-left__date">{posts[0].date}</div>
                    <div className="postL-left__title">{posts[0].title}</div>
                    <div className="postL-left__text">{posts[0].text.slice(0,400)}</div>     
                </div>
                <div className="postL-right">
                   <img src={IconPostL} alt="Cosmo" />   
                </div>
            </div>
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

export default PostL;