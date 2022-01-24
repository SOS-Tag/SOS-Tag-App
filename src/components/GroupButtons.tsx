import Button from "./Button";

const GroupButtons = (props) => {

    const { buttons, img } = props;
    
    // Get the name of image file without extension
    const alt = img.split("/").at(-1).split(".").at(0);

    return (
        <div className="flex gap-[16px] items-center ">
            <img src={img} alt={alt} className="h-[20px]"/>
            {buttons.map((button, i) => (
                <Button box="fill" type ={button.type} buttonText={button.buttonText} key={`gb-button-${i}`} onClick={button.onclick}/>
            ))}
        </div>
    );
}

export default GroupButtons;