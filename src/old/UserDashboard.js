import './UserDashboard.css';
import users from './../data/users.json';
import GroupButtons from '../components/GroupButtons';
import CardsList from '../components/CardsList';

const UserDashboard = (props) => {

    // BUTTON ACTIONS

    const download = () => {
        alert("[A FAIRE] Télécharger les QR codes sélectionnés.");
    }

    const downloadButton = {
        name: "Télécharger",
        onclick: download
    }

    const order = () => {
        alert("[A FAIRE] Commander les QR codes sélectionnés.");
    }

    const orderButton = {
        name: "Commander",
        onclick: order
    }

    const deleteProfile = () => {
        alert("[A FAIRE] Supprimer les profils sélectionnés.");
    }

    const deleteButton = {
        name: "Supprimer",
        onclick: deleteProfile
    }

    // CHECKBOX

    const selectAll = () => {
        alert("[A FAIRE] Sélectionne tous les profils.");
    }

    return (
        <div className="ud">

            <h1>Bienvenue dans votre espace</h1>

            <div className="ud-actions-bar">

                <div className="ud-select-all">
                    <input type="checkbox" name="ud-select-all" onClick={selectAll}/>
                    <label htmlFor="ud-select-all">Tout sélectionner</label>
                </div>

                <div className='ud-groups-buttons'>
                    <GroupButtons img={"/assets/profile.png"} buttons={[downloadButton, orderButton]} />
                    <GroupButtons img={"/assets/qrcode.png"} buttons={[deleteButton]} />
                </div>

            </div>

            <CardsList users={users} />

        </div>
    );
}

export default UserDashboard;