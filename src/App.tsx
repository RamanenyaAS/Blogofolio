import './App.css';
import Authorization from './components/Authorization/Authorization';
import Button from './components/Button/Button';
import Tabs from './components/Tabs/Tabs';
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
      <Title username="Hanna Burkovskaya"></Title>
      <Authorization></Authorization>
      <Tabs></Tabs>
    </>
  );
}

export default App;
