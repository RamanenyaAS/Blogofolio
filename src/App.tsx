import './App.css';
import Authorization from './components/Authorization/Authorization';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Tabs from './components/Tabs/Tabs';
import Textarea from './components/Textarea/Textarea';
import Title from './components/Title/Title';

function App() {
  
  function buttonClickOne(): void{
    alert("A");
  }
  function buttonClickTwo(): void{
    alert("B");
  }
  
  return (
    <>
      <Button typeButton="button-primary" clickFunction={buttonClickOne} isDisabled={true} text="Click me"></Button>
      <Button typeButton="button-secondary" clickFunction={buttonClickTwo} isDisabled={false} text="Submit"></Button>
      <Title username="Vitya Pupkin"></Title>
      <Authorization></Authorization>
      <Tabs></Tabs>
      <Input></Input>
      <Textarea></Textarea>
    </>
  );
}

export default App;
