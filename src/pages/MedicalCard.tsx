import MedicalForm from '../components/MedicalForm';
//import BlockQR from '../components/BlockQR';
// import ContactCard from '../components/ContactCard'
import { useState } from 'react';
// import users from '../data/users.json'
// import UserSwitch from '../components/UserSwitch';

import MedicCards from '../data/medicCards.json'
import React from 'react';

const MedicalCard = () => {

    // function getter requête DB
    const [card, setCard] = useState(MedicCards[0]);

    // CREER SETTER 

    return (
        <>
            {/* <UserSwitch user={card} setCard={setCard} /> */}
            <MedicalForm user={card} setCard={setCard} />
            {/* <BlockQR user={card}/> */}
            {/* <ContactCard user={card} setCard={setCard}/> */}
        </>
    );
}

export default MedicalCard;