import { useContext } from 'react';
import './Textarea.css'
import { ThemeContext } from '../../providers/myContext';

function Textarea({ children }: { children: string }) {

  const [topic] = useContext(ThemeContext);

  return (
    <>
      <div className={topic === "light" ? "textarea__title" : "textarea__title_dark"}>{children}</div>
      <textarea className="textarea" cols={30} rows={10} placeholder="Add your text"></textarea>
    </>
  );
}

export default Textarea;