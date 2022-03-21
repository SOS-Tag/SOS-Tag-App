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
    const [selectedIDs, setSelectedIDs] = useState([]);
    const [sheets, setSheets] = useState<Sheet[]>([]);

    // TEST CHECKBOX

    const [checkboxList, setCheckboxList] = useState<string[]>([]);
    const [allCheckboxSelected, setAllCheckboxSelected] = useState(false);

    useEffect(() => {
        console.log('✔ - checkbox  : ' + checkboxList)    
    },[checkboxList])

    // BUTTON ACTIONS

    const download = () => {
        checkboxList.map(e => { 
            window.open("https://sostag-qr-service.herokuapp.com/pdf/"+e, '_blank');
        })  
    }

    const downloadButton = {
        buttonText: "Télécharger",
        type: "secondaire",
        onClick: download
    }

    // const order = () => {
    //     alert("[A FAIRE] Commander les QR codes sélectionnés.");
    // }

    // const orderButton = {
    //     buttonText: "Commander",
    //     type: "secondaire",
    //     onclick: order
    // }

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
            console.log("🦆 : "+ids);
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

    const toggleSelect = (id: never) => {
        const cpy = selectedIDs.slice();
        const index = cpy.indexOf(id);
        if(index === -1) cpy.push(id);
        else cpy.splice(index, 1);
        setSelectedIDs(cpy);
    }

    // TEST 

    // const location = useLocation()
    // const navigate = useNavigate();
    // const { client, data } = useMeQuery({
    //     fetchPolicy: 'network-only'
    // });

    // console.log("currentUser Dashboard : "+ data?.currentUser?.response?.email !);

    const { data, loading, error } = useSheetsCurrentUserQuery({ fetchPolicy: 'network-only' });


    if (loading) {
        console.log("En attente des informations de l'utilisateur connecté ...")
    }

    if (error) {
        console.log(error.message)
    }

    if (data?.sheetsCurrentUser?.error) {
        console.log(data.sheetsCurrentUser.error?.message as string)
    }

    useEffect(() => {
      const response = data?.sheetsCurrentUser?.response
      response && setSheets(response.map(e => ({ ...e })));
    },[data])

    console.log(sheets);

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


