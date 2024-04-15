import './Template.css'

function Template({ text, className }: { text: string, className: string }) {
  return (
    <>
      <div className={className}>{text}</div>
    </>
  );
}

export default Template;