import '../../Common.css'
import './SelectedPost.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import IconPostL from '../../image/IconPostL.svg';
import IconPrev from '../../image/IconPrev.svg';
import IconNext from '../../image/IconNext.svg';
import IconPrevDark from '../../image/IconPrevDark.svg';
import IconNextDark from '../../image/IconNextDark.svg';
import Header from "../../components/Header/Header";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import { posts } from '../../data'
import Footer from '../../components/Footer/Footer';
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPost } from '../../types/interfaces';


function SelectedPost() {

  const [topic] = useContext(ThemeContext);

  const { postId } = useParams<string>();




  const selectedPost: IPost | undefined = posts.find(post => post.id === Number(postId));

  if (!selectedPost) {
    return <Link to="/*" className="link"></Link>;
  }

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