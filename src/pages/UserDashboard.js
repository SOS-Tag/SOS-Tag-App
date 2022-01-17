import profileIcon from '../assets/profile.png';
import qrIcon from '../assets/qrcode.png';
import GroupButtons from '../components/GroupButtons';

const UserDashboard = (props) => {
    return (
        <div id="ud">

            <header>Header</header>
            <h1>Bienvenue dans votre espace</h1>

            <div className="ud-buttons-bar">
                <div>
                    <input type="checkbox" id="ud-select-all" name="ud-select-all" />
                    <label htmlFor="ud-select-all">Tout sélectionner</label>
                    <GroupButtons name="profile" img={qrIcon} buttons={["Télécharger", "Commander"]} />
                    <GroupButtons name="profile" img={profileIcon} buttons={["Supprimer"]} />
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;