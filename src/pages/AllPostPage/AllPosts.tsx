import '../../Common.css';
import './AllPosts.css'
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import PostL from '../../components/Post/PostL';
import PostM from '../../components/Post/PostM';
import PostS from '../../components/Post/PostS';
import IconPrev from '../../image/IconPrev.svg';
import IconNext from '../../image/IconNext.svg';
import { useContext, useEffect, useState } from 'react';
import { IPost } from '../../types/interfaces';
import {posts} from '../../data'
import { ThemeContext } from '../../providers/myContext';


function AllPosts() {

    // const [data, setData] = useState<null | IPost[]>(null)
    const [topic] = useContext(ThemeContext);


    // useEffect(() => {
    //     async function getData() {
    //         const responce = await fetch(`https://63fc7786677c4158730c5bf7.mockapi.io/Pinterest`);
    //         const data = await responce.json();
    //         setData(data);
    //     }
    //     getData();
    // }, [])


    return ( 
        <>
            <div className="container">
                <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="Blog"></Title>
                <Tabs></Tabs>
                <div className="all-post-container">
                    <div className="post-left">
                        <PostL></PostL>
                        <div className="left-block">
                        {posts && posts.slice(1,5).map(post => <PostM key={post.id} post={post} />)}
                        </div>
                    </div>
                    <div className="post-right">
                    {posts && posts.slice(5,11).map(post => <PostS key={post.id} post={post} />)}
                    </div>
                </div>
                <div className="all-post-navigation">
                    <div className="navigation-block">
                        <img src={IconPrev} alt="Icon Prev" />
                        <div className="navigation-block__caption">Prev</div>
                    </div>
                    <div className="navigation-block">
                        <div className="navigation-block__caption">1 2 3 4 5</div>
                    </div>
                    <div className="navigation-block">
                        <div className="navigation-block__caption">Next</div>
                        <img src={IconNext} alt="Icon Next" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllPosts;