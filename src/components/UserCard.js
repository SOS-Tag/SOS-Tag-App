import Toggle from "./Toggle";
import "./UserCard.css";

const UserCard = (props) => {

    // type : "main" / "child" / "add"
    const { type, name, firstname } = props;

    const displayUserCard = () => {

        switch (type) {
            case "main":
            case "child":
                return <UserCardMain type={type} name={name} firstname={firstname} />
            case "add":
                return <UserCardAdd type={type} />
            default:
                return <p>{type}</p>;
        }
    }

    return (
        displayUserCard()
    );
}

const UserCardMain = (props) => {

    const {type, name, firstname } = props;

    return (
        <div className={`uc ${type}`} onClick={() => alert("[A FAIRE] Afficher la fiche médicale.")}>
            <input type="checkbox" className="us-select" name="us-select" />
            
            <div className="uc-profile">
                <div className="uc-circle"><img className="uc-icon" src="/assets/profile.png" alt={`${firstname} ${name}`}/></div>
                
                <div className="uc-names">
                    <span>{firstname}</span>
                    <span className="uc-name">{name.toUpperCase()}</span>
                </div>
            </div>

            <Toggle color={type} />
        </div>
    );
}

const UserCardAdd = (props) => {

    const { type } = props;

    return (
        <div className={`uc ${type}`} onClick={() => alert("[A FAIRE] Ajouter un profil.")}>
            <div className="uc-plus">
                <div className="plus-h"></div><div className="plus-v"></div>
            </div>
        </div>
    );
}

export default UserCard;