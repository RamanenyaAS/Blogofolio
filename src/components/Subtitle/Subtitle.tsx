import { Link } from 'react-router-dom';
import './Subtitle.css'
import '../../Common.css'

function Subtitle({ text, className }: { text: string, className: string }) {
  return (
    <>
      <div className={className}>{text}</div>
    </>
  );
}

export default Subtitle;