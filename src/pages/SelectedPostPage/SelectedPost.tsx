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
import {posts} from '../../data'
import Footer from '../../components/Footer/Footer';
import { ThemeContext } from '../../providers/myContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../types/interfaces';


function SelectedPost() {

    const [topic] = useContext(ThemeContext);
    
    const {postId}= useParams<string>();
    


    
    const selectedPost: IPost | undefined = posts.find(post => post.id === Number(postId));
    
    if (!selectedPost) {
        return <div>Пост не найден</div>;
    }
    return ( 
        <>
        <div className="container">
                <div className="subtitle-block">
                    <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Home |"></Subtitle>
                    <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text={` Post ${selectedPost.id}`}></Subtitle>
                </div>
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
                    <div className="navigation-left">
                        {topic === "light" ? <img src={IconPrev} alt="Icon Prev"/> : <img src={IconPrevDark} alt="Icon Prev"/>}
                        <div className="navigation-block">
                            <div className={topic === 'light' ? 'navigation-text' : 'navigation-text_dark'}>Prev</div>
                            <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text="10 Things to Know About Salvador Dalí"></Subtitle>
                        </div>
                    </div>
                    <div className="navigation-right">
                        <div className="navigation-block">
                            <div className={topic === 'light' ? 'navigation-text' : 'navigation-text_dark'}>Next</div>
                            <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text="8 Beautiful Villas Belonging to Artists You Need to See"></Subtitle>
                        </div>
                        {topic === "light" ? <img src={IconNext} alt="Icon Next"/> : <img src={IconNextDark} alt="Icon Next"/>}
                    </div>
               </div>
        </div>
        </>
    );
}

export default SelectedPost;