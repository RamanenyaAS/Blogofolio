import './Title.css'

function Title({ text, className }: { text: string, className: string }) {
  return (
    <>
      <div className={className}>{text}</div>
    </>
  );
}

export default Title;