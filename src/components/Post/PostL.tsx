import './Post.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconPostL from '../../image/IconPostL.svg';
import IconMore from '../../image/IconMore.svg';
import IconFavorites from '../../image/IconFavorites.svg';




function PostL({date, title, description} : {date: string, title: string, description: string}) {
    return ( 
        <div className="post-container">
            <div className="postL-left">
                <div className="postL-left__date">{date}</div>
                <div className="postL-left__title">{title}</div>
                <div className="postL-left__text">{description}</div>
                <div className="post-block">
                    <img src={IconLike} alt="Like" />
                    <img src={IconDislike} alt="Dislike" />
                </div>
            </div>
            <div className="postL-right">
                <img src={IconPostL} alt="Cosmo" />
                <img src={IconFavorites} alt="Favorites" />
                <img src={IconMore} alt="More" />
            </div>
        </div>
     );
}

export default PostL;