import { BsPencilFill } from 'react-icons/bs';
import Field from './field/Field';
import Button from './Button';
import { ChangeEvent, useState } from 'react';
import React from 'react';
import ContactCard from '../components/ContactCard'
import formatDate from '../utils/date';
import { Sheet, SheetDoctorContact } from '../generated/graphql';

type MedicalFormProps = {
  userCard: Sheet,
  editInfo: boolean
  handleSubmit: (e: any) => void,
  setEditInfo: React.Dispatch<React.SetStateAction<boolean>>,
  handleChange: (key: string, { e, value }: {
    e?: React.ChangeEvent<HTMLInputElement> | undefined;
    value?: any;
}) => void
}

const MedicalForm: React.FC<MedicalFormProps> = ({
  userCard,
  editInfo,
  handleSubmit,
  setEditInfo,
  handleChange,
}) => {
  // BOUTONS EDIT

  function handleEditInfo() {
    if (!editInfo)
      setEditInfo(true)
  }

  // OPTIONS

  const trueOrFalse = [
    {
      value: "true",
      name: "oui",
    },
    {
      value: "false",
      name: "non",
    }
  ];

  const gender_options = [
    {
      value: "F",
      name: "F"
    },
    {
      value: "M",
      name: "M",
    },
    {
      value: "O",
      name: "Autre",
    }
  ];

  const bloodtype_options = [
    {
      value: "A+",
      name: "A+"
    },
    {
      value: "A-",
      name: "A-"
    },
    {
      value: "B+",
      name: "B+"
    },
    {
      value: "B-",
      name: "B-"
    },
    {
      value: "O+",
      name: "O+"
    },
    {
      value: "O-",
      name: "O-"
    },
    {
      value: "AB+",
      name: "AB+"
    },
    {
      value: "AB-",
      name: "AB-"
    },
  ];

  return (
    <>
      <div className="hidden desktop:block fixed top-[10%] right-0 opacity-25">
        <img className="" alt="imgSignUp" src="../../public/assets/ImageSignUp.PNG" />
      </div>
      <div className="MedicalFormContainer">
        <form id="formId" onSubmit={handleSubmit} action="">
          {!editInfo && <div className='w-[75vw] tablet:w-auto align-middle text-center cursor-pointer drop-shadow-md inline-flex hover:drop-shadow-lg bg-SosTagYellow px-3 py-1 mb-5 rounded-md hover:animate-pulse' onClick={handleEditInfo}>
            <BsPencilFill className="fill-white p-1 w-8 h-8" />
            <span className='ml-5 text-white font-bold'>Modifier les informations</span>
          </div>}
          {/* PARTIE 1 */}
          <div className="w-full formSectionHeader">
            <h2 className="formRowMedic-subtitle">Information générale</h2>
          </div>

          <div className="formRowMedic w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} name={"fname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('fname', { e }) }} type="text" label="Nom" mandatory={true} placeholder={userCard.fname || ""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} name={"lname"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('lname', { e }) }} type="text" label="Prénom" mandatory={true} placeholder={userCard.lname || ""} />
            </div>
          </div>
          <div className="formRowMedic w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} name={"sex"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('sex', { e }) }} type="select" option={gender_options} label="Sexe" mandatory={true} placeholder={userCard.sex || ""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} name={"dateOfBirth"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('dateOfBirth', { e }) }} type="date" label="Date de naissance" mandatory={true} placeholder={formatDate(userCard.dateOfBirth) || ""} />
            </div>
          </div>
          <div className="formRowMedic w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} name={"nationality"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('nationality', { e }) }} type="text" label="Nationalité" mandatory={true} placeholder={userCard.nationality || ""} />
            </div>
          </div>
          <div className="formRowMedic w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} name={"bloodType"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('bloodType', { e }) }} type="select" option={bloodtype_options} label="Groupe sanguin" mandatory={true} placeholder={userCard.bloodType || ""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} name={"smoker"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('smoker', { e }) }} type="select" option={trueOrFalse} label="Fumeur ?" mandatory={true} placeholder={String(userCard.smoker) || "false"} />
            </div>
          </div>
          <div className="formRowMedic w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} name={"organDonor"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('organDonor', { e }) }} type="select" option={trueOrFalse} label="Don d'organe ?" mandatory={true} placeholder={String(userCard.organDonor) || "false"} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} name={"advanceDirectives"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('advanceDirectives', { e }) }} type="select" option={trueOrFalse} label="Directives anticipées ?" mandatory={true} placeholder={String(userCard.advanceDirectives) || "false"} />
            </div>
          </div>


          {/* PARTIE 2 */}
          <div className="w-full formSectionHeader">
            <h2 className="formRowMedic-subtitle">Information santé</h2>
          </div>

          <div className="formRowMedic w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} name={"allergies"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('allergies', { e }) }} type="text" label="Allergies" mandatory={true} placeholder={userCard.allergies || ""} />
            </div>
            <div className="formRowMedic-item-b">
              <Field editing={editInfo} name={"currentTreatment"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('currentTreatment', { e }) }} type="text" label="Traitement en cours" mandatory={true} placeholder={userCard.currentTreatment || ""} />
            </div>
          </div>
          <div className="formRowMedic w-full grid">
            <div className="formRowMedic-item-a">
              <Field editing={editInfo} name={"medicalHistory"} onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange('medicalHistory', { e }) }} type="text" label="Antécédents médicaux" mandatory={true} placeholder={userCard.medicalHistory || ""} />
            </div>
          </div>

          <ContactCard userCard={userCard} editInfo={editInfo} handleChange={handleChange} />

          {editInfo && <Button box="fill" type="general" buttonText="Valider les informations" />}

        </form>
      </div>
    </>
  )
}
export default MedicalForm;
