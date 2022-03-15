import Field from './field/Field';
import { ChangeEvent, useEffect, useState } from 'react';
import React from 'react';
import Button from './Button';
import { Sheet } from '../generated/graphql';

type ContactCardType = {
  userCard: Sheet,
  editInfo: boolean,
  handleChange: (key: string, { e, value }: {
    e?: React.ChangeEvent<HTMLInputElement>;
    value?: string | boolean;
  }) => void,
};

const ContactCard: React.FC<ContactCardType> = ({
  userCard,
  editInfo,
  handleChange,
}) => {
  const [contacts, setContacts] = useState(userCard.emergencyContacts || []);

  useEffect(() => {
    if (userCard.emergencyContacts)
      setContacts(userCard.emergencyContacts)
  }, [userCard.emergencyContacts]);

  const addContact = () => {
    setContacts([...contacts, {
      fname: '',
      lname: '',
      phone: '',
      role: '',
    }]);
  }

  const delContact = (i:number) => {
    if(contacts.length === 2)
      i===1 ? setContacts([contacts[0]]) : setContacts([contacts[1]]) 
    else 
      setContacts([])
  }

  return (
    <>
      <div className="ContactCard">
        {/* PARTIE 1 */}
        <div className="w-full">
          <h2 className="formRowMedic-subtitle">Médecin traitant</h2>
        </div>
        <div className="formRowMedicCard w-full grid">
          <div className="formRowMedic-item-a">
            <Field editing={editInfo} type="text" name={"fname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('treatingDoctor.fname', { e }) }} label="Prénom" mandatory={true} placeholder={String(userCard.treatingDoctor?.fname) || ""} />
          </div>
          <div className="formRowMedic-item-b">
            <Field editing={editInfo} type="text" name={"lname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('treatingDoctor.lname', { e }) }} label="Nom" mandatory={true} placeholder={String(userCard.treatingDoctor?.lname) || ""} />
          </div>
          <div className="formRowMedic-item-a">
            <Field editing={editInfo} type="tel" name={"phone"} onChange={(value: string) => { handleChange('treatingDoctor.phone', { value }) }} label="Numéro de téléphone" mandatory={true} placeholder={userCard.treatingDoctor?.phone || ""} />
          </div>
        </div>
        {/* PARTIE 2 */}
        {contacts.map((contact, i) => (
          contact &&
          <div key={i}>
            <div className="w-full">
              <h2 className="formRowMedic-subtitle">Contact d'urgence {i + 1}</h2>
              <Button onClick={(e) => {
                e.preventDefault();
                delContact(i)
              }
              } box="fill" type="general" buttonText="X" />
            </div>
            <div className="formRowMedicCard w-full grid">
              <div className="formRowMedic-item-a">
                <Field editing={editInfo} type="text" name={"emergencyContact"+(i+1)+"-fname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('emergencyContacts['+i+'].fname', { e }) }} label="Prénom" mandatory={true} placeholder={String(contact.fname) || ""} />
              </div>
              <div className="formRowMedic-item-b">
                <Field editing={editInfo} type="text" name={"emergencyContact"+(i+1)+"-lname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('emergencyContacts['+i+'].lname', { e }) }} label="Nom" mandatory={true} placeholder={String(contact.lname) || ""} />
              </div>
              <div className="formRowMedic-item-a">
                <Field editing={editInfo} type="tel" name={"emergencyContact"+(i+1)+"-phone"} onChange={(value: string) => { handleChange('emergencyContacts['+i+'].phone', { value }) }} label="Numéro de téléphone" mandatory={true} placeholder={String(contact.phone) || ""} />
              </div>
              <div className="formRowMedic-item-b">
                <Field editing={editInfo} type="text" name={"emergencyContact"+(i+1)+"-role"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('emergencyContacts['+i+'].role', { e }) }} label="Rôle" mandatory={true} placeholder={String(contact.role)} />
              </div>
            </div>
          </div>
        ))}
        {
          (contacts && contacts.length < 2) &&
          <Button onClick={(e) => {
            e.preventDefault();
            addContact()
          }
          } box="fill" type="general" buttonText="Ajouter un contact d'urgence" />
        }
      </div>
    </>
  );
}

export default ContactCard;
