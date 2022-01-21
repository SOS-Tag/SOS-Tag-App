import users from './../data/users.json';
import GroupButtons from '../components/GroupButtons';
import CardsList from '../components/CardsList';
import { useState } from 'react';

const UserDashboard = (props) => {

    // const [seledted, setSelected] = useState();

    // BUTTON ACTIONS

    const download = () => {
        alert("[A FAIRE] Télécharger les QR codes sélectionnés.");
    }

    const downloadButton = {
        name: "Télécharger",
        type: "secondaire",
        onclick: download
    }

    const order = () => {
        alert("[A FAIRE] Commander les QR codes sélectionnés.");
    }

    const orderButton = {
        name: "Commander",
        type: "secondaire",
        onclick: order
    }

    const deleteProfile = () => {
        alert("[A FAIRE] Supprimer les profils sélectionnés.");
    }

    const deleteButton = {
        name: "Supprimer",
        type: "delete",
        onclick: deleteProfile
    }

    // CHECKBOX

    const selectAll = () => {
        alert("[A FAIRE] Sélectionne tous les profils.");
    }

    return (
        <div className="flex flex-col h-[fit-content] gap-[70px] py-[70px] px-[20px] w-[1100px] mx-auto">

            <h1>Bienvenue dans votre espace</h1>

            <div className="flex justify-between flex-wrap">

                <div className="flex gap-[22px] items-center">
                    <input type="checkbox" name="ud-select-all" onClick={selectAll}/>
                    <label htmlFor="ud-select-all">Tout sélectionner</label>
                </div>

                <div className='flex gap-x-[41px] items-center flex-wrap'>
                    <GroupButtons img={"/assets/profile.png"} buttons={[downloadButton, orderButton]} />
                    <GroupButtons img={"/assets/qrcode.png"} buttons={[deleteButton]} />
                </div>

            </div>

            <CardsList users={users} />

        </div>
    );
}

export default UserDashboard;