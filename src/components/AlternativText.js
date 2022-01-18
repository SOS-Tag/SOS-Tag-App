const AlternativText = (props) => {
  return ( 
    <span className="AlternativText">
      {props.text}
      <a href={props.link}><span className="bold text-SosTagRed">{props.linkText}</span></a>
    </span>
   );
}

export default AlternativText;