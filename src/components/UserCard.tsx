import React from "react";
import Toggle from "./Toggle";

type UserCardProps = {
  id: String,
  type: String,
  lastname: String,
  firstname: String,
  handleSelect: Function
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  type,
  lastname,
  firstname,
  handleSelect
}) => {

    const displayUserCard = () => {
        switch (type) {
            case "main":
            case "child":
                return <UserCardBasic id={id} type={type} lastname={lastname} firstname={firstname} handleSelect={handleSelect}/>
            case "add":
                return <UserCardAdd />
            default:
                return <p>{type} doesn't exist</p>;
        }
    }

    let color = (() => {
        switch (type) {
            case "main":
                return "bg-SosTagRedLight";
            case "child":
                return "bg-SosTagYellow";
            case "add":
                return "bg-SosTagGrey";
            default:
                return "bg-SosTagRed";
        }
    })()

    return (
        <div 
            className={`${color} relative min-h-[326px] rounded-[12px] p-[20px] cursor-pointer shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-200 hover:scale-[1.02]`} 
        >
            {displayUserCard()}
        </div>
    );
}

const UserCardBasic: React.FC<UserCardProps> = ({
  id,
  type,
  lastname,
  firstname,
  handleSelect
}): JSX.Element => {

    return (
        <div className="flex flex-col items-center justify-center gap-[32px] h-[100%]" onClick={() => alert("[A FAIRE] Afficher la fiche médicale.")}>

            <input type="checkbox" className="absolute top-[22px] left-[22px]" name="us-select"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handleSelect(id)
            }}/>
            
            <div className="flex flex-col gap-[18px] items-center w-[100%]">
                <div className="w-[102px] h-[102px] bg-white rounded-full grid place-content-center">
                    <img className="w-[55px]" src="/assets/profile.png" alt={`${firstname} ${lastname}`}/>
                </div>
                
                <div className="flex flex-col w-[100%]">
                    <span className="text-center">{firstname}</span>
                    <span className="text-center font-bold">{lastname.toUpperCase()}</span>
                </div>
            </div>

            <Toggle type={type} />
        </div>
    );
}

const UserCardAdd = () => {

    return (
        <div className="flex flex-col items-center justify-center h-[100%]" onClick={() => alert("[A FAIRE] Ajouter un profil.")}>
            <div className="relative flex items-center justify-center w-[55px] h-[55px]">
                <div className="absolute bg-white w-[100%] h-[10%]"></div>
                <div className="absolute bg-white w-[10%] h-[100%]"></div>
            </div>
        </div>
    );
}

export default UserCard;
