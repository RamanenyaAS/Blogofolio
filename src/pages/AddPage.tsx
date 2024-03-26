import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Subtitle from "../components/Subtitle/Subtitle";
import Textarea from "../components/Textarea/Textarea";
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
               <form className="add-form">
                    <Input title="Title" type="name" placeholder="Astronauts prep for new solar arrays on nearly spacewalk" maxLength={30}></Input>
                    <div className="add-page-block" style={{
                        display: "flex"
                    }}>
                        <Input title="Lesson number" type="name" placeholder="20" maxLength={30}></Input>
                       
                    </div>
                    <Textarea>Description</Textarea>
                    <Textarea>Text</Textarea>
                    <div className="add-navigation" style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <div className="add-navigation-left">
                        <Button typeButton="button-secondary2"  isDisabled={false} text="Delete post"></Button>
                        </div>
                        <div className="add-navigation-right" style={{
                            display: "flex",
                            gap: "20px"
                        }}>
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