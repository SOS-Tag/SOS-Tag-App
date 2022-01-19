import { useState } from "react";

const Toggle = (props) => {

    // color : "main" OR "child"
    const { color } = props;

    const [on, setOn] = useState(false);
    
    const state = on ? "on" : "off"

    const handleSwitch = e => {
        e.stopPropagation();
        setOn(!on);
    }

    return (
        <div 
            className={`${state} bg-white w-[85px] h-[35px] rounded-full box-border p-[3px] flex items-center cursor-pointer shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`} 
            onClick={handleSwitch}
        >
            <div className={`${color} w-[29px] h-[29px] rounded-full`}></div>
        </div>
    );
}

export default Toggle;