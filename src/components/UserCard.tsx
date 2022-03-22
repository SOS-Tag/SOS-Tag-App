import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateCurrentUserSheetMutation } from "../generated/graphql";
import { Location } from '../routes';
import Toggle from "./Toggle";

type UserCardProps = {
  id?: string | null,
  type: String,
  lastname?: String,
  firstname?: String,
  enabled?: boolean,
  checkboxList?: Array<String>,
  handleCheckboxList: Function,
  selectAll?: boolean,
  urlId?: number,
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  type,
  lastname,
  firstname,
  checkboxList,
  enabled = false,
  handleCheckboxList,
  urlId,
}) => {

    const displayUserCard = () => {
        switch (type) {
            case "main":
            case "child":
                return <UserCardBasic id={id} urlId={urlId} enabled={enabled} type={type} lastname={lastname} firstname={firstname} checkboxList={checkboxList} handleCheckboxList={handleCheckboxList}/>
            case "add":
                return <UserCardAdd urlId={urlId}/>
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
            className={`${color} mobile:max-w-[100%] relative tablet:min-h-[326px] rounded-[12px] p-[20px] cursor-pointer shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-200 hover:scale-[1.02]`} 
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
  enabled,
  checkboxList,
  handleCheckboxList,
  urlId,
}): JSX.Element => {
    const [updateUser] = useUpdateCurrentUserSheetMutation();
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleToggleEnabled = (newState: boolean) => {
        if (id) {
            updateUser({
                variables: {
                    updateCurrentUserSheetInput: {
                        id,
                        changes: { enabled: newState }
                    }
                }
            });
        }
    }

    useEffect(() => {
        console.log('is find')
        const res = checkboxList?.filter(e => e === id);
        if(res![0] !== id){
            setChecked(false)    
        }
        else{
            setChecked(true)
        }
    },[checkboxList])

    return (
        <div className="flex flex-col items-center justify-center gap-[32px] h-[100%]" onClick={() => navigate((location as Location)?.state?.from || '/users/'+urlId)}>

            <input type="checkbox" className="absolute top-[22px] left-[22px]" name="us-select" checked={checked}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handleCheckboxList(id)
            }}/>
            
            <div className="flex flex-col gap-[18px] items-center w-[100%]">
                <div className="w-[102px] h-[102px] bg-white rounded-full grid place-content-center">
                    <img className="w-[55px]" src="/assets/profile.png" alt={`${firstname} ${lastname}`}/>
                </div>
                
                <div className="flex flex-col w-[100%]">
                    <span className="text-center">{firstname}</span>
                    <span className="text-center font-bold">{lastname?.toUpperCase()}</span>
                </div>
            </div>

            <Toggle type={type} state={enabled} setState={handleToggleEnabled}/>
        </div>
    );
}

type UserCardAddProps = {
    urlId?: number,
  }

const UserCardAdd: React.FC<UserCardAddProps> = ({urlId}) => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex flex-col items-center justify-center h-[100%]" onClick={() => navigate((location as Location)?.state?.from || '/users/sheet-by-id/'+urlId) }>
            <div className="relative flex items-center justify-center w-[55px] h-[55px]">
                <div className="absolute bg-white w-[100%] h-[10%]"></div>
                <div className="absolute bg-white w-[10%] h-[100%]"></div>
            </div>
        </div>
    );
}

export default UserCard;
