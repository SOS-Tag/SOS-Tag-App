import "./Button.css"

const Button = (props) => {

  function buttonLink(){
    return(
      <a href={props.to}>
        <button 
          className={"button " + props.box + "--button--"+ props.type +"--sostag"}
          onClick={props.onClick}
        >
          {props.buttonText} 
        </button>
      </a>
    )
  }
  
  function buttonStandard(){
    return(
      <button 
        className={"button " + props.box + "--button--"+ props.type +"--sostag"}
        onClick={props.onClick}
      >
        {props.buttonText} 
      </button>
    )
  }

  return (
    <>
      {(props.to)?buttonLink():buttonStandard()}
    </> 
    // <button 
    //   className={"button " + props.box + "--button--"+ props.type +"--sostag"}
    //   onClick={props.onClick}
    // >
    //   {props.buttonText} 
    // </button>
  );
}
 
export default Button;