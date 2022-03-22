import React from 'react';
import GroupButtons from '../components/GroupButtons';
import CardsList from '../components/CardsList';
import { useEffect, useState } from 'react';
import { withAuth } from '../guards/auth';
import { Sheet, useSheetsCurrentUserQuery, useDeleteCurrentUserSheetMutation } from "../generated/graphql";
import './UserDashboard.css';

type UserDashboardType = {
}

const UserDashboard: React.FC<UserDashboardType> = () => {

    const [deleteSheet] = useDeleteCurrentUserSheetMutation();
    const [sheets, setSheets] = useState<Sheet[]>([]);
    const [checkboxList, setCheckboxList] = useState<string[]>([]);
    const [allCheckboxSelected, setAllCheckboxSelected] = useState(false);

    // BUTTON ACTIONS

    const download = () => {
        checkboxList.map(e => { 
            window.open("http://qr.sostag.tech/pdf/"+e, '_blank');
        })  
    }

    const downloadButton = {
        buttonText: "Télécharger",
        type: "secondaire",
        onClick: download
    }

    const deleteProfile = () => {
        checkboxList.map(e => deleteSheet({
            variables: {
              sheetId: e
              },
            })
        );
        let newList: Sheet[];
        newList = sheets.filter(e => !checkboxList.find(x => x === e._id));
        setSheets(newList);
    }

    const deleteButton = {
        buttonText: "Supprimer",
        type: "delete",
        onClick: deleteProfile
    }

    // CHECKBOX
    
    const selectAll = () => {
        allCheckboxSelected? setAllCheckboxSelected(false): setAllCheckboxSelected(true);
        if(allCheckboxSelected){
            setCheckboxList([]);
        }
        else{
            const ids= sheets.map(e => (e._id !== undefined && typeof(e._id) === "string")? e._id:'');
            setCheckboxList(ids)
        }
    }

    const handleCheckboxList = (id: string) => {
        const exist = checkboxList.filter(e => e === id);
        if(exist.length === 1){
            setCheckboxList(checkboxList.filter(e => e !== id))
        }
        else{
            setCheckboxList([...checkboxList, id]);
        }
    }

    const { data } = useSheetsCurrentUserQuery({ fetchPolicy: 'network-only' });

    useEffect(() => {
      const response = data?.sheetsCurrentUser?.response
      response && setSheets(response.map(e => ({ ...e })));
    },[data])

    return (
        <div className="userDashboard--container">

            <h1>Bienvenue dans votre espace</h1>

            <div className="flex justify-between flex-wrap mobile:mb-[30px]">

                <div className="flex gap-[22px] mobile:mt-[30px] items-center">
                    <input type="checkbox" name="ud-select-all" onClick={selectAll}/>
                    <label htmlFor="ud-select-all">Tout sélectionner</label>
                </div>

                <div className='flex gap-x-[41px] items-center flex-wrap'>
                    <GroupButtons img={"/assets/qrcode.png"} buttons={[downloadButton]} />
                    <GroupButtons img={"/assets/profile.png"} buttons={[deleteButton]} />
                </div>

            </div>

            <CardsList sheets={sheets} checkboxList={checkboxList} handleCheckboxList={handleCheckboxList}/>

        </div>
    );
}

export default withAuth(UserDashboard);


