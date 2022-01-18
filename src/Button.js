import "./Button.css"

const Button = (props) => {

    return ( 
        <button className={"button " + props.box + "--button--"+ props.type +"--sostag"}>
        {props.buttonText} 
        </button>
     );
}
 
export default Button;