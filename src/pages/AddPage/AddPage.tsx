import "./AddPage.css"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Subtitle from "../../components/Subtitle/Subtitle";
import Textarea from "../../components/Textarea/Textarea";
import Title from "../../components/Title/Title";
import '../SelectedPostPage/SelectedPost.css'
import { ThemeContext } from "../../providers/myContext";
import { useContext } from "react";


function AddPage() {

    const [topic] = useContext(ThemeContext);




    return ( 
        <>
        <div className="container">
                <div className="subtitle-block">
                    <Subtitle className={topic === 'light' ? 'subtitle' : 'subtitle_dark'} text="Home |"></Subtitle>
                    <Subtitle className={topic === 'light' ? 'subtitle_gray' : 'subtitle_dark'} text={" Post" + "123"}></Subtitle>
                </div>
               <Title className={topic === 'light' ? 'signIn' : 'signIn_dark'} text="Add post"></Title> 
               <form className="add-form">
                    <Input title="Title" type="name" placeholder="Astronauts prep for new solar arrays on nearly spacewalk" maxLength={30}></Input>
                    <div className="add-page-block">
                        <div className="add-block">
                            <Input title="Lesson number" type="name" placeholder="20" maxLength={30}></Input>
                        </div>
                        <div className="add-block">
                            <Input  title="Image" type="file" placeholder="20" maxLength={30}></Input>
                        </div>
                        {/* <Input title="Lesson number" type="name" placeholder="20" maxLength={30}></Input> */}
                    </div>
                    <Textarea>Description</Textarea>
                    <Textarea>Text</Textarea>
                    <div className="add-navigation">
                        <div className="add-navigation-left">
                        <Button typeButton="button-secondary2"  isDisabled={false} text="Delete post"></Button>
                        </div>
                        <div className="add-navigation-right">
                            <Button typeButton="button-secondary"  isDisabled={false} text="Cancel"></Button>
                            <Button typeButton="button-primary"  isDisabled={false} text="Add post"></Button>
                        </div>
                    </div>
               </form>
        </div>
        </>
    );
}

export default AddPage;