import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconMore from '../../image/IconMore.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import { IPost } from '../../types/interfaces';

function PostS({post} : {post: IPost}) {
    return ( 
        <>
        <div className="postS-container">
            <div className="post-block">
                <div className="postL-left">
                    <div className="postS-left__date">{post.date}</div>
                    <div className="postS-left__title">{post.title}</div>
                </div>
                <div className="postL-right">
                   <img className="postS-image" src={post.image} alt="Cosmo" />   
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

export default PostS;