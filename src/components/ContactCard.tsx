import { BsPencilFill } from 'react-icons/bs';
import Field from './field/Field';
import { useEffect, useState } from 'react';
import React from 'react';
import Button from './Button';
import { Sheet, useUpdateCurrentUserSheetMutation } from '../generated/graphql';


    // if (cardContent.emergencyContacts && cardContent.emergencyContacts.length < 2) {
    //   updateSheet({
    //     variables: {
    //       updateCurrentUserSheetInput: {
    //         id: cardContent._id,
    //         changes: {
    //           emergencyContacts: [
    //             ...cardContent.emergencyContacts,
    //             {
    //               fname: "",
    //               lname: "",
    //               phone: "",
    //               role: "",
    //             }
    //           ]
    //         }
    //       }
    //     }
    //   });
    // }

// type ContactCardUserType = {
//   setUserCard: (sheet: Sheet) => void,

// }

type ContactCardType = {
  userCard: Sheet,
  editInfo: boolean,
};

const ContactCard: React.FC<ContactCardType> = ({
  userCard,
  editInfo,
}) => {
  const [updateSheet] = useUpdateCurrentUserSheetMutation();
  
  const [contacts, setContacts] = useState(userCard.emergencyContacts || []);
  
  useEffect(() => {
    if(userCard.emergencyContacts)
      setContacts(userCard.emergencyContacts)
  }, [userCard.emergencyContacts]);

  const addContact = () => {
    setContacts([...contacts,  {
      fname: '',
      lname: '',
      phone: '',
      role: '',
    }]);
  }
 console.log(userCard.emergencyContacts);
 
  return (
    <>
      <div className="ContactCard">
          {/* PARTIE 1 */}
          <div className="w-full">
            <h2 className="formRowMedic-subtitle">Médecin traitant</h2>
          </div>
          <div className="formRowMedicCard w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} type="text" name={"name"} label="Prénom NOM" mandatory={true} placeholder={String(userCard.treatingDoctor?.fname + " " + userCard.treatingDoctor?.lname) || ""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} type="tel" name={"phone"} label="Numéro de téléphone" mandatory={true} placeholder={userCard.treatingDoctor?.phone || ""} />
            </div>
          </div>
          {/* PARTIE 2 */}
          {contacts.map((contact, i) => { 
            console.log("#####################" + contact);
                       
            if (contact)
              return (
                <div key={i}>
                  <div className="w-full">
                    <h2 className="formRowMedic-subtitle">Contact d'urgence {i + 1}</h2>
                  </div>
                  <div className="formRowMedicCard w-full grid">
                    <div className="formRowMedic-item-a">
                      <Field editing={editInfo} type="text" name={"emergencyContact1-Name"} label="Prénom NOM" mandatory={true} placeholder={String(contact.fname + " " + contact.lname) || ""} />
                    </div>
                    <div className="formRowMedic-item-b">
                      <Field editing={editInfo} type="tel" name={"emergencyContact1-Phone"} label="Numéro de téléphone" mandatory={true} placeholder={contact.phone || ""} />
                    </div>
                    <div className="formRowMedic-item-a">
                      <Field editing={editInfo} type="text" name={"emergencyContact1-Role"} label="Rôle" mandatory={true} placeholder={""} />
                    </div>
                  </div>
                </div>
              )
          })}
          {
            (contacts && contacts.length < 2) &&
            <Button onClick={(e) => {
              e.preventDefault();
              addContact()}
            } box="fill" type="general" buttonText="Ajouter un contact d'urgence" />
          }
      </div>
    </>
  );
}

export default ContactCard;