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
    value?: any;
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

  const delContact = (i: number) => {
    if (contacts.length === 2)
      i == 1 ? handleChange("emergencyContacts", { value: [contacts[0]] }) : handleChange("emergencyContacts", { value: [contacts[1]] });
    else
      handleChange("emergencyContacts", { value: [] });
  }

  return (
    <>
      <div className="ContactCard">
        {/* PARTIE 1 */}
        <div className="w-full">
          <h2>Médecin traitant</h2>
        </div>
        <div>
          <div className="flex">
            <div className="w-full mr-8">
              <Field css="w-full mb-4 pb-1" editing={editInfo} type="text" name={"fname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('treatingDoctor.fname', { e }) }} label="Prénom" placeholder={String(userCard.treatingDoctor?.fname) || ""} />
            </div>
            <div className="w-full">
              <Field css="w-full mb-4 pb-1" editing={editInfo} type="text" name={"lname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('treatingDoctor.lname', { e }) }} label="Nom" placeholder={String(userCard.treatingDoctor?.lname) || ""} />
            </div>
          </div>
          <Field css="w-full mb-4 pb-1" editing={editInfo} type="tel" name={"phone"} onChange={(value: string) => { handleChange('treatingDoctor.phone', { value }) }} label="Téléphone" placeholder={userCard.treatingDoctor?.phone || ""} />
        </div>
        {/* PARTIE 2 */}
        {contacts.map((contact, i) => (
          contact &&
          <div key={i}>
            <div className="w-full flex items-center justify-between mt-3 mb-2">
              <h2 className="mr-2">Contact d'urgence {i + 1}</h2>
              {editInfo && <Button onClick={(e) => {
                e.preventDefault();
                delContact(i);
              }
              } box="fill" type="general" buttonText="X" />}
            </div>
            <div>
              <div className="flex">
                <div className="mr-8">
                  <Field css="w-full mb-4 pb-1" editing={editInfo} type="text" name={"emergencyContact" + (i + 1) + "-fname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('emergencyContacts[' + i + '].fname', { e }) }} label="Prénom" mandatory={true} placeholder={String(contact.fname) || ""} />
                </div>
                <div>
                  <Field css="w-full mb-4 pb-1" editing={editInfo} type="text" name={"emergencyContact" + (i + 1) + "-lname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('emergencyContacts[' + i + '].lname', { e }) }} label="Nom" mandatory={true} placeholder={String(contact.lname) || ""} />
                </div>
              </div>
              <Field css="w-full mb-4 pb-1" editing={editInfo} type="tel" name={"emergencyContact" + (i + 1) + "-phone"} onChange={(value: string) => { handleChange('emergencyContacts[' + i + '].phone', { value }) }} label="Téléphone" mandatory={true} placeholder={String(contact.phone) || ""} />
              <Field css="w-full mb-4 pb-1" editing={editInfo} type="text" name={"emergencyContact" + (i + 1) + "-role"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('emergencyContacts[' + i + '].role', { e }) }} label="Rôle" placeholder={String(contact.role)} />
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          {
            (editInfo && contacts && contacts.length < 2) &&
            <Button onClick={(e) => {
              e.preventDefault();
              addContact()
            }
            } box="fill" type="general" buttonText="Ajouter un contact d'urgence" />
          }
        </div>
      </div>
    </>
  );
}

export default ContactCard;
