import React from "react"
import "./Button.css"
import { ButtonType } from "./Types"

const Button: React.FC<ButtonType> = ({
  to,
  box,
  type,
  buttonText, 
  onClick
}) => {

  function buttonLink(){
    return(
      <a href={to}>
        <button 
          className={"button " + box + "--button--"+ type +"--sostag"}
          onClick={onClick}
        >
          {buttonText} 
        </button>
      </a>
    )
  }
  
  function buttonStandard(){
    return(
      <button 
        className={"button " + box + "--button--"+ type +"--sostag"}
        onClick={onClick}
      >
        {buttonText} 
      </button>
    )
  }

  return (
    <>
      {(to)?buttonLink():buttonStandard()}
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