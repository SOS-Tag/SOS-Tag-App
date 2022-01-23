import { BsPencilFill } from 'react-icons/bs';
import Field from './Field';
import { useState } from 'react';


const ContactCard = (props) => {

    const { user, setCard } = props;

    let c = user.contact;

    console.log("c : " + c.drName);

    // BOUTON EDIT

    const [editable, setEditable] = useState(false);
    function handleEditable() {
        editable ? setEditable(false) : setEditable(true);
    }

    // VALUES

    const [drName, setDrName] = useState(c.drName);
    const [drPhone, setDrPhone] = useState(c.drPhone);
    const [labName, setLabName] = useState(c.labName);
    const [labPhone, setLabPhone] = useState(c.labPhone);
    const [emergencyName, setEmergencyName] = useState(c.emergencyName);
    const [emergencyPhone, setEmergencyPhone] = useState(c.emergencyPhone);
    const [emergencyRole, setEmergencyRole] = useState(c.emergencyRole);

    return (
        <>
            <div className="w-1/4 mt-[25%] bg-SosTagYellowLight ml-[-22%] z-50 px-[50px] py-[20px] rounded-3xl drop-shadow-md">
                <form>
                    {/* PARTIE 1 */}
                    <div className="formRowMedicCard w-full grid">
                        <h2 className="formRowMedicCard-item-a">Médecin traitant</h2>
                        <BsPencilFill onClick={handleEditable} className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedicCard-item-b" />
                    </div>
                    <div className="formRowMedicCard w-full grid">
                        <div className="formRowMedicCard-item-a">
                            <Field onChange={setDrName} editing={editable} type="text" label="Prénom NOM" mandatory={true} value={drName !== null ? drName : ""}/>
                        </div>
                        <div className="formRowMedicCard-item-b">
                            <Field onChange={setDrPhone} editing={editable} type="tel" label="Numéro de téléphone" mandatory={true} value={drPhone !== null ? drPhone : ""}/>
                        </div>
                    </div>

                    {/* PARTIE 2 */}

                    <div className="formRowMedicCard w-full grid">
                        <h2 className="formRowMedicCard-item-a">Laboratoire</h2>
                    </div>
                    <div className="formRowMedicCard w-full grid">
                        <div className="formRowMedicCard-item-a">
                            <Field onChange={setLabName} editing={editable} type="text" label="Entreprise" mandatory={true} value={labName !== null ? labName : ""}/>
                        </div>
                        <div className="formRowMedicCard-item-b">
                            <Field onChange={setLabPhone} editing={editable} type="tel" label="Numéro de téléphone" mandatory={true} value={labPhone !== null ? labPhone : ""}/>
                        </div>
                    </div>

                    {/* PARTIE 3 */}

                    <div className="formRowMedicCard w-full grid">
                        <h2 className="formRowMedicCard-item-a">Contact d'urgence</h2>
                    </div>
                    <div className="formRowMedicCard w-full grid">
                        <div className="formRowMedicCard-item-a">
                            <Field onChange={setEmergencyName} editing={editable} type="text" label="Prénom NOM" mandatory={true} value={emergencyName !== null ? emergencyName : ""}/>
                        </div>
                        <div className="formRowMedicCard-item-b">
                            <Field onChange={setEmergencyPhone} editing={editable} type="tel" label="Numéro de téléphone" mandatory={true} value={emergencyPhone !== null ? emergencyPhone : ""}/>
                        </div>
                        <div className="formRowMedicCard-item-a">
                            <Field onChange={setEmergencyRole} editing={editable} type="text" label="Rôle" mandatory={true} value={emergencyRole !== null ? emergencyRole : ""}/>
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default ContactCard;