import MedicalForm from '../components/MedicalForm';
import BlockQR from '../components/BlockQR';
import ContactCard from '../components/ContactCard'
import { useEffect, useState } from 'react';
import users from '../data/users.json'
import UserSwitch from '../components/UserSwitch';

import MedicCards from '../data/medicCards.json'
import React from 'react';

type MedicalCardType = {
    // currentUserId: number,
    // users: number,
}

const MedicalCard: React.FC<MedicalCardType> = ({ }) => {

    // TODO :: function getter requête DB

    // const [user, setUser] = useState(currentUserId);
    // const [card, setCard] = useState(MedicCards[0]);

    const getNewVersionOfCard = () => {
        console.log("coucou");

    }

    // useEffect({getNewVersionOfCard()}, [card])

    // CREER SETTER 

    return (
        <>
            <div className='noFlex overflow-x-hidden'>
                {/* <UserSwitch user={currentUserId} users={users} setUser={setUser} /> */}
                <div className='MedicAside'>
                    <UserSwitch />
                    <BlockQR />
                </div>
                <MedicalForm />
                {/* <ContactCard /> */}
            </div>
        </>
    );
}

export default MedicalCard;