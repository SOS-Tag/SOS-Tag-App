const AlternativText = (props) => {
  return ( 
    <span className="AlternativText">
      {props.text}
      <a href={props.link}>{props.linkText}</a>
    </span>
   );
}

export default AlternativText;