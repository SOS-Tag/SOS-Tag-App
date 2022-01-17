import "./GroupButtons.css";

const GroupButtons = (props) => {

    const { buttons, img } = props;
    
    // Get the name of image file without extension
    const alt = img.split("/").at(-1).split(".").at(0);

    return (
        <div className="gb">
            <img src={img} alt={alt} className="gb-icon"/>
            {buttons.map((button, i) => (
                <button className="gb-button" key={`gb-button-${i}`} type="button" onClick={button.onclick}>{button.name}</button>
            ))}
        </div>
    );
}

export default GroupButtons;