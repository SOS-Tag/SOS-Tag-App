import { BsPencilFill } from 'react-icons/bs';
import Field from './field/Field';
import { useState } from 'react';
import React from 'react';

type ContactCardUserType = {
  // drName : string,
  // drPhone : string,
  // labName : string,
  // labPhone : string,
  // emergencyName : string,
  // emergencyPhone : string,
  // emergencyRole : string,
}

type ContactCardType = {
  // user : ContactCardUserType,
  editInfo: boolean
}

const ContactCard: React.FC<ContactCardType> = ({
  // user,
  editInfo
}) => {

  

  return (
    <>
      <div className="ContactCard">
        <form>
          {/* PARTIE 1 */}
          <div className="formRowMedicCard w-full flex">
            <h2 className="formRowMedicCard-item-a">Médecin traitant</h2>
            {/* <BsPencilFill onClick={handleEditEmergencyContacts} className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedicCard-item-b" /> */}
          </div>
          <div className="formRowMedicCard w-full grid">
            <div className="formRowMedicCard-item-a">
              <Field editing={editInfo} type="text" name={"name"} label="Prénom NOM" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedicCard-item-b">
              <Field editing={editInfo} type="tel" name={"phone"} label="Numéro de téléphone" mandatory={true} placeholder={""} />
            </div>
          </div>
          {/* PARTIE 2 */}
          <div className="formRowMedicCard w-full grid">
            <h2 className="formRowMedicCard-item-a">Contact d'urgence</h2>
          </div>
          <div className="formRowMedicCard w-full grid">
            <div className="formRowMedicCard-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact1-Name"} label="Prénom NOM" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedicCard-item-b">
              <Field editing={editInfo} type="tel" name={"emergencyContact1-Phone"} label="Numéro de téléphone" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedicCard-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact1-Role"} label="Rôle" mandatory={true} placeholder={""} />
            </div>
          </div>
          {/* PARTIE 3 */}
          <div className="formRowMedicCard w-full grid">
            <h2 className="formRowMedicCard-item-a">Contact d'urgence 2</h2>
          </div>
          <div className="formRowMedicCard w-full grid">
            <div className="formRowMedicCard-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact2-Name"} label="Prénom NOM" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedicCard-item-b">
              <Field editing={editInfo} type="tel" name={"emergencyContact2-Phone"} label="Numéro de téléphone" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedicCard-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact2-Role"} label="Rôle" mandatory={true} placeholder={""} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactCard;