import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconMore from '../../image/IconMore.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import { IPost } from '../../types/interfaces';
// import {posts} from '../../data'

function PostM({post} : {post: IPost}) {
    return ( 
        <>
        <div className="postM-container">
            <img className="post-image" src={post.image} alt="Cosmo" />   
            <div className="post-left__date">{post.date}</div>
            <div className="postM-left__title">{post.title}</div>
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