import "./Toggle.css";
import { useState } from "react";

const Toggle = (props) => {

    const { color } = props;

    const [on, setOn] = useState(false);
    
    const state = on ? "on" : "off"

    return (
        <div className={`tg ${state}`} onClick={() => setOn(!on)}>
            <div className={`tg-circle ${color}`}></div>
        </div>
    );
}

export default Toggle;