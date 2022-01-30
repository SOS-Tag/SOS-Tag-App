import { BsPencilFill } from 'react-icons/bs';
import Field from './field/Field';
import { useState } from 'react';
import React from 'react';

type ContactCardUserType = {
  drName : string,
  drPhone : string,
  labName : string,
  labPhone : string,
  emergencyName : string,
  emergencyPhone : string,
  emergencyRole : string,
}

type ContactCardType = {
  user : ContactCardUserType,
}

const ContactCard: React.FC<ContactCardType> = ({
  user,
}) => {

  // BOUTON EDIT
  const [editable, setEditable] = useState(false);
  function handleEditable() {
      editable ? setEditable(false) : setEditable(true);
  }
  // VALUES
  const [drName, setDrName] = useState(user.drName);
  const [drPhone, setDrPhone] = useState(user.drPhone);
  const [labName, setLabName] = useState(user.labName);
  const [labPhone, setLabPhone] = useState(user.labPhone);
  const [emergencyName, setEmergencyName] = useState(user.emergencyName);
  const [emergencyPhone, setEmergencyPhone] = useState(user.emergencyPhone);
  const [emergencyRole, setEmergencyRole] = useState(user.emergencyRole);
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
                <Field editing={editable} type="text" label="Prénom NOM" mandatory={true} placeholder={drName !== null ? drName : ""}/>
            </div>
            <div className="formRowMedicCard-item-b">
                <Field editing={editable} type="tel" label="Numéro de téléphone" mandatory={true} placeholder={drPhone !== null ? drPhone : ""}/>
            </div>
        </div>
        {/* PARTIE 2 */}
        <div className="formRowMedicCard w-full grid">
            <h2 className="formRowMedicCard-item-a">Laboratoire</h2>
        </div>
        <div className="formRowMedicCard w-full grid">
            <div className="formRowMedicCard-item-a">
                <Field editing={editable} type="text" label="Entreprise" mandatory={true} placeholder={labName !== null ? labName : ""}/>
            </div>
            <div className="formRowMedicCard-item-b">
                <Field editing={editable} type="tel" label="Numéro de téléphone" mandatory={true} placeholder={labPhone !== null ? labPhone : ""}/>
            </div>
        </div>
        {/* PARTIE 3 */}
        <div className="formRowMedicCard w-full grid">
            <h2 className="formRowMedicCard-item-a">Contact d'urgence</h2>
        </div>
        <div className="formRowMedicCard w-full grid">
            <div className="formRowMedicCard-item-a">
                <Field editing={editable} type="text" label="Prénom NOM" mandatory={true} placeholder={emergencyName !== null ? emergencyName : ""}/>
            </div>
            <div className="formRowMedicCard-item-b">
                <Field editing={editable} type="tel" label="Numéro de téléphone" mandatory={true} placeholder={emergencyPhone !== null ? emergencyPhone : ""}/>
            </div>
            <div className="formRowMedicCard-item-a">
                <Field editing={editable} type="text" label="Rôle" mandatory={true} placeholder={emergencyRole !== null ? emergencyRole : ""}/>
            </div>
        </div>
      </form>
    </div>
  </>
);
}

export default ContactCard;