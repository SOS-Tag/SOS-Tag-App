import { BsPencilFill } from 'react-icons/bs';
import Field from './field/Field';
import Button from './Button';
import { useState } from 'react';
import React from 'react';
import ContactCard from '../components/ContactCard'

import {medicalCardType} from './Types'
import { userInfo } from 'os';

type MedicalFormProps = {
    // userCard : medicalCardType,
    // setCard: (card: medicalCardType) => void
}

const MedicalForm: React.FC<MedicalFormProps> = ({
    // userCard,
    // setCard,
    }) => {

    // console.log(userCard.general.name);

    // let g = userCard.general;

    // BOUTONS EDIT

    const [editInfo, setEditInfo] = useState(false);
    function handleEditInfo() {
        editInfo ? setEditInfo(false) : setEditInfo(true);
    }


    // OPTIONS

    const trueOrFalse = [
        {
            value: true,
            name: "oui",
        },
        {
            value: false,
            name: "non",
        }
    ];

    const gender_options = [
        {
            value: "Femme",
            name: "F"
        },
        {
            value: "Homme",
            name: "H",
        },
        {
            value: "Autre",
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
            <div className="MedicalFormContainer">
                <form action="">
                    {/* PARTIE 1 */}
                    <div className="formRowMedic w-full formSectionHeader">
                        <h2 className="formRowMedic-item-a">Information générale</h2>
                        <BsPencilFill onClick={handleEditInfo} className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedic-item-b" />
                    </div>

                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={editInfo} name={"fname"} type="text" label="Nom" mandatory={true} placeholder={""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={editInfo} name={"lname"} type="text" label="Prénom" mandatory={true} placeholder={""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={editInfo} name={"sex"} type="select" option={gender_options} label="Sexe" mandatory={true} placeholder={""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={editInfo} name={"dateOfBirth"} type="date" label="Date de naissance" mandatory={true} placeholder={""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={editInfo} name={"nationality"} type="text" label="Nationalité" mandatory={true} placeholder={""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={editInfo} name={"bloodType"} type="select" option={bloodtype_options} label="Groupe sanguin" mandatory={true} placeholder={""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={editInfo} name={"smoker"} type="select" option={trueOrFalse} label="Fumeur ?" mandatory={true} placeholder={""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={editInfo} name={"organDonor"} type="select" option={trueOrFalse} label="Don d'organe ?" mandatory={true} placeholder={""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={editInfo} name={"advanceDirectives"} type="select" option={trueOrFalse} label="Directives anticipées ?" mandatory={true} placeholder={""}/>
                        </div>
                    </div>


                    {/* PARTIE 2 */}
                    <div className="formRowMedic w-full grid formSectionHeader">
                        <h2 className="formRowMedic-item-a">Information santé</h2>
                    </div>

                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={editInfo} name={"allergies"} type="text" label="Allergies" mandatory={true} placeholder={""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={editInfo} name={"currentTreatment"} type="text" label="Traitement en cours" mandatory={true} placeholder={""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={editInfo} name={"medicalHistory"} type="text" label="Antécédents médicaux" mandatory={true} placeholder={""}/>
                        </div>
                    </div>

                    <ContactCard editInfo={editInfo}/>

                    <Button box="fill" type ="general" buttonText="Valider les informations"/> 
                    
                </form>
            </div>    
        </>
    )
}
export default MedicalForm;
