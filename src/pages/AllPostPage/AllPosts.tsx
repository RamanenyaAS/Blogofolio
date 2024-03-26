import '../../Common.css';
import './AllPosts.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import PostL from '../../components/Post/PostL';
import PostM from '../../components/Post/PostM';
import PostS from '../../components/Post/PostS';
import IconPrev from '../../image/IconPrev.svg';
import IconNext from '../../image/IconNext.svg';
import { useEffect, useState } from 'react';
import { IPost } from '../../types/interfaces';

function AllPosts() {

    const [data, setData] = useState<null | IPost[]>(null)
    const [theme, setTheme] = useState('light');
    

    useEffect(() => {
        async function getData() {
            const responce = await fetch(`https://63fc7786677c4158730c5bf7.mockapi.io/Pinterest`);
            const data = await responce.json();
            setData(data);
        }
        getData();
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    return ( 
        <>
            <div className="container">
                <Title className="signIn" text="Blog"></Title>
                <Tabs></Tabs>
                <div className="all-post-container">
                    <div className="post-left">
                        <PostL></PostL>
                        <div className="left-block">
                        {data && data.slice(1,5).map(post => <PostM key={post.id} post={post} />)}
                            {/* <PostM></PostM>
                            <PostM></PostM>
                            <PostM></PostM>
                            <PostM></PostM> */}
                        </div>
                    </div>
                    <div className="post-right">
                    {data && data.slice(5,11).map(post => <PostS key={post.id} post={post} />)}
                        {/* <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS> */}
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