import '../../Common.css'
import './SelectedPost.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import IconPrev from '../../image/IconPrev.svg';
import IconNext from '../../image/IconNext.svg';
import IconPrevDark from '../../image/IconPrevDark.svg';
import IconNextDark from '../../image/IconNextDark.svg';
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import { ThemeContext } from '../../providers/myContext';
import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IInitialState, IPost } from '../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOnePost } from '../../slice/blogofolioSlice';


function SelectedPost() {

  const [topic] = useContext(ThemeContext);

  const { postId } = useParams<string>();

  const dispatch = useDispatch()<any>;
  const selectedPost: IPost | any = useSelector((state: IInitialState) => state.selectedPost);
  const status: string | null = useSelector((state: IInitialState) => state.status);
  const posts: IPost[] = useSelector((state: IInitialState) => state.blogs)


  useEffect(() => {
    if (typeof postId === "string"){
      dispatch(fetchOnePost(postId));
    }
  },[postId])


  if (!selectedPost) {
    return <Link to="/*" className="link"></Link>;
  }


  // починить чтобы при обновлении страницы подтягивались названия тайтлов
  const previousPostIndex = selectedPost.id - 1;
  const previousPost = posts.find(post => post.id === previousPostIndex);
  const nextPostIndex = selectedPost.id + 1;
  const nextPost = posts.find(post => post.id === nextPostIndex);

  return (
    <>
      <div className="container">
        <Link to="/" className="subtitle-block">
          <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Home |"></Subtitle>
          <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text={` Post ${selectedPost.id}`}></Subtitle>
        </Link>
        {status == "pending" ? <div className="loader"></div> : null}
        <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text={selectedPost.title}></Title>
        <img className="post-image" src={selectedPost.image} alt="" />
        <div className={topic === 'light' ? 'text' : 'text_dark'}>{selectedPost.text}</div>
        <div className="button-block">
          <div className="block-left">
            <button className="button-like">
              <img src={IconLike} alt="Icon Like" />
            </button>
            <button className="button-dislike">
              <img src={IconDislike} alt="Icon Dislike" />
            </button>
          </div>
          <div className="block-right">
            <button className="button-favorites">
              <img src={IconFavorites} alt="Icon Favorites" />
              Add to favorites
            </button>
          </div>
        </div>
        <div className="navigation-container">
          {selectedPost.id > 1 && (
            <Link className="navigation-left" to={`/post/${selectedPost.id - 1}`}>
              {topic === "light" ? <img src={IconPrev} alt="Icon Prev" /> : <img src={IconPrevDark} alt="Icon Prev" />}
              <div className="selected-navigation-block">
                <div className={topic === 'light' ? 'navigation-text' : 'navigation-text_dark'}>Prev</div>
                <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text={previousPost?.title || ""} />
              </div>
            </Link> 
          )}
          {selectedPost.id < posts.length && (
            <Link className="navigation-right" to={`/post/${selectedPost.id + 1}`}>
              <div className="selected-navigation-block">
                <div className={topic === 'light' ? 'navigation-text' : 'navigation-text_dark'}>Next</div>
                <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text={nextPost?.title || ""}></Subtitle>
              </div>
              {topic === "light" ? <img src={IconNext} alt="Icon Next" /> : <img src={IconNextDark} alt="Icon Next" />}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default SelectedPost;