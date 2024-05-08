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
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, addToFavorite, increment } from '../../slice/blogofolioSlice';



function PostM({ post }: { post: IPost }) {

  const [topic] = useContext(ThemeContext);

  const dispatch = useDispatch();
  const reactions: any = useSelector((state) => state)

  const addLike = () => {
    dispatch(increment())
  }
  const addDislike = () => {
    dispatch(decrement())
  }
  const addToFavorites = () => {
    dispatch(addToFavorite(post))
  }


  return (
    <>
      <div className="postM-container">
        <Link className='link' key={post.id} to={`/post/${post.id}`}>
          <img className="postM-image" src={post.image} alt="Cosmo" />
          <div className="post-left__date">{post.date}</div>
          <div className={topic === 'light' ? 'postM-left__title' : 'postM-left__title_dark'}>{post.title}</div>
        </Link>
        <div className="post-block">
          <div className="bottom-left">
            {topic === "light" ? <img onClick={addLike} className="post-icon" src={IconLike} alt="Icon Like" /> : <img onClick={addLike} className="post-icon" src={IconLikeDark} alt="Icon Like" />}
            {topic === "light" ? <img onClick={addDislike} className="post-icon" src={IconDislike} alt="Icon Dislike" /> : <img onClick={addDislike} className="post-icon" src={IconDislikeDark} alt="Icon Dislike" />}
          </div>
          <div className="bottom-right">
            {topic === "light" ? <img onClick={addToFavorites} className="post-icon" src={IconFavorites} alt="Icon Favorites" /> : <img onClick={addToFavorites} className="post-icon" src={IconFavoritesDark} alt="Icon Favorites" />}
            {topic === "light" ? <img className="post-icon" src={IconMore} alt="Icon More" /> : <img className="post-icon" src={IconMoreDark} alt="Icon More" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostM;