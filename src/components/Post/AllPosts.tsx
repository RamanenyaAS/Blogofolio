import '../../Common.css';
import './AllPosts.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Title from '../Title/Title';
import PostL from './PostL';
import PostM from './PostM';
import PostS from './PostS';


function AllPosts() {
    return ( 
        <>
            <Header></Header>
            <div className="container">
                <Title className="signIn" text="Blog"></Title>
                <Tabs></Tabs>
                <div className="post-container">
                    <div className="post-left">
                        <PostL></PostL>
                        <div className="left-block">
                            <PostM></PostM>
                            <PostM></PostM>
                            <PostM></PostM>
                            <PostM></PostM>
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
            </div>
            <Footer></Footer>
        </>
    );
}

export default AllPosts;