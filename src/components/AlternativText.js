const AlternativText = (props) => {
  return ( 
    <div className={"AlternativText "+props.className}>
      {props.text}
      <a href={props.link}><span className="font-bold text-SosTagRed">{props.linkText}</span></a>
    </div>
   );
}

export default AlternativText;