import '../../Common.css';
import './AllPosts.css'
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import PostL from '../../components/Post/PostL';
import PostM from '../../components/Post/PostM';
import PostS from '../../components/Post/PostS';
import IconPrev from '../../image/IconPrev.svg';
import IconNext from '../../image/IconNext.svg';
import IconPrevDark from '../../image/IconPrevDark.svg';
import IconNextDark from '../../image/IconNextDark.svg';
import { useContext, useEffect, useState } from 'react';
import { IInitialState, IPost } from '../../types/interfaces';
import { ThemeContext } from '../../providers/myContext';
import { fetchBlog } from '../../slice/blogofolioSlice';
import { useDispatch, useSelector } from 'react-redux';


function AllPosts() {

  // const [data, setData] = useState<null | IPost[]>(null)
  const [topic] = useContext(ThemeContext);

  // const reactions :any = useSelector((state) => state)
  const dispatch = useDispatch()<any>;
  const posts = useSelector((state: IInitialState) => state.blogs);
  const selectedTab = useSelector((state: IInitialState) => state.selectedTab)
  const favorites = useSelector((state: IInitialState) => state.favorites)
  useEffect(() => {
    dispatch(fetchBlog())
  }, [])

  const postsPerPage = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const pagesArray = Array.from(Array(totalPages).keys()).map(page => page + 1);





  return (
    <>
      <div className="container">
        <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="Blog"></Title>
        <Tabs></Tabs>
        {selectedTab === "All" ? <>
          <div className="all-post-container">
            <div className="post-left">
              {posts.slice(startIndex, endIndex - 10).map((post: IPost) => (
                <PostL data-testid="cypress-post-L" post={post} />
              ))}
              <div className="left-block">
                {posts.slice(startIndex + 1, endIndex - 6).map((post: IPost) => (
                  <PostM key={post.id} post={post} />
                ))}
              </div>
            </div>
            <div className="post-right">
              {posts.slice(startIndex + 5, endIndex).map((post: IPost) => (
                <PostS key={post.id} post={post} />
              ))}
            </div>
          </div>
          <div className="all-post-navigation">
            <div className="navigation-block">
              {topic === "light" ? <img src={IconPrev} onClick={goToPrevPage} alt="Icon Prev" /> : <img src={IconPrevDark} onClick={goToPrevPage} alt="Icon Prev" />}
              <div onClick={goToPrevPage} className={topic === 'light' ? 'navigation-block__caption' : 'navigation-block__caption_dark'}>Prev</div>
            </div>
            <div className="navigation-block">
              <div className={topic === 'light' ? 'navigation-block__caption' : 'navigation-block__caption_dark'}>{pagesArray.map(page => (
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
              <div onClick={goToNextPage} className={topic === 'light' ? 'navigation-block__caption' : 'navigation-block__caption_dark'}>Next</div>
              {topic === "light" ? <img src={IconNext} onClick={goToNextPage} alt="Icon Next" /> : <img src={IconNextDark} onClick={goToNextPage} alt="Icon Next" />}
            </div>
          </div>
        </> : null}
        {selectedTab === "Favorites" ?
          <>
            <div className="search-block">
              {favorites.map((post: IPost) => (
                <PostS key={post.id} post={post} />
              ))}
            </div>
          </> : null}
      </div>
    </>
  );
}

export default AllPosts;