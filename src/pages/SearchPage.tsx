import Title from "../components/Title/Title";
import IconPrev from '../image/IconPrev.svg';
import IconNext from '../image/IconNext.svg';
import PostS from "../components/Post/PostS";
import {posts} from "../data"
import { useState } from "react";


function SearchPage() {

    
    const postsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const goToPrevPage = () => {
        if(currentPage>1){
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const goToNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex)

    const pagesArray = Array.from(Array(totalPages).keys()).map(page => page + 1);
    const pagesString = pagesArray.join(' ');


    return ( 
        <>
            <div className="container">
                <Title className="signIn" text={`Search results `}></Title>
                <div className="search-block">
                    {currentPosts.map(post => (
                        <PostS key={post.id} post={post} />
                    ))}
                </div>
                <div className="all-post-navigation">
                    <div className="navigation-block">
                        <img src={IconPrev} onClick={goToPrevPage} alt="Icon Prev" />
                        <div className="navigation-block__caption" onClick={goToPrevPage}>Prev</div>
                    </div>
                    <div className="navigation-block">
                        <div className="navigation-block__caption">
                            {pagesArray.map(page => (
                                <span
                                    key={page}
                                    className={currentPage === page ? 'active' : ''}
                                    onClick={() => goToPage(page)}
                                >
                                    {page}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="navigation-block">
                        <div className="navigation-block__caption" onClick={goToNextPage} >Next</div>
                        <img src={IconNext} onClick={goToNextPage} alt="Icon Next" />
                    </div>
                </div>
            </div>    
        </>
    );
}

export default SearchPage;