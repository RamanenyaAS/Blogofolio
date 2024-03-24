import '../../Common.css'
import './SelectedPost.css'
import IconLike from '../../image/IconLike.svg';
import IconDislike from '../../image/IconDislike.svg';
import IconFavorites from '../../image/IconFavorites.svg';
import IconPostL from '../../image/IconPostL.svg';
import IconPrev from '../../image/IconPrev.svg';
import IconNext from '../../image/IconNext.svg';
import Header from "../../components/Header/Header";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import {posts} from '../../data'
import Footer from '../../components/Footer/Footer';


function SelectedPost() {
    return ( 
        <>
        <div className="container">
                <div className="subtitle-block">
                    <Subtitle className="subtitle" text="Home |"></Subtitle>
                    <Subtitle className="subtitle_grey" text={" Post" + "123"}></Subtitle>
                </div>
               <Title className="signIn" text={posts[0].title}></Title> 
               <img className="post-image" src={IconPostL} alt="" />
               <div className="text">{posts[0].text}</div>
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
                        <img src={IconPrev} alt="Icon Prev" />
                        <div className="navigation-block">
                            <div className="navigation-text">Prev</div>
                            <Subtitle className="subtitle_grey" text="10 Things to Know About Salvador Dalí"></Subtitle>
                        </div>
                    </div>
                    <div className="navigation-right">
                        <div className="navigation-block">
                            <div className="navigation-text">Next</div>
                            <Subtitle className="subtitle_grey" text="8 Beautiful Villas Belonging to Artists You Need to See"></Subtitle>
                        </div>
                        <img src={IconNext} alt="Icon Next" />
                    </div>
               </div>
        </div>
        </>
    );
}

export default SelectedPost;