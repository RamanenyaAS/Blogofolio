import Title from "../components/Title/Title";
import IconPrev from '../image/IconPrev.svg';
import IconNext from '../image/IconNext.svg';
import IconPrevDark from '../image/IconPrevDark.svg';
import IconNextDark from '../image/IconNextDark.svg';
import PostS from "../components/Post/PostS";
import {posts} from "../data"
import { useContext, useState } from "react";
import { ThemeContext } from "../providers/myContext";


function SearchPage() {

    const [topic] = useContext(ThemeContext);


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


    return ( 
        <>
            <div className="container">
                <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text={`Search results `}></Title>
                <div className="search-block">
                    {currentPosts.map(post => (
                        <PostS key={post.id} post={post} />
                    ))}
                </div>
                <div className="all-post-navigation">
                    <div className="navigation-block">
                        {topic === "light" ? <img src={IconPrev} onClick={goToPrevPage} alt="Icon Prev"/> : <img src={IconPrevDark} alt="Icon Prev"/>}
                        <div className="navigation-block__caption" onClick={goToPrevPage}>Prev</div>
                    </div>
                    <div className="navigation-block">
                        <div className={topic === "light" ? "navigation-block__caption" : "navigation-block__caption_dark"}>
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
                        {topic === "light" ? <img src={IconNext}  onClick={goToNextPage} alt="Icon Next"/> : <img src={IconNextDark}  onClick={goToNextPage} alt="Icon Next"/>}
                    </div>
                </div>
            </div>    
        </>
    );
}

export default SearchPage;