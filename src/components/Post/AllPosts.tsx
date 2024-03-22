import '../../Common.css';
import './AllPosts.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Title from '../Title/Title';
import PostL from './PostL';
import PostM from './PostM';
import PostS from './PostS';
import IconPrev from '../../image/IconPrev.svg';
import IconNext from '../../image/IconNext.svg';
import { useEffect, useState } from 'react';
import { IPost } from '../../types/interfaces';

function AllPosts() {

    const [data, setData] = useState<null | IPost[]>(null)
    
    useEffect(() => {
        async function getData() {
            const responce = await fetch(`https://63fc7786677c4158730c5bf7.mockapi.io/Pinterest`);
            const data = await responce.json();
            setData(data);
        }
        getData();
    }, [])
console.log(data);
    return ( 
        <>
            <div className="container">
                <Title className="signIn" text="Blog"></Title>
                <Tabs></Tabs>
                <div className="all-post-container">
                    <div className="post-left">
                        <PostL></PostL>
                        <div className="left-block">
                        {data && data.map(post => <PostM key={post.id} post={post} />)}
                            {/* <PostM></PostM>
                            <PostM></PostM>
                            <PostM></PostM>
                            <PostM></PostM> */}
                        </div>
                    </div>
                    <div className="post-right">
                        <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS>
                        <PostS></PostS>
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