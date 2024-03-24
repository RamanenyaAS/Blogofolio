import Input from "../components/Input/Input";
import Subtitle from "../components/Subtitle/Subtitle";
import Title from "../components/Title/Title";
import './SelectedPostPage/SelectedPost.css'

function AddPage() {
    return ( 
        <>
        <div className="container">
                <div className="subtitle-block">
                    <Subtitle className="subtitle" text="Home |"></Subtitle>
                    <Subtitle className="subtitle_grey" text={" Post" + "123"}></Subtitle>
                </div>
               <Title className="signIn" text="Add post"></Title> 
        </div>
        </>
    );
}

export default AddPage;