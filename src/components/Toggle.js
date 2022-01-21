import { useEffect, useState } from "react";

const Toggle = (props) => {

    // type : "main", "child"
    const { type, handleOn } = props;

    const [on, setOn] = useState(false);

    let color = (() => {
        if(type === "main") return "bg-SosTagRedLight";
        else return "bg-SosTagYellowLight";
    })()
    
    const handleSwitch = e => {
        // Prevent click on toggle to trigger parent click event
        e.stopPropagation();

        setOn(!on);
    }

    useEffect(() => {
        if(on && handleOn) handleOn();
    });

    return (
        <div 
            className={`relative  bg-white w-[85px] h-[35px] rounded-full cursor-pointer shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`} 
            onClick={handleSwitch}
        >
            <div className={`toggle ${!on && "off"} ${color} w-[29px] h-[29px] rounded-full absolute top-1/2`}></div>
        </div>
    );
}

export default Toggle;