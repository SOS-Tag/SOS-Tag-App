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
          <div className="w-full">
            <h2 className="formRowMedic-subtitle">Médecin traitant</h2>
          </div>
          <div className="formRowMedicCard w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} type="text" name={"name"} label="Prénom NOM" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} type="tel" name={"phone"} label="Numéro de téléphone" mandatory={true} placeholder={""} />
            </div>
          </div>
          {/* PARTIE 2 */}
          <div className="w-full">
            <h2 className="formRowMedic-subtitle">Contact d'urgence</h2>
          </div>
          <div className="formRowMedicCard w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact1-Name"} label="Prénom NOM" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} type="tel" name={"emergencyContact1-Phone"} label="Numéro de téléphone" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact1-Role"} label="Rôle" mandatory={true} placeholder={""} />
            </div>
          </div>
          {/* PARTIE 3 */}
          <div className="w-full">
            <h2 className="formRowMedic-subtitle w-full">Contact d'urgence 2</h2>
          </div>
          <div className="formRowMedicCard w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact2-Name"} label="Prénom NOM" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} type="tel" name={"emergencyContact2-Phone"} label="Numéro de téléphone" mandatory={true} placeholder={""} />
            </div>
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} type="text" name={"emergencyContact2-Role"} label="Rôle" mandatory={true} placeholder={""} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactCard;