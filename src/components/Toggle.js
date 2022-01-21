import "./Toggle.css";
import { useState } from "react";

const Toggle = (props) => {

    console.log(props);
    const color = props.color;

    const [on, setOn] = useState(props.isActivated);
    
    const state = on ? "off" : "on"

    return (
        <div className={`tg ${state}`} onClick={() => setOn(!on)}>
            <div className={`tg-circle bg-`+color}></div>
        </div>
    );
}

export default Toggle;