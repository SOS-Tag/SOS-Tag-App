import React, { useState } from "react";

type ToogleProps = {
  type?: String,
  state?: boolean,
  setState?: (state: boolean) => void
}

const Toggle: React.FC<ToogleProps> = ({
  type,
  state = false,
  setState = () => {}
}) => {

  const [on, setOn] = useState(state);

  let color = (() => {
    if(type === "main") return "bg-SosTagRedLight";
    else return "bg-SosTagYellow";
  })()

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setState(!on);
    setOn(!on);
  }
  
  return (
    <div 
      className={`relative  bg-white w-[85px] h-[35px] rounded-full cursor-pointer shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`} 
      onClick={handleToggle}
    >
      <div className={`toggle ${!on && "off"} ${color} w-[29px] h-[29px] rounded-full absolute top-1/2`}></div>
    </div>
  );
}

export default Toggle;
