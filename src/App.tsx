import './App.css';
import Success from './components/Success/Success';
// import Title from './components/Title/Title';
// import Button from './components/Button/Button';
import Input from './components/Input/Input';
// import Subtitle from './components/Subtitle/Subtitle';
// import Tabs from './components/Tabs/Tabs';
import Template from './components/Template/Template';
// import Textarea from './components/Textarea/Textarea';
// import User from './components/User/User';
import PostL from './components/Post/PostL';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Confirm from './components/Confirm/Confirm';
import SignUp from './components/SignUpForm/SignUpForm';
import SingIn from './components/SignInForm/SingInForm';
import PostS from './components/Post/PostS';
import PostM from './components/Post/PostM';
import AllPosts from './components/Post/AllPosts';
import SelectedPost from './components/SelectedPost/SelectedPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<AllPosts></AllPosts>}></Route>
          <Route path='/signIn' element={<SingIn></SingIn>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/confirm' element={<Confirm></Confirm>}></Route>
          <Route path='/success' element={<Success></Success>}></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
