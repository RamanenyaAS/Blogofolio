import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './pages/SuccessPage/Success';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Confirm from './pages/ConfirmPage';
import SignUp from './pages/SignUpFormPage/SignUpForm';
import SingIn from './pages/SignInFormPage/SingInForm';
import AllPosts from './pages/AllPostPage/AllPosts';
import SelectedPost from './pages/SelectedPostPage/SelectedPost';
import ErrorPage from './pages/ErrorPage';
import ResetPage from './pages/ResetPage';
import NewPasswordPage from './pages/NewPasswordPage';
import AddPage from './pages/AddPage';

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
          <Route path='/reset' element={<ResetPage></ResetPage>} ></Route>
          <Route path='/reset-new' element={<NewPasswordPage></NewPasswordPage>}></Route>
          <Route path='/add' element={<AddPage></AddPage>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
