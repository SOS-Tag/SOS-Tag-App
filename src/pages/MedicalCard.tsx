import MedicalForm from '../components/MedicalForm';
import BlockQR from '../components/BlockQR';
import { useEffect, useState } from 'react';
import users from '../data/users.json'
import UserSwitch from '../components/UserSwitch';

import MedicCards from '../data/medicCards.json'
import React from 'react';
import { withAuth } from '../guards/auth';
import { Sheet, useSheetsCurrentUserQuery, useUpdateCurrentUserSheetMutation } from '../generated/graphql';

type MedicalCardType = {
}

// TODO
// CHANGER LE FORMULAIRE EN CHECKANT CE LIEN : https://dev.to/prasanjit/managing-react-forms-efficiently-at-scale-194i

const MedicalCard: React.FC<MedicalCardType> = ({ }) => {

    const { data, loading, error } = useSheetsCurrentUserQuery({ fetchPolicy: 'network-only' });

    const [selectedCardId, setSelectedCardId] = useState(0);

    const [updateSheet] = useUpdateCurrentUserSheetMutation();

    const [allCardsNames, setAllCardsNames] = useState([""]);

    const [userCard, setUserCard] = useState<Sheet>();

    

    useEffect(() => {
        if (data && data.sheetsCurrentUser && data.sheetsCurrentUser.response) {
            const r = data.sheetsCurrentUser.response.map(e => {
                return e.fname + " " + e.lname;
            })
            setAllCardsNames(r)
        }
        
    }, [data]);

    useEffect(() => {
        if (data && data.sheetsCurrentUser && data.sheetsCurrentUser.response) {
            setUserCard(data.sheetsCurrentUser.response[selectedCardId])
        }
    }, [data, selectedCardId]);



    // const submitForm = () => {
    //     const formData = this.state;
    // } 

    // const [fieldsValues, setFieldsValues] = useState({
    //     enabled: "",
    //     fname: "",
    //     lname: "",
    //     sex: "",
    //     dateOfBirth: "",
    //     nationality: "",
    //     bloodType: "",
    //     smoker: "",
    //     organDonor: "",
    //     advanceDirectives: "",
    //     allergies: "",
    //     medicalHistory: "",
    //     currentTreatment: "",
    //     treatingDoctor: {
    //         fname: "",
    //         lname: "",
    //         phone: "",
    //     },
    //     emergencyContacts: {
    //         fname: "",
    //         lname: "",
    //         role: "",
    //         phone: "",
    //     }
    // });

    if (loading) {
        console.log("En attente des informations de l'utilisateur connecté ...")
    }

    if (error) {
        console.log(error.message)
    }

    if (data?.sheetsCurrentUser?.error) {
        console.log(data.sheetsCurrentUser.error?.message as string)
    }

    const a = () => {

    }
    // console.log("############ ID : " + selectedCardId);
    
    

    if (!data || !data.sheetsCurrentUser || !data.sheetsCurrentUser.response || !userCard) {
        return <>
            <p>samarchpa</p>
        </>
    } else {
        return (
            <>
                <div className='noFlex overflow-x-hidden'>
                    <div className='MedicAside'>
                        <UserSwitch id={selectedCardId} setId={setSelectedCardId} cardsNames={allCardsNames} />
                        <BlockQR setContent={a} />
                    </div>
                    <MedicalForm userCard={userCard} setUserCard={setUserCard} />
                </div>
            </>
        );
    }

    // CREER SETTER 

}

export default withAuth(MedicalCard);