import "./GroupButtons.css";

const GroupButtons = (props) => {

    const { name, buttons, img } = props;

    console.log(img);
    
    return (
        <div className="gb">
            <img src={img} alt={name} className="gb-icon"/>
            {buttons.map((button, i) => (
                <button id="ug-buttons" type="button">{button}</button>
            ))}
        </div>
    );
}

export default GroupButtons;