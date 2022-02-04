import React from "react";
import Button from "./Button";
import { ButtonType } from "./Types";

type GroupButtonsType = {
    buttons: Array<ButtonType>,
    img: string,
}

const GroupButtons: React.FC<GroupButtonsType> = ({
    buttons, 
    img,
}) => {

    // Get the name of image file without extension
    let alt: string | undefined = img.split("/").at(-1)!.split(".").at(0);

    return (
        <div className="flex gap-[16px] items-center ">
            <img src={img} alt={alt} className="h-[20px]"/>
            {buttons.map((button, i) => (
                <Button box="fill" type ={button.type} buttonText={button.buttonText} key={`gb-button-${i}`} onClick={button.onClick}/>
            ))}
        </div>
    );
}

export default GroupButtons;