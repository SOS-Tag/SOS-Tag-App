import users from './../data/users.json';
import GroupButtons from '../components/GroupButtons';
import CardsList from '../components/CardsList';
import { useState } from 'react';

const UserDashboard = (props) => {
    
    // selectedIds is an array containing the ids of all selected users
    const [selectedIDs, setSelectedIDs] = useState([]);

    // BUTTON ACTIONS

    const download = () => {
        alert("[A FAIRE] Télécharger les QR codes sélectionnés.");
    }

    const downloadButton = {
        buttonText: "Télécharger",
        type: "secondaire",
        onclick: download
    }

    const order = () => {
        alert("[A FAIRE] Commander les QR codes sélectionnés.");
    }

    const orderButton = {
        buttonText: "Commander",
        type: "secondaire",
        onclick: order
    }

    const deleteProfile = () => {
        alert("[A FAIRE] Supprimer les profils sélectionnés.");
    }

    const deleteButton = {
        buttonText: "Supprimer",
        type: "delete",
        onclick: deleteProfile
    }

    // CHECKBOX

    const handleSelectAll = e => {
        if(e.target.checked) setSelectedIDs(users.map(user => user.id));
        else setSelectedIDs([]);

        // const inputs = document.querySelectorAll('[name=us-select]');
        // inputs.forEach(input => input.checked = e.target.checked);
    }

    const handleChecked = () => {
        if(selectedIDs.length === users.length) return true;
        else if(selectedIDs.length === 0) return false;
        else return document.querySelector('[name=ud-select-all]').checked;
    }

    const toggleSelect = (id) => {
        const cpy = selectedIDs.slice();
        // Search if id in selectedIDs
        const index = cpy.indexOf(id);
        // If no, add 
        if(index === -1) cpy.push(id);
        // If yes, remove
        else cpy.splice(index, 1);
        setSelectedIDs(cpy);
    }

    return (
        <div className="flex flex-col h-[fit-content] gap-[70px] py-[70px] px-[20px] w-[1100px] mx-auto">

            <h1>Bienvenue dans votre espace</h1>

            <div className="flex justify-between flex-wrap">

                <div className="flex gap-[22px] items-center">
                    <input type="checkbox" name="ud-select-all" checked={handleChecked()} onChange={e => handleSelectAll(e)}/>
                    <label htmlFor="ud-select-all">Tout sélectionner</label>
                </div>

                <div className='flex gap-x-[41px] items-center flex-wrap'>
                    <GroupButtons img={"/assets/profile.png"} buttons={[downloadButton, orderButton]} />
                    <GroupButtons img={"/assets/qrcode.png"} buttons={[deleteButton]} />
                </div>

            </div>

            <CardsList users={users} handleSelect={toggleSelect} selectedIDs={selectedIDs}/>

        </div>
    );
}

export default UserDashboard;